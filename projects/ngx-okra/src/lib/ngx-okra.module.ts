import { NgModule,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxOkraService } from './ngx-okra.service';
import { PUBLIC_KEY_TOKEN } from './okra-token';
import { NgxOkraComponent } from './ngx-okra.component';



@NgModule({
  declarations: [NgxOkraComponent],
  imports: [CommonModule],
  exports: [NgxOkraComponent]
})
export class NgxOkraModule {
  static forRoot(token: string): ModuleWithProviders {
    return {
      ngModule: NgxOkraModule,
      providers: [
        NgxOkraService,
        { provide: PUBLIC_KEY_TOKEN, useValue: token }
      ]
    };
  }
 }
