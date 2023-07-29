//HandleList
export class HandleReponse<T> {

    total: number;
    statusCode: string;
    isSuccess?:boolean;
    statusCode?:number;
    data: T;
  }