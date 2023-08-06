import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsServices } from './controller/job.controller';
import { JobSchema } from './Schema/job.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Job', schema: JobSchema }])],
  controllers: [],
  providers: [JobsServices],
  exports: [MongooseModule],
})
export class JobModules {}
