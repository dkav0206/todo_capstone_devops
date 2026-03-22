pipeline {
    agent any

    environment {
        DEPLOY_PATH = '/root/todo_capstone_devops'
    }

    stages{
        stage('Deploy nodejs'){
            steps{
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: '33049699-b31d-4db0-827e-f107c592cced',
                        keyFileVariable: 'KEY',
                        usernameVariable: 'USER',
                    )
                ]){
                    sh """
                        ssh -o StrictHostKeyChecking=no -i ${KEY} ${USER}@134.199.154.72 '
                            cd ${DEPLOY_PATH} && git pull
                            docker-compose down
                            docker-compose build
                            docker-compose up -d 
                        '
                    """
                }
            }
        }
    }
}
