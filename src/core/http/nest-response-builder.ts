import { NestReponse } from "./nest-response";

export class NestReponseBuilder{
    private response:NestReponse={
        status:200,
        headers:{},
        body:{}
    }

    public setStatus(status:number){ 
        this.response.status = status
        return this;
    };

    public setHeaders(headers:object){
        this.response.headers = headers
        return this;
    };

    public setBody(body:object){
        this.response.body = body
        return this;
    };

    public build (){
        return new NestReponse(this.response);
    }
}