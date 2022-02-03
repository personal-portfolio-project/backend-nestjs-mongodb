import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SocialLinks } from '../interfaces/social-links.interface';

export type UserDocument = User & Document;

class SocialLinkSchema {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  url: string;

  @Prop({ required: true, type: String })
  logo: string;
}

@Schema()
export class User {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  title: number;

  @Prop({ required: true, type: String })
  email: string;

  @Prop({ required: true, type: String })
  bio: string;

  @Prop({ required: true, type: String })
  phone: string;

  @Prop({ required: true, type: String })
  profile_picture: string;

  @Prop({ required: true, type: String })
  location: string;

  @Prop({ required: true, type: [], default: [] })
  social_links: SocialLinkSchema[];

  @Prop({ required: true, type: [String] })
  languages: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
