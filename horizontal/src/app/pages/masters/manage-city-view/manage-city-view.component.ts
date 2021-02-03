import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MastersService} from "../masters.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'manage-city-view',
  templateUrl: './manage-city-view.component.html',
  styleUrls: ['./manage-city-view.component.scss']
})
export class ManageCityViewComponent implements OnInit {
  cityForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private apiService: MastersService) { }

  ngOnInit() {

    this.cityForm = this.fb.group({
      cityName: ['', Validators.required]
    });
  }
  get f() { return this.cityForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.cityForm.invalid) {
      return;
    }else {
      this.apiService.createCity(this.cityForm.value).subscribe((res) => {
        console.log("Created a customer");
      });
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.cityForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.cityForm.reset();
  }

}
