import { Component, Input, OnInit ,inject} from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService'
import { PagedList } from 'src/app/core/model/common/pagedList.model';
import { BlogSearch } from 'src/app/core/model/blog/blogSearch';
import { BlogSearchService } from 'src/app/core/service/blogSearch.service';
@Component({
  selector: 'list-content-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: []
})
export class ListBlogComponent implements OnInit {
  @Input()   blogSearch : BlogSearch  = new BlogSearch();
  listBlog: Blog[] = [];
  current: number = 1;
  total: number;
  hasPrevious: boolean = false;
  hasNext: boolean = false;
  constructor( private api : BlogAPIService , private serviceBlog : BlogSearchService ) {
    this.serviceBlog.dataChanged.subscribe(data => {
      this.blogSearch = data;
      this.getAllBlogLoading();
    });
  
  }

    ngOnInit() {
     // this.getAllBlogLoading();
  }
 get getParamSearch(){
    const searchOpts: string[] = [
      `PageNumber=${this.blogSearch.PageNumber}`,
      `PageSize=${this.blogSearch._pageSize}`
    ];

    if (this.blogSearch.CategoryId) {
      searchOpts.push("CategoryId=" + this.blogSearch.CategoryId);
    }
    if (this.blogSearch.TitleBlog) {
      searchOpts.push("TitleBlog=" + this.blogSearch.TitleBlog);
    }
    return searchOpts.join("&");
  }

  public getAllBlogLoading(){
    this.api.get(`/api/Blog/SearchBlog?${this.getParamSearch}`).subscribe((i :PagedList<any>)=> {
      if(i.metaData.isSuccess){
        this.listBlog = i.items;
        this.total = i.metaData.totalCount;
        this.hasNext  = i.metaData.HasNext;
        this.hasPrevious  = i.metaData.HasPrevious;

      }
      else {
        this.listBlog = [];
      }
    }
    );
  }
  public onGoTo(page: number): void {
    this.current = page;
    this.blogSearch.PageNumber  =   this.current;
    this.getAllBlogLoading();
  }

  public onNext(): void {
    this.current =this.current + 1 ;
    this.blogSearch.PageNumber  =   this.current;
    this.getAllBlogLoading(); 
  }

  public onPrevious(): void {
    this.current =this.current - 1;
    this.blogSearch.PageNumber  = this.current;
    this.getAllBlogLoading();
  }

}