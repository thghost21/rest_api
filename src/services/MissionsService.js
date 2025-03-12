import { dbContext } from "../db/DbContext.js"

class MissionsService {
  async getMissionsAtLocation(locationId) {
    const locationMissions = await dbContext.Missions.find({ locationId: locationId }).populate('rat', '-name -picture')
    return locationMissions
  }
  async getMissionsByRatId(ratId) {
    const ratMissions = await dbContext.Missions.find({ ratId: ratId })
    return ratMissions

  }
  async createMission(missionData) {
    const createdMission = await dbContext.Missions.create(missionData)
    await createdMission.populate('location')
    await createdMission.populate('rat', '-name -picture')

    return createdMission
  }
  async getAllMissions() {
    const missions = await dbContext.Missions.find().populate('location').populate('rat', '-name -picture')
    return missions
  }

}
export const missionsService = new MissionsService()