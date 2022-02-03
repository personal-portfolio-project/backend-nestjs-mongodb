import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { CreateSocialLinksDto } from './create-social-links.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  readonly name: string;

  @IsArray()
  @IsNotEmpty()
  @ArrayNotEmpty()
  @ArrayUnique()
  readonly title: string[];

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
