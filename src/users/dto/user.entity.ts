import { IsNotEmpty, isString } from "class-validator";

export class User{
    id:number;

    @IsNotEmpty({
        message: `Nome obrigatório`
    })
    name:string;
    
    @IsNotEmpty({
        message: `Email obrigatório`
    })
    email:string
    
    @IsNotEmpty({
        message: `Senha obrigatória`
        })
    password:string
    
    @IsNotEmpty({
        message: `Nome completo obrigatório`
    })
    fullName:string

    createdData = new Date();
}