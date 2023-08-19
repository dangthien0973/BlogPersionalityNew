import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {
  ckeditorContent : string = "";
  constructor() { }

  ngOnInit() {
    this.ckeditorContent = '<p>This is Pavan Kumar Aryasomayajulu</p>';
  }
  CheckSave(){
    console.log("tessts")
    console.log( this.ckeditorContent )
  }
}
