import { execSync } from 'child_process'
import path from 'path'

module.exports = async () => {
  execSync('docker-compose -f ./docker-compose.yaml down', {
    cwd: path.resolve(__dirname, '../../')
  })
}
