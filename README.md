# ShoeZone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Steps to build the application:

1- create a new angular project.
2- add navigationcomponent Menu with a hamburger menu (with 2 options- Home and Cart) 
3- created components : Homepage(to show a list of items from API), ProductsDetail (to show the details of each product from the list), AddToCart(to show the items added to the cart and some actions).
4- make routing functional for each page.
5-continue to develop components and creating services and models needed
For the Response Model (firstly I created the model with the needed elements so I can use it in the observable of the get method )
after I use the right API to access the json data , then call the service (the get method) in the homepage component (Injection) and get the data in the format I need to display it in the html.
6-After I designed each product as a card and make it clickable  so each redirects to the detatils of the selected element.
7-After displaying details: I added the button ADD TO CART
8-The products adds as many time as you click it. (you can go back to home page  clicking on the logo or on dhe menu)(you can go to the cart list by clicking on the shopping cart)

9- to go to the list of the cart  click the icon 
10- since I have no backend part to do a proper add to cart , it is improvised (if you refresh the page  the cart is automatically empty)
