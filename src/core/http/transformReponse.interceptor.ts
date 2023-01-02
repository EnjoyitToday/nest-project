import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NestReponse } from './nest-response';

@Injectable()
export class TransformReponseInterceptor implements NestInterceptor {
    
    private httpAdapter: AbstractHttpAdapter;

    constructor(adapterHost:HttpAdapterHost){
        this.httpAdapter = adapterHost.httpAdapter;
    };

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    
    return next.handle()
                .pipe(
                    map((responseController:NestReponse)=>{
                        if(responseController instanceof NestReponse){
                            const contexto = context.switchToHttp();
                            const reponse  = contexto.getResponse();
                            const {headers,status,body} = responseController;

                            const headersNames = Object.getOwnPropertyNames(headers);
                            headersNames.forEach( names =>{ 
                                const headerValue = headers[names];
                                this.httpAdapter.setHeader(response,names,headerValue);
                            });
                            this.httpAdapter.status(response,status);

                            return body;
                        }
                        return responseController;
                    })
                );
  }
}