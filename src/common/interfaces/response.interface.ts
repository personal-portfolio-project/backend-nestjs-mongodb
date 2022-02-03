export interface ResponseInterface {
  success: boolean;
  code?: number;
  data?: any;
  message: string;
  meta?: any;
}
