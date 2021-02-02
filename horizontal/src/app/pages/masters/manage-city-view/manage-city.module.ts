import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {ManageCityViewComponent} from './manage-city-view.component';
import {ManageCityRoutingModule} from './manage-city-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [ManageCityViewComponent],
    imports: [
        CommonModule,
        ManageCityRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class ManageCityModule { }
