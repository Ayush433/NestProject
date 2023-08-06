import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address, AddressSchema } from './Commom/address.schema';
@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ required: true })
  age?: number;

  @Prop({
    enum: ['Approval_Pending', 'APPROVED', 'Blocked', 'Delete'],
    default: 'Pending',
  })
  status?: string;

  @Prop({
    enum: ['Student', 'Employer'],
    default: 'Student',
    required: true,
    immutable: true,
  })
  accountType: string;

  @Prop({ type: AddressSchema, required: true })
  address: Address;
}
export const UserModel = User.name;
export const userSchema = SchemaFactory.createForClass(User);
