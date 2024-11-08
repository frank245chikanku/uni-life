import { IsNotEmpty, IsString } from "class-validator";

export class RegisterDto{
    @IsString()
    @IsNotEmpty()
    username:string;

    @IsString()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    password:string;

    constructor(d:RegisterDto){
        this.username=d.username;
        this.email=d.email;
        this.password=d.password;
    }
}

export class LoginDto{

    @IsString()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    password:string;

    constructor(d:LoginDto){
        this.email=d.email;
        this.password=d.password;
    }
}