import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { RatSchema } from '../models/Rat.js';
import { LocationSchema } from '../models/Location.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rat', RatSchema);
  Locations = mongoose.model('Location', LocationSchema);
}

export const dbContext = new DbContext()
