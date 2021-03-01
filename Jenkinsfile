pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Build '
      }
    }

    stage('Test') {
      parallel {
        stage('Test') {
          steps {
            echo 'testing'
          }
        }

        stage('SOMETHING') {
          steps {
            echo 'SOMETHING ELSE'
          }
        }

      }
    }

    stage('Staging') {
      steps {
        echo 'Staging'
      }
    }

    stage('Deployment Promt') {
      steps {
        echo 'Deployment'
        input(message: 'Deploy to Production?', ok: 'yes')
      }
    }

    stage('') {
      steps {
        echo 'Deployment'
        git(url: 'https://github.com/MattRank93/THIS.git', branch: 'dev')
      }
    }

  }
}