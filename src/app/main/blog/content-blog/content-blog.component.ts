import { Component, Input, OnInit ,inject} from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { HousingService } from 'src/app/core/service/blog.service';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService'
import { HandleList } from 'src/app/core/model/common/handleList.model';
import { promise } from 'protractor';
import { async } from 'rxjs/internal/scheduler/async';
import { E } from '@angular/core/src/render3';
import { BlogSearch } from 'src/app/core/model/blog/blogSearch';
@Component({
  selector: 'app-content-blog',
  templateUrl: './content-blog.component.html',
  styleUrls: ['./content-blog.component.css']
})
export class ContentBlogComponent implements OnInit {
  blogSearch : BlogSearch = new BlogSearch();
 @Input() blogSearchParrent : BlogSearch = new BlogSearch();
  constructor( private api : BlogAPIService ) {

  }

    ngOnInit() {
        this.blogSearch = this.blogSearchParrent;
  }
  
}
