import { OrderProductDto } from '../dto/create-order.dto';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderStatus = 'created' | 'pending' | 'delivered';

@Schema()
export class Order extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Restaurant', required: true })
  restaurantId: Types.ObjectId;
  @Prop({ required: true })
  waitress: string;

  @Prop({
    type: String,
    enum: ['created', 'pending', 'delivered'],
    default: 'created',
  })
  state: OrderStatus;

  @Prop({ type: [OrderProductDto], required: true })
  products: OrderProductDto[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
