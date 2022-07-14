import { Router } from 'express'
import { MembersService } from '~/resources/members/members.service'
import { BadRequestException, NotFoundException } from '~/utils/exceptions'

const MembersController = Router()

const service = new MembersService()

MembersController.get('/', (req, res) => {
  return res
    .status(200)
    .json(service.findAll())
})

MembersController.get('/:username', (req, res) => {
  const username = String(req.params.username)

  if (!Number.isInteger(username)) {
    throw new BadRequestException('ID non valide')
  }

  const member = service.findOne(username)

  if (!member) {
    throw new NotFoundException('Animal introuvable')
  }

  return res
    .status(200)
    .json(member)
})

export { MembersController }