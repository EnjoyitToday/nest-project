import { Controller, Module } from "@nestjs/common/decorators";
import { IsUnique, IsUniqueConstraint } from "./validation/IsUnique.validator";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers:[UserController],
    providers:[UserService,IsUniqueConstraint]
})
export class UserModule{

}