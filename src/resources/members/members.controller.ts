import { Router } from 'express'
import { MembersService } from '~/resources/members/members.service'
import { BadRequestException, NotFoundException } from '~/utils/exceptions'
import { Request, Response } from 'express'

const MembersController = Router()

const service = new MembersService()

MembersController.get('/', async (req: Request, res: Response) => {
  const data = await service.findAll()
  return res
    .status(200)
    .json(data)
})

MembersController.get('/:username', async (req: Request, res: Response) => {
  const username = String(req.params.username)

  if (!Number.isInteger(username)) {
    throw new BadRequestException('ID non valide')
  }

  const member = await service.findOne(username)

  if (!member) {
    throw new NotFoundException('Animal introuvable')
  }

  return res
    .status(200)
    .json(member)
})

export { MembersController }