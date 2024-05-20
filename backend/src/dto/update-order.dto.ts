import { OrderProductDto } from './create-order.dto';

export class UpdateOrderDto {
  readonly products: OrderProductDto[];
  readonly restaurantId: string;
  readonly state?: 'created' | 'pending' | 'delivered';
}
