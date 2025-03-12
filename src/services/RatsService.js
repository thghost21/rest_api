import { dbContext } from "../db/DbContext.js"

class RatsService {
  async getAllRats() {
    const rat = await dbContext.Rats.find()
    return rat
  }

}

export const ratsService = new RatsService()