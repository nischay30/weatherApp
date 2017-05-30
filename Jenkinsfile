node {


  stage: 'Clean'
  sh "rm dist -rf"

  stage 'Checkout Repository'
  git url: 'https://github.com/nischay30/weatherApp.git'

  stage: 'Prepare environment'
  docker.image('node').inside {
            stage "Checkout and build deps"
                sh "npm install"

            stage 'Building'
            sh "npm run build"
                }

  sh "mkdir dist -p"
  sh "cd dist && tar cvzf ziggurate-dev-current.tar.gz *"
  step([$class: 'ArtifactArchiver', artifacts: 'dist/*.tar.gz', fingerprint: true])
}