import { Injectable } from "@nestjs/common";
import { User } from "./dto/user.entity";

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
        return this.users.find(item => item.nickname == nickname);
    };

    public createUser(user:User):User{
        this.users.push(user);

        return user;

    };
}