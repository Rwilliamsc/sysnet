import { IsString } from 'class-validator'

export class CreateEvidenceTypeDto {
  @IsString()
  name: string
}
