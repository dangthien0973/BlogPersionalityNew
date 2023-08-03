import { Component, OnInit } from '@angular/core';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService';
import { Blog } from 'src/app/core/model/blog/blog';
import { HandleList } from 'src/app/core/model/common/handleList.model';

@Component({
  selector: 'app-popular-blog',
  templateUrl: './popular-blog.component.html',
  styleUrls: ['./popular-blog.component.css']
})
export class PopularBlogComponent implements OnInit {
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
