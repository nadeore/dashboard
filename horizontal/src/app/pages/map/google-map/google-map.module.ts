import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapRoutingModule } from './google-map-routing.module';
import { GoogleMapComponent } from './google-map.component';
import {SharedModule} from '../../../shared/shared.module';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    GoogleMapRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCOrWK8Xp5mw0hpiViBNHf2tR0GcJI8VkM'})
  ],
  declarations: [GoogleMapComponent]
})
export class GoogleMapModule { }
