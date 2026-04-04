import * as mongoose from 'mongoose';

export const BountySchema = new mongoose.Schema(
  {
    cantidadBellys: {
      type: Number,
      required: [true, 'La cantidad de bellys es obligatoria'],
      min: [0, 'La cantidad no puede ser negativa'],
    },
    estado: {
      type: String,
      enum: {
        values: ['Wanted', 'Captured'],
        message: 'El estado debe ser Wanted o Captured',
      },
      default: 'Wanted',
      set: (value: string) =>
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
    },
    pirata: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pirate',
      required: [true, 'El pirata es obligatorio'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
