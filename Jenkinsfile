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

    stage('Deployement') {
      steps {
        echo 'Deployment'
        git(url: 'https://github.com/MattRank93/THIS.git', branch: 'dev', credentialsId: 'mattrank93git')
      }
    }

  }
}