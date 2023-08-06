import { Module } from '@nestjs/common';
import { usersServices } from './controllers/user.controller';
import { accountController } from './controllers/account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema, UserModel } from '../users/userSchema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel, schema: userSchema }]),
  ],
  controllers: [accountController],
  providers: [usersServices],
  exports: [MongooseModule],
})
export class UserModules {}
