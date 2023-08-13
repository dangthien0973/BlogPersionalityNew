import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { BlogSearch } from '../model/blog/blogSearch';

@Injectable({
  providedIn: 'root',
})
export class BlogSearchService implements OnDestroy {
    
  dataChanged = new EventEmitter<BlogSearch>();

  searchData(data: BlogSearch)  { 
    this.dataChanged.emit(data);
  }
  subscribeToEvent(callback: (eventData: any) => void) {
    this.dataChanged.subscribe(callback);
  }
  upsubscribeToEvent() {
    this.dataChanged.unsubscribe();
  }
 ngOnDestroy(): void {
  this.dataChanged.unsubscribe();
 }
}