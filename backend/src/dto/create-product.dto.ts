export class CreateProductDto {
  readonly name: string;
  readonly price: number;
  readonly description?: string;
  readonly restaurantId: string;
}
