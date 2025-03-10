import { dbContext } from "../db/DbContext.js"

class BurgersService {
  async getAllBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }
}

export const burgersService = new BurgersService()