pipeline {
    agent any

    triggers {
        pollSCM('*/5 * * * *')
    }

    stages {
        stages {
                stage('Build') {
                    steps {
                        sh 'npm install'
                    }
                }
            }

        stage('Long-running Verification') {
            environment {
            }
            parallel {
                stage('Integration Tests') {
                    steps {
                    }
                    post {
                        always {
                        }
                    }
                }
                stage('Code Analysis') {
                    steps {
                    }
                }
            }
        }
        stage('Assemble') {
            steps {
            }
        }
        stage('Promotion') {
            steps {
                timeout(time: 1, unit:'DAYS') {
                    input 'Deploy to Production?'
                }
            }
        }
        stage('Deploy to Production') {
            environment {
            }
            steps {
            }
        }
    }
    post {
        failure {
            mail to: 'matthewrank93@gmail.com', subject: 'Build failed', body: 'Please fix!'
        }
    }
}


}
