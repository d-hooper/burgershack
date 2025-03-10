import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController{
  
  constructor() {
    super('api/burgers');
    this.router
      .get('', this.getAllBurgers)
  }
  
  async getAllBurgers(request, response, next) {
    try {
      const burgers = await burgersService.getAllBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }
}