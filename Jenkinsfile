pipeline {
    agent any

    environment {
        DEPLOY_PATH = '/home/ubuntu/todo_capstone_devops'
        EC2_HOST    = '134.199.154.72'
    }

    stages{
        stage('Deploy'){
            steps{
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: 'b131397e-bf85-4107-815d-aa9965b20126',
                        keyFileVariable: 'KEY',
                        usernameVariable: 'USER',
                    )
                ]){
                    sh """
                        ssh -o StrictHostKeyChecking=no -i ${KEY} ${USER}@${EC2_HOST} '
                            cd ${DEPLOY_PATH} && sudo git pull
                            sudo docker-compose down
                            sudo docker-compose build
                            sudo docker-compose up -d 
                        '
                    """
                }
            }
        }
    }
}
