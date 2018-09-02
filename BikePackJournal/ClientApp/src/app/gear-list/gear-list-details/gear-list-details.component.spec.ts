import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearListDetailsComponent } from './gear-list-details.component';

describe('GearListDetailsComponent', () => {
  let component: GearListDetailsComponent;
  let fixture: ComponentFixture<GearListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
