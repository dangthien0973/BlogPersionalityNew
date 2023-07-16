import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularBlogComponent } from './popular-blog.component';

describe('PopularBlogComponent', () => {
  let component: PopularBlogComponent;
  let fixture: ComponentFixture<PopularBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
