import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum EstadoBounty {
  WANTED = 'Wanted',
  CAPTURED = 'Captured',
}

export class CreateBountyDto {
  @ApiProperty({
    description: 'Cantidad de belis de la recompensa',
    example: '1000000',
  })
  @IsNumber({}, { message: 'Debe ser un número' })
  @IsPositive({ message: 'Debe ser un número positivo' })
  @Min(0, { message: 'No puede ser negativo' })
  cantidadBellys!: number;

  @ApiProperty({
    description: 'Estado de la recompensa: Wanted o Captured',
    example: 'Wanted',
  })
  @IsOptional()
  @Transform(({ value }) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    typeof value === 'string'
      ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      : value,
  )
  @IsEnum(EstadoBounty, {
    message: 'El estado debe ser Wanted o Captured',
  })
  estado?: EstadoBounty;

  @ApiProperty({
    description: 'Id del pirata',
    example: '69d1894a81830099eb163038',
  })
  @IsMongoId({ message: 'Debe ser un ID válido de MongoDB' })
  @IsNotEmpty({ message: 'El pirata es obligatorio' })
  pirata!: string;
}
