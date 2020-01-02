import { NgModule,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxOkraService } from './ngx-okra.service';
import { PUBLIC_KEY_TOKEN } from './okra-token';
import { NgxOkraComponent } from './ngx-okra.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Device } from '@ionic-native/device/ngx';



@NgModule({
  declarations: [NgxOkraComponent],
  imports: [CommonModule],
  exports: [NgxOkraComponent],
  providers: [InAppBrowser],
})
export class NgxOkraModule {
  static forRoot(token: string): ModuleWithProviders {
    return {
      ngModule: NgxOkraModule,
      providers: [
        NgxOkraService,
        InAppBrowser,
        Device,
        { provide: PUBLIC_KEY_TOKEN, useValue: token }
      ]
    };
  }
 }
