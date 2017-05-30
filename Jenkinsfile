node {

  stage:
  nodejs(nodeJSInstallationName: 'Node 7.x', configId: '<config-file-provider-id>') {
                    sh 'npm config ls'
         }

  stage: 'Clean'
  sh "rm dist -rf"

  stage 'Checkout Repository'
  git url: 'https://github.com/nischay30/weatherApp.git'

  stage 'Installing Dependencies'
  env.NODE_ENV = "test"
  print "Environment will be : ${env.NODE_ENV}"
  sh "npm prune"
  sh "npm install"

  stage 'Building'
  sh "npm run build"

  sh "mkdir dist -p"
  sh "cd dist && tar cvzf ziggurate-dev-current.tar.gz *"
  step([$class: 'ArtifactArchiver', artifacts: 'dist/*.tar.gz', fingerprint: true])
}