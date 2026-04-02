import { PartialType } from '@nestjs/mapped-types';
import { CreatePirateDto } from './create-pirate.dto';

export class UpdatePirateDto extends PartialType(CreatePirateDto) {}
