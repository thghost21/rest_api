import { dbContext } from "../db/DbContext.js"

class MissionsService {
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