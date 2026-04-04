import * as mongoose from 'mongoose';

export const PirateSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre del pirata es obligatorio'],
      trim: true,
      minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
      set: (value: string) =>
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
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

PirateSchema.index(
  { nombre: 1 },
  { unique: true, collation: { locale: 'en', strength: 2 } }
);
