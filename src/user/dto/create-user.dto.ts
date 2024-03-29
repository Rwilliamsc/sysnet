import { User } from '../entities/user.entity'
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator'

export class CreateUserDto extends User {
  @IsString()
  @MaxLength(11)
  documentNumber: string

  @IsEmail()
  email: string

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string

  @IsString()
  name: string

  @IsString()
  role: string
}
