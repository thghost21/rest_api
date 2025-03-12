import { locationService } from "../services/LocationsService.js";
import BaseController from "../utils/BaseController.js";

export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getAllLocations)
  }
  async getAllLocations(request, response, next) {
    try {
      const locations = await locationService.getAllLocations()
      response.send(locations)
    } catch (error) {
      next(error)
    }
  }

}