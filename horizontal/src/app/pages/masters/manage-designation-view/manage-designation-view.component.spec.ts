import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDesignationViewComponent } from './manage-designation-view.component';

describe('ManageDesignationViewComponent', () => {
  let component: ManageDesignationViewComponent;
  let fixture: ComponentFixture<ManageDesignationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDesignationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDesignationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
