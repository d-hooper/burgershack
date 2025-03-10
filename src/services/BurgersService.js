import { dbContext } from "../db/DbContext.js"

class BurgersService {
  async getAllBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }

  async addBurger(burger) {
    const newBurger = await dbContext.Burgers.create(burger)
    return newBurger
  }

  async removeBurger(burgerId) {
    const burgerToDelete = await dbContext.Burgers.findById(burgerId)
    await burgerToDelete.deleteOne()
    return burgerToDelete
  }
}

export const burgersService = new BurgersService()