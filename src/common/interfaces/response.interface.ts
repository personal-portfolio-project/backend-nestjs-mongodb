export interface ResponseInterface<T> {
  success: boolean;
  code?: number;
  data?: T;
  message: string;
  meta?: any;
}
