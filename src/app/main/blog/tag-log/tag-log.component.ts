import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService'
import { BlogSearch } from 'src/app/core/model/blog/blogSearch';
import { MenuBlog } from 'src/app/core/model/blog/menu-blog';
import { HandleList } from 'src/app/core/model/common/handleList.model';
import { BlogSearchService } from 'src/app/core/service/blogSearch.service';
@Component({
  selector: 'app-tag-log',
  templateUrl: './tag-log.component.html',
  styleUrls: ['./tag-log.component.css']
})
export class TagLogComponent implements OnInit {
  blogSearch : BlogSearch = new BlogSearch();
  constructor( private api : BlogAPIService,private BlogSearchService : BlogSearchService,private router: Router) { }
  listMenu : MenuBlog[] = [];
  ngOnInit() {
    this.GetAllMenu();
  }

  public GetAllMenu(){
    this.api.get("/api/Blog/GetAllTopic").subscribe((i :HandleList<any>)=> {
      if(i.isSuccess){
        this.listMenu = i.data;
      }
      else {
        this.listMenu = [];
      }
    }
    );
  }
  gotoTopicRelated(topicId : number){
    this.blogSearch.CategoryId = topicId;
    this.BlogSearchService.searchData(this.blogSearch);
    this.router.navigate(['']);
  }

}
