import { IsBoolean, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePirateDto {
  @ApiProperty({
    description: 'Nombre del pirata',
    example: 'Luffy',
  })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  nombre!: string;

  @ApiProperty({
    description: 'Nombre de la tripulacion del pirata',
    example: 'Piratas barba blanca',
  })
  @IsNotEmpty({ message: 'La tripulación es obligatoria' })
  tripulacion!: string;

  @ApiProperty({
    description: 'Si comio una fruta del diablo: true o false',
    example: 'true',
  })
  @IsOptional()
  @IsBoolean({
    message: 'Se debe indicar si tiene fruta del fiablo con true o false',
  })
  tieneFrutaDelDiablo?: boolean;
}
