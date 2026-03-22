terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "ap-southeast-2"
  access_key = ""
  secret_key = ""
}

resource "tls_private_key" "rsa_4096" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

variable "key_name" {
  description = "Name of the SSH key pair"
}

resource "aws_key_pair" "key_pair" {
  key_name   = var.key_name
  public_key = tls_private_key.rsa_4096.public_key_openssh
}

resource "local_file" "private_key" {
  content  = tls_private_key.rsa_4096.private_key_pem
  filename = var.key_name
}


resource "aws_instance" "public_instance" {
  ami                    = "ami-0c33c6bd24cee108b"  # Ubuntu 22.04 Sydney
  instance_type           = "t3.micro"
  key_name               = aws_key_pair.key_pair.key_name
  vpc_security_group_ids = ["sg-0645c095916b35529"]

  tags = {
    Name = "public_instance"
  }

  root_block_device {
    volume_size = 30
    volume_type = "gp2"
  }
}