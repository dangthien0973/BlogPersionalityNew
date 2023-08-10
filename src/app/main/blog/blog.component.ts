import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService';
import { Blog } from 'src/app/core/model/blog/blog';
import { BlogSearch } from 'src/app/core/model/blog/blogSearch';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogSearch : BlogSearch = new BlogSearch();
 @Input() blogSearchParrent : BlogSearch = new BlogSearch();


 
  constructor( private route: ActivatedRoute,
    private router: Router,
    private api : BlogAPIService) { }

  ngOnInit() {
    this.blogSearch = this.blogSearchParrent;
  }
}
