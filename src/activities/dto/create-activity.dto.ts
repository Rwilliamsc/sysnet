import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator'

export class CreateActivityDto {
  @IsString()
  activityDate: Date
  @IsString()
  description: string
  @IsString()
  contestation: string
  @IsBoolean()
  contested: false
  @IsNumber()
  activityHours: number
  @IsString()
  @IsUrl({ require_protocol: true })
  urlEvidence: string
  @IsBoolean()
  approved: boolean
  @IsEnum(['pending', 'approved', 'rejected', 'contested'])
  status: string
  @IsNumber()
  graduationId: number
  @IsNumber()
  quarterId: number
  @IsNumber()
  activityTypeId: number
  @IsNumber()
  evidenceTypeId: number
  @IsNumber()
  userId: number
}
