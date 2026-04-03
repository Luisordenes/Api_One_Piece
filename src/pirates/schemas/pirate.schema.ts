import * as mongoose from 'mongoose';

export const PirateSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre del pirata es obligatorio'],
      unique: true,
      trim: true,
    },
    tripulacion: {
      type: String,
      required: [true, 'La tripulación es obligatoria'],
      trim: true,
    },
    tieneFrutaDelDiablo: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
