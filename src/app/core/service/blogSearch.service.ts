import { Injectable, EventEmitter } from '@angular/core';
import { BlogSearch } from '../model/blog/blogSearch';

@Injectable({
  providedIn: 'root',
})
export class BlogSearchService {
    
  dataChanged = new EventEmitter<BlogSearch>();

  searchData(data: BlogSearch) {
    this.dataChanged.emit(data);
  }
}