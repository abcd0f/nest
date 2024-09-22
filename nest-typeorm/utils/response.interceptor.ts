import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface data<T> {
  data: T;
}

@Injectable()
export class Response<T = any> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<data<T>> {
    const res = context.switchToHttp().getResponse();
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          code: res.statusCode,
          success: true,
          message: '成功',
        };
      }),
    );
  }
}
