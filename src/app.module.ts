import { Inject, Module } from '@nestjs/common';

// import { EmployerModules } from './employers/employers.module';
// import { JobModules } from './jobs/job.modules';
import { UserModules } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JobModules } from './jobs/job.modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.dev.env'],
    }),
    UserModules,
    JobModules,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const password = configService.get('DB_PASSWORD');
        const uri = `mongodb+srv://adhikariayush57:${password}@nestjs.lfvh6tf.mongodb.net/`;
        return {
          uri,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
