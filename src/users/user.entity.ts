import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUnique } from "./validation/IsUnique.validator";

export class User{
    id:number;

    @IsNotEmpty({
        message: `Nome obrigatório`
    })
    @IsString()
    @IsUnique({
        message: `Nome já utilizado`
    })
    nickname:string;
    
    @IsEmail()
    @IsNotEmpty({
        message: `Email obrigatório`
    })
    email:string
    
    @IsNotEmpty({
        message: `Senha obrigatória`
    })
    @Exclude({
        toPlainOnly:true
    })
    password:string
    
    @IsNotEmpty({
        message: `Nome completo obrigatório`
    })
    fullName:string

    createdData = new Date();
}