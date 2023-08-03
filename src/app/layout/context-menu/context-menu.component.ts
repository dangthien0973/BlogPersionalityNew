import { Component, OnInit ,AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements  OnInit {

  constructor() { }

  ngOnInit() {
    $('.navbar-toggler').on('click', function () {
      $('.navbar-collapse').toggleClass('collapse');
    });
  }
    click() {
      $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').toggleClass('collapse');
      });
  }
}
