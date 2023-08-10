import { Component, OnInit , Input} from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService';
import { HandleReponse } from 'src/app/core/model/common/handleReponse.model';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {
  blog :Blog ;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api : BlogAPIService
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.getDetailBlog(id);
    });

 
  }
  public getDetailBlog(id : string ){
     
    this.api.get("/api/Blog/"+id).subscribe((i :HandleReponse<any>)=> {
      if(i.statusCode===200){
        this.blog = i.data;
      }

    }
    )}
}
