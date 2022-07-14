import type { Member } from '~~/types/members'
import db from '../../db'

export class MembersService {
  members: Member[] = []

  async findAll(): Promise<Member[]> {
    return await db('users').select()
  }

  /**
   * Find all members
   * @param username
   */
  async findOne(username: string): Promise<Member | undefined> {
    return await db('users').where({ username }).first()
  }
}
