import { Injectable, Inject } from '@angular/core';
import { PUBLIC_KEY_TOKEN } from './okra-token';

@Injectable({
  providedIn: 'root'
})
export class NgxOkraService {

  okraPublicKey: string;

  constructor(@Inject(PUBLIC_KEY_TOKEN) private token: string) {
    this.okraPublicKey = token;   
  }
}
