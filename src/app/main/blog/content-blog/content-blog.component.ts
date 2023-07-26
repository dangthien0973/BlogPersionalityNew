import { Component, OnInit ,inject} from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { HousingService } from 'src/app/core/service/blog.service';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService'
import { HandleList } from 'src/app/core/model/common/handleList.model';
import { promise } from 'protractor';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-content-blog',
  templateUrl: './content-blog.component.html',
  styleUrls: ['./content-blog.component.css']
})
export class ContentBlogComponent implements OnInit {

  listBlog: Blog[] = [];

  constructor( private api : BlogAPIService ) {

  }

   async ngOnInit() {
   await this.getAllBlogLoading();

  }

  public getAllBlogLoading(){
    this.api.get("/api/Blog").subscribe((i :any)=> {
      console.log(i);
      this.listBlog = i;
      

    });
  }
}
