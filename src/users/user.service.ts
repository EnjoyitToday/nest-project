import { Injectable } from "@nestjs/common";
import { User } from "./dto/user.entity";

@Injectable()
export class UserService{

    private users:User[] = [];

    public getUsers(){
        return this.users
    };

    public getUsersByName(password:string):any{
        let found = this.users.find(item => item.password == password);
        return found;
    };

    createUser(user:User):User{
        this.users.push(user);

        return user;

    };
}