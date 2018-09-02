import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearListDisplayComponent } from './gear-list-display.component';

describe('GearListDisplayComponent', () => {
  let component: GearListDisplayComponent;
  let fixture: ComponentFixture<GearListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
