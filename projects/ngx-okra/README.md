# okra-ionic
> This is an ionic module that abstracts the complexity of using okra with Ionic/Angular+.

## USAGE

### 1. Install the module
```sh
npm i ngx-okra
```

### 2. Import the module
In your `app.module.ts` or any module where the component or directive would be used like so:

```ts
import { NgModule } from '@angular/core';

import { NgxOkraModule } from 'ngx-okra';
...

@NgModule({
  imports: [
    NgxOkraModule.forRoot('public_key_xxxxxxxxxxxxxxxxxxxxxxxx'),
  ]
})

export class AppModule {}
```

### 3. Implement in your project
There are two available options

* **AngularOkraComponent**: Renders a button which when clicked loads okra Inline
  ```html
    <okra-button
      [customStyle]="{'font-size.px':14, 'color' : 'green', 'background-color' : 'coral'}"
      [clientName]="'bassey'" 
      [env]="'sandbox'" 
      [callback_url]="'www.my-webhook.com'"
      [products]="['auth', 'transactions', 'balance', 'income', 'identity']" (onClose)="okraCancel()"
      (onSuccess)="okraDone()">
      Open Okra
    </okra-button>
  ```

*  **AngularOkraDirective**: A directive that loads okra inline when clicked
```html
  <button
    okraButton
      [clientName]="'bassey'" 
      [env]="'sandbox'" 
      [callback_url]="'www.my-webhook.com'"
      [products]="['auth', 'transactions', 'balance', 'income', 'identity']" (onClose)="okraCancel()"
      (onSuccess)="okraDone()">
    Open okra
  </button>
```

And then in your `component.ts`
```ts
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit {
    reference = '';
    constructor() {}

    okraInit() {
      console.log('Okra initialized');
    }

    okraDone(ref: any) {
      this.title = 'Okra successfull';
      console.log(this.title, ref);
    }

    okraCancel() {
      console.log('Okra cancelled');
    }
  }
  
```


## OkraOptions

|Name                   | Type           | Required            | Default Value       | Description         |
|-----------------------|----------------|---------------------|---------------------|---------------------|
|  `callback_url `      | `string`       | true                |  undefined          | This is your webhook to which okra sends the clients data to.
|  `key `               | `String`       | false               |  undefined          | Your public key from Okra.
|  `products`           | `ArrayList<Enums.Product>`| true     |  undefined          | The Okra products you want to use with the widget. list of products include: 'auth', 'transactions', 'balance', 'income', 'identity'
|  `env`                | `Enums.Environment`| true            |  undefined          | 
|  `clientName`         | `String`       | true                |  undefined          | Name of the customer using the widget on the application
|  `user`               | `object`       | false               |  undefined          | This contains some information of the user using the okra widget {fullname: 'USER_FULL_NAME',email: 'USER_EMAIL', bvn: 'USER_BVN'}



> For more information checkout [okra's documentation](https://docs.okra.ng)

## Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
