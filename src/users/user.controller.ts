import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { NestReponse } from "src/core/http/nest-response";
import { NestReponseBuilder } from "src/core/http/nest-response-builder";
import { User } from "./dto/user.entity";
import { UserService } from "./user.service";

@Controller(`users`)
export class UserController{

    constructor(
        private UserService:UserService
    ){}

    @Get()
    public getUsers(){
        return this.UserService.getUsers();
    };

    @Get('/name/:name')
    public getUsersByName(@Param('name') name:string):User{
        return this.UserService.getUsersByNickname(name);
    };

    @Get('/password/:password')
    public getUsersByPass(@Param('password') password:string):User{
        return this.UserService.getUsersByPass(password);
    };

    @Post()
    public createUser(@Body() user:User ):NestReponse{
        const userCreated = this.UserService.createUser(user);
        return new NestReponseBuilder()
            .setStatus(HttpStatus.CREATED)
            .setHeaders({
                'Location':`users/${userCreated.nickname}`
            })
            .setBody(userCreated)
            .build();
    };
}