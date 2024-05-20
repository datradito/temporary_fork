import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'Restaurant' })
  restaurantId: Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
