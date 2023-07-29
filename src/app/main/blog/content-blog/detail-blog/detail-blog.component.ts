import { Component, OnInit , Input} from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogAPIService } from 'src/app/core/api/BlogAPIService'
@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api : BlogAPIService
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
  console.log(id)
  }
  
}
