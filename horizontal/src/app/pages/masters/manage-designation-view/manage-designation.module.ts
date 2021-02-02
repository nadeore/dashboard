import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageDesignationRoutingModule } from './manage-designation-routing.module';
import {ManageDesignationViewComponent} from './manage-designation-view.component';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [ManageDesignationViewComponent],
  imports: [
    CommonModule,
    ManageDesignationRoutingModule,
    SharedModule
  ]
})
export class ManageDesignationModule { }
