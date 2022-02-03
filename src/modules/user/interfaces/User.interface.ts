import { SocialLinksInterface } from './social-links.interface';

export interface UserInterface {
  readonly name: string;
  readonly title: string[];
  readonly email: string;
  readonly bio: string;
  readonly phone: string;
  readonly profile_picture: string;
  readonly location: string;
  readonly social_links: SocialLinksInterface[];
  readonly languages: string[];
}
