import { Module } from '@nestjs/common';
import { userController } from './controllers/user.controller';
import { accountController } from './controllers/account.controller';

@Module({
  imports: [],
  controllers: [userController, accountController],
  providers: [],
  exports: [],
})
export class UserModules {}
