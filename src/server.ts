import { app } from './app'
import { env } from './env'

app.listen({
    host: '0.0.0.0',
    port: env.PORT
}).then(() => {
    console.log(`
    Server is running on http://localhost:${env.PORT}
    See the documentation at http://localhost:${env.PORT}/docs
    `)
})