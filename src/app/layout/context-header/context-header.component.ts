import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-context-header',
  templateUrl: './context-header.component.html',
  styleUrls: ['./context-header.component.css']
})
export class ContextHeaderComponent implements OnInit {
  currentDate = new Date();

  ngOnInit() {
  }

}
