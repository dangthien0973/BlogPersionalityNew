import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagLogComponent } from './tag-log.component';

describe('TagLogComponent', () => {
  let component: TagLogComponent;
  let fixture: ComponentFixture<TagLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
