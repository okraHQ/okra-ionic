import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxOkraService } from './ngx-okra.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'okra-button',
  template: `<button [ngClass]="customClass" [ngStyle]="customStyle" (click)="initOkra()"><ng-content></ng-content></button>`,
})

export class NgxOkraComponent implements OnInit {

  @Input() env: string;
  @Input() token: string;
  @Input() url_env: string;
  @Input() clientName: number;
  @Input() customStyle: {};
  @Input() customClass: {};
  @Input() record_id: string;
  @Input() callback_url: string;
  @Input() user: {};
  @Input() products: string[];
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>(); // tslint:disable-line
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  key: string;
  urlRequest: string;
  baseUrl = "https://demo-dev.okra.ng/link.html?";

  constructor(public okraWidgetService: NgxOkraService, private iab: InAppBrowser) {
    this.key = okraWidgetService.okraPublicKey;
   }

  ngOnInit() {}

  async initOkra() {

   this.urlRequest = `${this.baseUrl}isWebview=${true}&key=${this.key}&token=${this.token}&products=${this.convertArrayToString(this.products)}&clientName=${this.clientName}`;

   const browser = this.iab.create("https://demo-dev.okra.ng/link.html?ref=GrOH-KS4", '_self', { location: 'no' });
  }

  convertArrayToString(products: string[]){

    let formattedArray: string = "[";
        for (var index in products){
            if(Number(index) == (products.length - 1)){
                formattedArray = `${formattedArray}${"\"" + products[index] + "\""}` 
            }else {
                formattedArray = `${formattedArray}${"\"" + products[index] + "\","}`
            }
        }
        formattedArray = formattedArray + "]";
        return formattedArray;
  }
}
