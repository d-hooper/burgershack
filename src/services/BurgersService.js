import { dbContext } from "../db/DbContext.js"
import { NotFound } from "../utils/Errors.js"

class BurgersService {
  async getAllBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }

  async addBurger(burger) {
    const newBurger = await dbContext.Burgers.create(burger)
    return newBurger
  }

  async updateBurger(burgerId, updatedBurger) {
    const burger = await dbContext.Burgers.findById(burgerId)
    if (burger == null) {
      throw new NotFound("Could not find a burger with id" + burgerId);

    }
    burger.name = updatedBurger.name
    burger.price = updatedBurger.price
    await burger.save()
    return burger
  }

  async removeBurger(burgerId) {
    const burgerToDelete = await dbContext.Burgers.findById(burgerId)
    if (burgerToDelete == null) {
      throw new NotFound("Could not find a burger with id" + burgerId);

    }
    await burgerToDelete.deleteOne()
    return burgerToDelete
  }
}

export const burgersService = new BurgersService()