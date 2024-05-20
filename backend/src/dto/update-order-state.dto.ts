import { IsIn } from 'class-validator';

export class UpdateOrderStateDto {
  @IsIn(['created', 'pending', 'delivered'])
  state: 'created' | 'pending' | 'delivered';
}
