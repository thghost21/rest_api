import { locationService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getAllLocations)
      .get('/:locationId/missions', this.getMissionsAtLocation)
  }
  async getMissionsAtLocation(request, response, next) {
    const locationId = request.params.locationId
    const MissionsAtLocation = await missionsService.getMissionsAtLocation(locationId)
    response.send(MissionsAtLocation)
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