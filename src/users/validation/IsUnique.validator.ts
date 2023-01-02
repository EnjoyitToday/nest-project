import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserService } from "../user.service";

@Injectable()
@ValidatorConstraint()
export class IsUniqueConstraint implements ValidatorConstraintInterface{

    constructor (private UserService:UserService){}

    validate(nickname:string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.UserService.getUsersByNickname(nickname)
    }

};

export function IsUnique (validatorOptions?:ValidationOptions){
    return function(object:Object,propertyName:string){
        registerDecorator({
            target:object.constructor,
            propertyName:propertyName,
            options:validatorOptions,
            constraints:[],
            validator:IsUniqueConstraint
        })
    }
}