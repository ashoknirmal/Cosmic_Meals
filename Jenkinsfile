pipeline {
  agent any

  environment {
    DOCKER_COMPOSE_FILE = 'docker-compose.yml'
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/ashoknirmal/Cosmic_Meals.git'
      }
    }

    stage('Build Docker Images') {
      steps {
        sh 'docker-compose build'
      }
    }

    stage('Run Containers') {
      steps {
        sh 'docker-compose up -d'
      }
    }

    stage('Test') {
      steps {
        echo 'Run backend or frontend tests here (optional)'
        // e.g., sh 'docker exec backend npm test'
      }
    }

    stage('Deploy Complete') {
      steps {
        echo 'Application deployed successfully!'
      }
    }
  }

  post {
    always {
      echo 'Cleaning up...'
      sh 'docker-compose down'
    }
  }
}
