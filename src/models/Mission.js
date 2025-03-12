import { Schema } from "mongoose";

export const MissionSchema = new Schema(
  {

  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)