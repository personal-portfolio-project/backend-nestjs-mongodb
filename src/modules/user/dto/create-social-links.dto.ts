import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateSocialLinksDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsUrl()
  readonly url: string;

  @IsNotEmpty()
  @IsUrl()
  readonly logo: string;
}
