import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User, UserModel } from '../../users/userSchema/user.schema';
import { Job_Type } from '../Constants/job.constants';

@Schema({
  timestamps: true,
})
export class Job {
  @Prop({ type: Types.ObjectId, ref: UserModel, required: true })
  employers: string | Types.ObjectId | User;
  @Prop({ required: true })
  JobName: string;
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  companyName: string;

  @Prop({})
  description: string;
  @Prop({ required: true })
  experience: string;
  @Prop({})
  tags: string;

  @Prop({
    type: String,
    enum: Object.keys(Job_Type),
    required: true,
  })
  type: Job_Type;

  @Prop({ required: true })
  salary?: number;
}
export type JobDocument = User & Document;
export const JobModels = Job.name; //job
export const JobSchema = SchemaFactory.createForClass(Job);
