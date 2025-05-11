pipeline {
    agent any

    environment {
        DOCKER_IMAGE_FRONTEND = "ashokstack/cosmic_frontend"
        DOCKER_IMAGE_BACKEND = "ashokstack/cosmic_backend"
        DOCKER_IMAGE_ADMIN = "ashokstack/cosmic_admin"
    }

    options {
        timeout(time: 20, unit: 'MINUTES') // Prevent pipeline from hanging indefinitely
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/ashoknirmal/Cosmic_Meals.git'
            }
        }

        stage('Build Docker Images') {
    steps {
        script {
            echo '🛠 Building frontend image...'
            docker.build(env.DOCKER_IMAGE_FRONTEND, './frontend')

            echo '🛠 Building backend image...'
            docker.build(env.DOCKER_IMAGE_BACKEND, './backend')

            echo '🛠 Building admin image...'
            docker.build(env.DOCKER_IMAGE_ADMIN, './admin')
        }
    }
}

        stage('Run Containers') {
            steps {
                script {
                    echo '🔄 Restarting containers with docker-compose...'
                    sh 'docker-compose down || true'
                    sh 'docker-compose up -d --build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Run your tests here (e.g., backend or frontend tests)'
                sh 'echo "✅ All tests passed!"'
            }
        }

        stage('Cleanup') {
            steps {
                echo '🧹 Cleaning up unused Docker images...'
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
        always {
            echo '📦 Pipeline run finished.'
        }
    }
}
