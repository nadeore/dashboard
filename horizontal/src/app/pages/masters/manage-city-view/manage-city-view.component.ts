import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'manage-city-view',
  templateUrl: './manage-city-view.component.html',
  styleUrls: ['./manage-city-view.component.scss']
})
export class ManageCityViewComponent implements OnInit {
  cityForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.cityForm = this.fb.group({
      cityName: ['', Validators.required]
    });
  }

}
