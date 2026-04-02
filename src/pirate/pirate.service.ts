import { Injectable, Inject } from '@nestjs/common';
import { CreatePirateDto } from './dto/create-pirate.dto';
import { UpdatePirateDto } from './dto/update-pirate.dto';
import { Pirate } from './entities/pirate.entity';
import { Model } from 'mongoose';

@Injectable()
export class PirateService {
  constructor(
    @Inject('PIRATE_MODEL')
    private pirateModel: Model<Pirate>,
  ) {}

  create(createPirateDto: CreatePirateDto): Promise<Pirate> {
    const pirate = new this.pirateModel(createPirateDto);
    return pirate.save();
  }

  findAll(): Promise<Pirate[]> {
    return this.pirateModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} pirate`;
  }

  update(id: number, updatePirateDto: UpdatePirateDto) {
    return `This action updates a #${id} pirate`;
  }

  remove(id: number) {
    return `This action removes a #${id} pirate`;
  }
}
