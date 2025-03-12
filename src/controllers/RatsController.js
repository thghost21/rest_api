import { missionsService } from "../services/MissionsService.js";
import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";

export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getAllRats)
      .get('/:ratId/missions', this.getMissionsByRatId)
  }

  async getAllRats(request, response, next) {
    try {
      const rats = await ratsService.getAllRats()
      response.send(rats)
    } catch (error) {
      next(error)
    }
  }
  /**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */
  async getMissionsByRatId(request, response, next) {
    try {
      const ratId = request.params.ratId
      const ratMissions = await missionsService.getMissionsByRatId(ratId)
      response.send(ratMissions)
    } catch (error) {
      next(error)
    }
  }
}