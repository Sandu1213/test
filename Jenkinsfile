pipeline {
  agent any
  stages {
    stage('config') {
      steps {
        echo 'Start server'
        bat(script: 'server.bat', returnStdout: true)
        echo 'test....'
        bat(script: 'start.bat ', returnStdout: true)
      }
    }
    stage('end') {
      steps {
        echo 'end'
      }
    }
  }
}