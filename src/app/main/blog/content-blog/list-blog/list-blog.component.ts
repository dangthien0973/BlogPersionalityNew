import { Component, OnInit ,inject} from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { HousingService } from 'src/app/core/service/blog.service';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService'
import { HandleList } from 'src/app/core/model/common/handleList.model';
import { promise } from 'protractor';
import { async } from 'rxjs/internal/scheduler/async';
import { E } from '@angular/core/src/render3';
@Component({
  selector: 'list-content-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: []
})
export class ListBlogComponent implements OnInit {

  listBlog: Blog[] = [];

  constructor( private api : BlogAPIService ) {

  }

    ngOnInit() {
    this.getAllBlogLoading();

  }

  public getAllBlogLoading(){
    this.api.get("/api/Blog").subscribe((i :HandleList<any>)=> {
      if(i.isSuccess){
        this.listBlog = i.data;
      }
      else {
        this.listBlog = [];
      }
    }
    );
  }
}
