import { Component, OnInit ,inject} from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { HousingService } from 'src/app/core/service/blog.service';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService'
import { HandleList } from 'src/app/core/model/common/handleList.model';
import { promise } from 'protractor';
import { async } from 'rxjs/internal/scheduler/async';
import { E } from '@angular/core/src/render3';
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

  constructor( private api : BlogAPIService ) {

  }

    ngOnInit() {
    this.getAllBlogLoading();
    console.log(this.listBlog)

  }
 get getParamSearch(){
    const searchOpts: string[] = [];
    return searchOpts.length ? ('?' + searchOpts.join('&')) : '';
  }

  public getAllBlogLoading(){
    this.api.get(`/api/Blog/SearchBlog${this.getParamSearch}`).subscribe((i :PagedList<any>)=> {
      if(i.metaData.isSuccess){
        this.listBlog = i.items;
      
      }
      else {
        this.listBlog = [];
      }
    }
    );
  }
}
// this.__http.get(`report/search-current-stock${this.searchParams}`).subscribe(res => {
//   res.data = res.data || [];
//   this.LIST_DATA = res.data;
//   this.__notification.hideCenterLoading();
// }, () => {
//   this.LIST_DATA = [];
//   this.__notification.hideCenterLoading();
// });
