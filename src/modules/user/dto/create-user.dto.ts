import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { CreateSocialLinksDto } from './create-social-links.dto';

export class CreateUserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly title: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly bio: string;

  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  @IsUrl()
  readonly profile_picture: string;

  @IsNotEmpty()
  readonly location: string;

  @IsArray()
  @ValidateNested()
  @Type(() => CreateSocialLinksDto)
  readonly social_links: CreateSocialLinksDto[] = [];

  @IsNotEmpty()
  @IsArray()
  readonly languages: string[];
}
