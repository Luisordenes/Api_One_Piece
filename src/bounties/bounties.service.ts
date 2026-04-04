import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBountyDto } from './dto/create-bounty.dto';
import { UpdateBountyDto } from './dto/update-bounty.dto';
import { Bounty } from './entities/bounty.entity';
import { Model } from 'mongoose';

@Injectable()
export class BountiesService {
  constructor(
    @Inject('BOUNTY_MODEL')
    private bountyModel: Model<Bounty>,
  ) {}

  create(createBountyDto: CreateBountyDto): Promise<Bounty> {
    const bounty = new this.bountyModel(createBountyDto);
    return bounty.save();
  }

  findAll(): Promise<Bounty[]> {
    return this.bountyModel
      .find()
      .select('-createdAt -updatedAt')
      .populate('pirata', 'nombre tripulacion')
      .exec();
  }

  async findOne(id: string): Promise<Bounty> {
    const bounty = await this.bountyModel
      .findById(id)
      .populate('pirata', 'nombre tripulacion')
      .exec();

    if (!bounty) {
      throw new NotFoundException('Bounty no encontrado');
    }

    return bounty;
  }

  async findActive(): Promise<Bounty[]> {
    return this.bountyModel
      .find({ estado: 'Wanted' })
      .select('-createdAt -updatedAt')
      .populate('pirata', 'nombre tripulacion')
      .exec();
  }

  async update(id: string, updateBountyDto: UpdateBountyDto): Promise<Bounty> {
    const bounty = await this.bountyModel
      .findByIdAndUpdate(id, updateBountyDto, {
        returnDocument: 'after',
        runValidators: true,
      })
      .exec();

    if (!bounty) {
      throw new NotFoundException('Bounty no encontrado');
    }

    return bounty;
  }

  async remove(id: string): Promise<Bounty> {
    const bounty = await this.bountyModel.findByIdAndDelete(id).exec();

    if (!bounty) {
      throw new NotFoundException('Bounty no encontrado');
    }

    return bounty;
  }
}
