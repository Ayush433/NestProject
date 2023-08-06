import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({})
export class Address {
  @Prop({ required: true })
  address?: string;

  @Prop()
  city?: string;

  @Prop({ required: true })
  country?: string;

  @Prop()
  ZipCode: number;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
