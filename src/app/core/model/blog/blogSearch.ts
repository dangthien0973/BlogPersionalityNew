import {PaggingParameter} from 'src/app/core/model/common/paggingParameter.model';

export class BlogSearch extends PaggingParameter {
    CategoryId: number;
    TitleBlog?: string;
    CategoryName: string;
}