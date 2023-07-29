import { Component, OnInit , Input} from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';

@Component({
  selector: 'app-detail-list-blog',
  templateUrl: './detail-list-blog.component.html',
  styleUrls: []
})
export class DetailListBlogComponentNew implements OnInit {
  @Input() housingLocation!: Blog;
  constructor() { }

  ngOnInit() {
  }

}
