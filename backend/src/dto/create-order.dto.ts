export class CreateOrderDto {
  readonly products: OrderProductDto[];
  readonly restaurantId: string;
}

export class OrderProductDto {
  readonly productId: string;
  readonly quantity: number;
}
