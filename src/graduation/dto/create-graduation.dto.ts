import { IsString } from 'class-validator'

export class CreateGraduationDto {
  @IsString()
  name: string
}
