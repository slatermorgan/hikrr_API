import { IsString, MinLength, MaxLength, Matches } from "class-validator";

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.\W+))(?![.\n])(?=.*[a-z]).*$/,
        { message: 'Password must contain at least 1 letter and number'}
    )
    password: string;
}