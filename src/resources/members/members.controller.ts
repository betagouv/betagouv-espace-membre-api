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

MembersController.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  if (!Number.isInteger(id)) {
    throw new BadRequestException('ID non valide')
  }

  const pet = service.findOne(id)

  if (!pet) {
    throw new NotFoundException('Animal introuvable')
  }

  return res
    .status(200)
    .json(pet)
})

export { MembersController }