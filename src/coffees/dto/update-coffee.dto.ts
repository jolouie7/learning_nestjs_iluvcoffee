import { CreateCoffeeDto } from './create-coffee.dto';
import { PartialType } from '@nestjs/mapped-types';
// export class UpdateCoffeeDto {
//   name?: string;
//   brand?: string;
//   flavors?: string[];
// }

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
