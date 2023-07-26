export class Blog {
  blogpostId: number;
  title: string;
  content: string;
  state: string;
  imageurls: Image[] = [];
  categoryId: number;
  wifi: boolean;
  userid : string ;


}
export class Image {
  url : string 
}



