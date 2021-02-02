import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCityViewComponent } from './manage-city-view.component';

describe('ManageCityViewComponent', () => {
  let component: ManageCityViewComponent;
  let fixture: ComponentFixture<ManageCityViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCityViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
