import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeMakeFormComponent } from './bike-make-form.component';

describe('BikeMakeFormComponent', () => {
  let component: BikeMakeFormComponent;
  let fixture: ComponentFixture<BikeMakeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeMakeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeMakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
