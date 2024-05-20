import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RestaurantDocument = HydratedDocument<Restaurant>;

@Schema()
export class Restaurant {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  address: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
