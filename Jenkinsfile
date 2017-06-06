node {
  stage: 'Clean'
  sh "rm dist -rf"

  stage 'Checkout Repository'
  git url: 'https://github.com/nischay30/weatherApp.git'

  stage 'Install Node js'
  nodejs(nodeJSInstallationName: 'nodejs') {
    stage 'Installing Dependencies'
    sh "npm prune"
    sh "npm install create-react-app -g"

    stage 'Building'
    sh "npm run build"
  }

}


