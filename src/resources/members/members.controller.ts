import { Router } from 'express'
import { MembersService } from '~/resources/members/members.service'
import { BadRequestException, NotFoundException } from '~/utils/exceptions'
import { Request, Response } from 'express'
import { Member } from '~~/types/members'

const MembersController = Router()

const service = new MembersService()

const formatData = (d: Member) => {
  return {
    username: d.username,
    communication_email: d.communication_email,
    primary_email: d.primary_email,
    secondary_email: d.secondary_email,
    startups: d.startups,
    email: d.communication_email === 'primary' ? d.primary_email : d.secondary_email,
    active: d.primary_email_status === 'EMAIL_ACTIVE',
    employer: d.employer,
    domaine: d.domaine,
  }
}

MembersController.get('/', async (req: Request, res: Response) => {
  const data = await service.findAll()
  return res
    .status(200)
    .json(data.map(formatData))
})

MembersController.get('/:username', async (req: Request, res: Response) => {
  const username = String(req.params.username)

  if (!Number.isInteger(username)) {
    throw new BadRequestException('Username non valide')
  }

  const member : Member | undefined = await service.findOne(username)

  if (!member) {
    throw new NotFoundException('Animal introuvable')
  }

  return res
    .status(200)
    .json(formatData(member))
})

export { MembersController }