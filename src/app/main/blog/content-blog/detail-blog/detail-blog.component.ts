import { Component, OnInit , Input} from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {
  @Input() housingLocation!: Blog;
  constructor() { }

  ngOnInit() {
  }

}
