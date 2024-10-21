const { DockerComposeEnvironment } = require('testcontainers')

module.exports = async () => {
  ;(global as any).environment = await new DockerComposeEnvironment(
    './',
    './docker-compose.yaml'
  ).up()
}
