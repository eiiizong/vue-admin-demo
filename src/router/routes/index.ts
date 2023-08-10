import { demoRoute } from './demo'
import { sysRoute } from './sys'
import { basicRoute } from './basic'

const routes = [...sysRoute, ...basicRoute, demoRoute]
console.log(routes, 99)

export default routes
