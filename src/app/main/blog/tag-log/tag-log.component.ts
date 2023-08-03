import { Component, OnInit } from '@angular/core';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService'
import { MenuBlog } from 'src/app/core/model/blog/menu-blog';
import { HandleList } from 'src/app/core/model/common/handleList.model';
@Component({
  selector: 'app-tag-log',
  templateUrl: './tag-log.component.html',
  styleUrls: ['./tag-log.component.css']
})
export class TagLogComponent implements OnInit {

  constructor( private api : BlogAPIService) { }
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

}
