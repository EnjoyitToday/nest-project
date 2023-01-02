export class NestReponse{
    status:number;
    headers:object;
    body:object;

    constructor(response:NestReponse){
        Object.assign(this,response);
    }
}