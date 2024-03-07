import { IsString } from 'class-validator'

export class CreateQuarterDto {
  @IsString()
  name: string
}
