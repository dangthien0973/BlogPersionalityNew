import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService';
import { Blog } from 'src/app/core/model/blog/blog';
import { HandleList } from 'src/app/core/model/common/handleList.model';
import { BlogSearchService } from 'src/app/core/service/blogSearch.service';
import { map, delay, catchError,shareReplay } from 'rxjs/operators';
import { MenuBlog } from 'src/app/core/model/blog/menu-blog';
import { HandleReponse, ReponseResult } from 'src/app/core/model/common/handleReponse.model';
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
  blogPost : Blog = new Blog();
  listMenu : MenuBlog[] = [];
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
      description: {
        title: 'description',
      },
    }
  };
  constructor(private api : BlogAPIService , private serviceBlog : BlogSearchService ) { }

  ngOnInit() {
    this.getAllBlogLoading();
    this.GetAllMenu();
    this.blogPost.content="";
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
    if(this.isCreateNew == true){
      this.isCreateNew= false;
    }
    else {
      this.isCreateNew = true;
    }
    
  }
  SaveNewData() {
    this.isLoading = true;
		return this.api.post("/api/Blog", this.blogPost).subscribe((i: ReponseResult)=>
    {
      console.log(i)
				if(i.success){
          alert("Thành công!");
				return {status: true}
				}
				else {
          alert("Thất bại!");
					return {status :false}
				}

			})
	}
}
