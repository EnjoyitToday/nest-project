import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core'
import { ExceptionFilterHttp } from './commom/filter/exceptionFilter.filter';
import { TransformReponseInterceptor } from './core/http/transformReponse.interceptor';

@Module({
  imports: [UserModule],
  controllers:[],
  providers:[
    {
    provide:APP_FILTER,
    useClass: ExceptionFilterHttp
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide:APP_INTERCEPTOR,
      useClass:TransformReponseInterceptor
    }
  ]
})
export class AppModule {}
