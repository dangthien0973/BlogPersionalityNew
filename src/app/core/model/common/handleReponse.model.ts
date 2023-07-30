//HandleList
export class HandleReponse<T> {

    total: number;
    resultMsg: string;
    isSuccess?:boolean;
    statusCode?:number;
    data: T;
  }
  