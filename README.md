Task 6

Go to assets/app-settings.json and add new key like { "id": "Get product admin request" }

Adjust path in AppSettingsService -> Go to line # 28 and modify string '.assets/app-settings.json' to 'assets/app-settings.json'

if file does not exist or wrong name default setting will be loaded

Created a timirPipe -> to use -> Go to product-list.component.html and see line# 4 (  *ngFor="let product of products | timerPipe: 'Get products request' | async" )

go to adminproduct-form.component.html, products.component.html and see (| timerPipe: 'Get products admin request')

timerPipe accepts parameter -> in order to track elapsed time during the request use the following instructions:
- decorate html file with timerPipe: '<your parameter>'
- add new key to assets/app-settings.json
  
 - Created an interceptor to catch all requests that contain 'product'

- Time consumed to process requests i is displayed in console
_____________________________________________________________________________
Go to products -> click Details -> click details button to view product info
-> click feeds to view product feedback

Go to products -> click Add to Cart -> Go to Cart -> you can remove items -> click Purchase to buy products
-> Go to Order and see order details

Go to Login -> click Log in -> go to Admin tab -> go to manage products -> click change to switch product availability

go to manage products - > new Product/Edit (edit details) -> try to modify and go back (deactivate guard will trigger)

Go to Login -> go to Admin tab -> Orders -> will show orders details (stored in local strage)


________________________________________________
# Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
