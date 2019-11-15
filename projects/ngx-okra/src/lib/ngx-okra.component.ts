import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxOkraService } from './ngx-okra.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'okra-button',
  template: `<button [ngClass]="customClass" [ngStyle]="customStyle" (click)="initOkra()"><ng-content></ng-content></button>`,
})

export class NgxOkraComponent implements OnInit {

  @Input() env: string;
  @Input() url_env: string;
  @Input() clientName: number;
  @Input() customStyle: {};
  @Input() customClass: {};
  @Input() record_id: string;
  @Input() callback_url: string;
  @Input() user: {};
  @Input() products: string[];
  //@Input() okraOptions: OkraOptions;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>(); // tslint:disable-line
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  key: string;

  constructor(public okraWidgetService: NgxOkraService, private iab: InAppBrowser) {
    this.key = okraWidgetService.okraPublicKey;
   }

  ngOnInit() {
  }

  async initOkra() {
    const browser = this.iab.create('https://demo-dev.okra.ng/link.html?isWebview=true&key=c81f3e05-7a5c-5727-8d33-1113a3c7a5e4&token=5d8a35224d8113507c7521ac&products=[%22auth%22,%22transactions%22,%22balance%22]&env=dev&clientName=Spinach', '_self', { location: 'no' });
  }


}
