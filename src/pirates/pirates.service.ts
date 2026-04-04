import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePirateDto } from './dto/create-pirate.dto';
import { UpdatePirateDto } from './dto/update-pirate.dto';
import { Pirate } from './entities/pirate.entity';
import { Model } from 'mongoose';

@Injectable()
export class PiratesService {
  constructor(
    @Inject('PIRATE_MODEL')
    private pirateModel: Model<Pirate>,
  ) {}

  async create(createPirateDto: CreatePirateDto): Promise<Pirate> {
    try {
      const pirate = new this.pirateModel(createPirateDto);
      return await pirate.save();
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (error?.code === 11000) {
        throw new BadRequestException('El nombre del pirata ya existe');
      }
      throw error;
    }
  }

  findAll(): Promise<Pirate[]> {
    return this.pirateModel.find().select('-createdAt -updatedAt').exec();
  }

  async findOne(id: string): Promise<Pirate> {
    const pirate = await this.pirateModel.findById(id).exec();

    if (!pirate) {
      throw new NotFoundException('Pirata no encontrado');
    }

    return pirate;
  }

  async update(id: string, updatePirateDto: UpdatePirateDto): Promise<Pirate> {
    const pirate = await this.pirateModel
      .findByIdAndUpdate(id, updatePirateDto, {
        returnDocument: 'after',
        runValidators: true,
      })
      .exec();

    if (!pirate) {
      throw new NotFoundException('Pirata no encontrado');
    }

    return pirate;
  }

  async remove(id: string): Promise<Pirate> {
    const pirate = await this.pirateModel.findByIdAndDelete(id).exec();

    if (!pirate) {
      throw new NotFoundException('Pirata no encontrado');
    }

    return pirate;
  }
}
