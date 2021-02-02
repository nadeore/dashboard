import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLoginComponent } from './basic-login.component';
import {BasicLoginRoutingModule} from './basic-login-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        BasicLoginRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [ HttpClientModule ],
  declarations: [BasicLoginComponent]
})
export class BasicLoginModule { }
