import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobDocument, JobModels } from '../Schema/job.schema';

@Injectable()
export class JobsServices {
  constructor(
    @InjectModel(JobModels) private readonly jobModel: Model<JobDocument>,
  ) {
    console.log(this.jobModel);
  }
}
