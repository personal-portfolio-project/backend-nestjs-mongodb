import { ResponseInterface } from '../interfaces/response.interface';

export class ResponseDto<T> implements ResponseInterface<T> {
  success: boolean;
  code: number;
  data?: T;
  message: string;
  meta?: any;

  constructor(code: number, message: string, data?: T, meta?: any) {
    this.success = code >= 200 && code < 300;
    this.code = code;
    this.data = data;
    this.message = message;
    this.meta = meta;
  }
}
