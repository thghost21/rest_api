import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";

export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getAllRats)
  }

  async getAllRats(request, response, next) {
    try {
      const rats = await ratsService.getAllRats()
      response.send(rats)
    } catch (error) {
      next(error)
    }
  }
}