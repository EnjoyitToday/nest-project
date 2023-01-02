import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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

    @Get(':password')
    public getUsersByName(@Param('password') password:string):User{
        return this.UserService.getUsersByName(password);
    };

    @Post()
    public createUser(@Body() user:User):User{
        return this.UserService.createUser(user);
    };
}