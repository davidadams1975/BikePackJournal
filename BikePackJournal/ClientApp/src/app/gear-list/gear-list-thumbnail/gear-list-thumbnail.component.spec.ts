import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearListThumbnailComponent } from './gear-list-thumbnail.component';

describe('GearListThumbnailComponent', () => {
  let component: GearListThumbnailComponent;
  let fixture: ComponentFixture<GearListThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearListThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearListThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
