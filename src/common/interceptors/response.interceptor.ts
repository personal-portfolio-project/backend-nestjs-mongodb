import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): any {
    return next.handle().pipe(
      map((data) => {
        context.switchToHttp().getResponse().status(data.code);
        data = {
          success: data.code >= 200 && data.code < 300,
          ...data,
        };
        delete data.code;
        return data;
      }),
    );
  }
}
