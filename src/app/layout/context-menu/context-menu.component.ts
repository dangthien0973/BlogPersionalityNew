import { Component, OnInit ,AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
import { BlogSearch } from 'src/app/core/model/blog/blogSearch';
import { BlogSearchService } from 'src/app/core/service/blogSearch.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements  OnInit {
  blogSearch : BlogSearch = new BlogSearch();
  
  constructor(private BlogSearchService : BlogSearchService,private router: Router) 
   {
   }

  ngOnInit() {
    $('.navbar-toggler').on('click', function () {
      $('.navbar-collapse').toggleClass('collapse');
    });
  }
    click() {
      $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').toggleClass('collapse');
      });
  }
  
  Search(text: string)
  {
        this.blogSearch.TitleBlog = text;
        this.BlogSearchService.searchData(this.blogSearch);
        this.router.navigate(['']);
  }
}
