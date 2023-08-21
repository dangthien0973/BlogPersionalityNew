import { Component, OnInit } from '@angular/core';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService';
import { Blog } from 'src/app/core/model/blog/blog';
import { HandleList } from 'src/app/core/model/common/handleList.model';
import { BlogSearchService } from 'src/app/core/service/blogSearch.service';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {
  ckeditorContent : string = "";
  listBlog: Blog[];
  isLoading : boolean = false;
  data :Blog[] = [];
  isCreateNew : boolean = false;
  settings = {
    pager: {
      perPage: 5,         // Number of items per page
      currentPage: 1,      // Initial page
      displayedPages: 5,   // Number of pages displayed in the pagination bar
    },
    columns: {
      blogPostId: {
        title: 'ID',
      },
      title: {
        title: 'Name',
      },
      content: {
        title: 'Content',
      },
    }
  };
  constructor(private api : BlogAPIService , private serviceBlog : BlogSearchService ) { }

  ngOnInit() {
    this.getAllBlogLoading();
    this.ckeditorContent = '<p>This is Pavan Kumar Aryasomayajulu</p>';
  }
  public getAllBlogLoading(){
    this.listBlog = [];
    this.isLoading = true;
    this.api.get(`/api/Blog`).subscribe((i :HandleList<any>)=> {
      if(i.isSuccess){
        this.data = i.data;
        
      }

    }
    );
  }
  AddNew(){
    this.isCreateNew = true;
  }
  SaveNewData(){

  }

}
