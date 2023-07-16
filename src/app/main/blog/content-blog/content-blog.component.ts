import { Component, OnInit ,inject} from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { HousingService } from 'src/app/core/service/blog.service';
@Component({
  selector: 'app-content-blog',
  templateUrl: './content-blog.component.html',
  styleUrls: ['./content-blog.component.css']
})
export class ContentBlogComponent implements OnInit {

  housingLocationList: Blog[] = [];

  constructor(blogService :HousingService ) {
    this.housingLocationList = blogService.getAllHousingLocations();
  }

  ngOnInit() {
  }

}
