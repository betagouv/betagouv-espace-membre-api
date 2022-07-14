import cors from 'cors'
import express from 'express'

import { config } from '~/config'
import { MembersController } from '~/resources/members/members.controller'
import { ExceptionsHandler } from '~/middlewares/exceptions.handler'
import { UnknownRoutesHandler } from '~/middlewares/unknownRoutes.handler'
import { AuthHandler } from '~/middlewares/auth.handler'

const app = express()
app.use(express.json())
app.use(cors())
app.use(AuthHandler);
app.use('/api/members', MembersController)
app.all('*', UnknownRoutesHandler)
app.use(ExceptionsHandler)
app.listen(config.API_PORT, () => console.log('Api start'))
