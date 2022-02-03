import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AbstractDocument = Abstract & Document;

export class Abstract {
  @Prop({ required: true, type: Date, default: new Date() })
  created_at: Date;

  @Prop({ required: true, type: Date, default: new Date() })
  updated_at: Date;

  @Prop({ required: false, type: String, default: null })
  deleted_at: Date;
}

export const AbstractSchema = SchemaFactory.createForClass(Abstract);
