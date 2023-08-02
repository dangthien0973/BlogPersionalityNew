import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({ selector: 'pagination', templateUrl: 'pagination.component.html' , styleUrls: ['./pagination.component.css']})
export class PaginationComponent implements OnChanges {
    @Input() current: number = 0
    @Input() total: number = 0
     pages: number[] = [];

    @Output() goTo: EventEmitter<number> = new EventEmitter<number>()
    @Output() next: EventEmitter<number> = new EventEmitter<number>()
    @Output() previous: EventEmitter<number> = new EventEmitter<number>()

    ngOnChanges(changes: SimpleChanges): void {
        if (
            (changes.current && changes.current.currentValue) ||
            (changes.total && changes.total.currentValue)
          ) {
            this.pages = this.getPages(this.current, this.total)
          }
      }
      public onGoTo(page: number): void {
        this.goTo.emit(page)
      }
      public onNext(): void {
        this.next.emit(this.current)
      }
      public onPrevious(): void {
        this.previous.next(this.current)
      }
       getPages(current: number, total: number): number[] {
        const pages = [];
        for (let i = 1; i <= total/2; i++) {
          pages.push(i);
        }
        return pages;
      }
    }   
