import { Document } from 'mongoose';
import { SocialLinks } from './social-links.interface';

export interface User extends Document {
  readonly name: string;
  readonly title: string;
  readonly email: string;
  readonly bio: string;
  readonly phone: string;
  readonly profile_picture: string;
  readonly location: string;
  readonly social_links: SocialLinks;
  readonly languages: string[];
}
