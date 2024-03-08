import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNumber,
  IsString,
  IsUrl,
} from 'class-validator'

export class CreateActivityDto {
  @IsString()
  activityDate: Date
  @IsNumber()
  activityHours: number
  @IsString()
  @IsUrl({ require_protocol: true })
  urlEvidence: string
  @IsBoolean()
  approved: boolean
  @IsEnum(['pending', 'approved', 'rejected'])
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
