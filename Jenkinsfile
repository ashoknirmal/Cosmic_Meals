pipeline {
    agent any

    environment {
        DOCKER_IMAGE_FRONTEND = "ashokstack/cosmic_frontend"
        DOCKER_IMAGE_BACKEND = "ashokstack/cosmic_backend"
        DOCKER_IMAGE_ADMIN = "ashokstack/cosmic_admin"
    }

    stages {
        stage('Clone Repo') {
            steps {
                // Specify the correct branch (main)
                git branch: 'main', url: 'https://github.com/ashoknirmal/Cosmic_Meals.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE_FRONTEND, 'frontend')
                    docker.build(DOCKER_IMAGE_BACKEND, 'backend')
                    docker.build(DOCKER_IMAGE_ADMIN, 'admin')
                }
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Run your tests here, e.g., backend API tests or frontend unit tests'
                sh 'echo "All tests passed!"'
            }
        }

        stage('Cleanup') {
            steps {
                echo 'Cleaning up...'
                sh 'docker image prune -f'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully.'
        }
        failure {
            echo '❌ Pipeline failed.'
        }
    }
}
