import { Component, Input, OnInit } from '@angular/core';
import { CkeditorConfigService } from 'src/app/core/service/ckeditor.service';

@Component({

  styleUrls: [],
  providers: [

  ]
})
export class CkEditorComponent implements OnInit {

  ckeditorContent: string ="";

  ngOnInit() {
    this.ckeditorContent= '<p>This is Pavan Kumar Aryasomayajulu</p>';
  }

}
