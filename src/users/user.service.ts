import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService{

    private users:User[] = [];

    public getUsers(){
        return this.users
    };

    public getUsersByPass(password:string):User{
        return this.users.find(item => item.password == password);
         
    };

    public getUsersByNickname(nickname:string):User{
        const found = this.users.find(item => item.nickname == nickname);

        return found
    };

    public createUser(user:User):User{
        this.users.push(user);

        return user;

    };
}