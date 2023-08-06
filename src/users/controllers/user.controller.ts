import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel, UserDocument } from '../userSchema/user.schema';

@Injectable()
export class usersServices {
  constructor(
    @InjectModel(UserModel) private readonly userModel: Model<UserDocument>,
  ) {
    console.log(this.userModel);
  }
}
