import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
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
        const found = this.users.find(item => item.nickname == nickname);
        if(!found){
            throw new NotFoundException({
                statusCode:HttpStatus.NOT_FOUND,
                message:"user not found"
            });
        }
        return 
    };

    public createUser(user:User):User{
        this.users.push(user);

        return user;

    };
}