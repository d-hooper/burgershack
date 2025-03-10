import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {

  constructor() {
    super('api/burgers');
    this.router
      .get('', this.getAllBurgers)
      .post('', this.addBurger)
      .delete('/:burgerId', this.removeBurger)
      .put('/:burgerId', this.updateBurger)
  }

  async getAllBurgers(request, response, next) {
    try {
      const burgers = await burgersService.getAllBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async addBurger(request, response, next) {
    try {
      const burgerData = request.body
      const burger = await burgersService.addBurger(burgerData)
      response.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async updateBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      const updatedBurger = request.body
      const burgerToUpdate = await burgersService.updateBurger(burgerId, updatedBurger)
      response.send(burgerToUpdate)
    } catch (error) {
      next(error)
    }
  }

  async removeBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      const burgerToDelete = await burgersService.removeBurger(burgerId)
      response.send(burgerToDelete)
    } catch (error) {
      next(error)
    }
  }
}