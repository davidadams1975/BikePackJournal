import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepSetupComponent } from './sleep-setup.component';

describe('SleepSetupComponent', () => {
  let component: SleepSetupComponent;
  let fixture: ComponentFixture<SleepSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
