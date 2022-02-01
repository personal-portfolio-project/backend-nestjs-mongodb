import { SocialLinks } from '../interfaces/SocialLinks.interface';

export class CreateUserDto {
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
