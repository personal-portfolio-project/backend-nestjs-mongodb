import { ResponseInterface } from '../interfaces/response.interface';

export class ResponseDto implements ResponseInterface {
  success: boolean;
  code: number;
  data?: any;
  message: string;
  meta?: any;

  constructor(code: number, message: string, data?: any, meta?: any) {
    this.success = code >= 200 && code < 300;
    this.code = code;
    this.data = data;
    this.message = message;
    this.meta = meta;
  }
}
