import { Component, OnInit ,inject} from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { HousingService } from 'src/app/core/service/blog.service';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService'
import { HandleList } from 'src/app/core/model/common/handleList.model';

import { PagedList } from 'src/app/core/model/common/pagedList.model';
import { BlogSearch } from 'src/app/core/model/blog/blogSearch';
@Component({
  selector: 'list-content-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: []
})
export class ListBlogComponent implements OnInit {
  itemSearch : PagedList<any> = new PagedList<any>();
  blogSearch : BlogSearch = new BlogSearch();
  listBlog: Blog[] = [];
  current: number = 1;
  total: number;

  constructor( private api : BlogAPIService ) {
    this.getAllBlogLoading();
  }

    ngOnInit() {
    this.getAllBlogLoading();

  }
 get getParamSearch(){
    const searchOpts: string[] = [
      `PageNumber=${this.blogSearch.PageNumber}`,
      `PageSize=${this.blogSearch._pageSize}`
    ];

    if (this.blogSearch.CategoryId) {
      searchOpts.push("CategoryId=" + this.blogSearch.CategoryId);
    }
    if (this.blogSearch.CategoryId) {
      searchOpts.push("TitleBlog=" + this.blogSearch.TitleBlog);
    }
    return searchOpts.join("&");
  }

  public getAllBlogLoading(){
    this.api.get(`/api/Blog/SearchBlog?${this.getParamSearch}`).subscribe((i :PagedList<any>)=> {
      if(i.metaData.isSuccess){
        this.listBlog = i.items;
        this.total = i.metaData.totalCount;
        this.current = i.metaData.CurrentPage;
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

  public onNext(page: number): void {
    this.current = page +1;
    this.blogSearch.PageNumber  =   this.current;
    this.getAllBlogLoading(); 
  }

  public onPrevious(page: number): void {
    this.current = page -1;
    this.blogSearch.PageNumber  =   this.current;
    this.getAllBlogLoading();
  }

}