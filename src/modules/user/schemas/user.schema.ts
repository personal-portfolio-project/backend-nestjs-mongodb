import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Abstract } from 'src/common/schemas/abstract.schema';
import { SocialLinksInterface } from '../interfaces/social-links.interface';
import { UserInterface } from '../interfaces/user.interface';

export type UserDocument = User & Document;

class SocialLinkSchema implements SocialLinksInterface {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  url: string;

  @Prop({ required: true, type: String })
  logo: string;
}

// @Schema({ timestamps: true })
@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class User extends Abstract implements UserInterface {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: [String] })
  title: string[];

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
