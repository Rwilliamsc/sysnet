import { IsDate, IsNumber, IsString, IsUrl } from 'class-validator'

export class CreateActivityDto {
  @IsString()
  documentNumber: string

  @IsString()
  description: string

  @IsString()
  activityType: string

  @IsNumber()
  hours: number

  @IsUrl({
    require_protocol: true,
    require_host: true,
    require_valid_protocol: true,
  })
  evidence: string

  @IsString()
  status: string
}
