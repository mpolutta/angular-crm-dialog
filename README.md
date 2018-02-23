# NgCrmEg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7. It is an Angular CRM Integrated Component library intended for use by a CRM Solution. Mat Polutta (Procentrix) is the original developer. Run `npm install` to get all of the node modules required for this project in your development/build folder.

Note: Replace `ngcrmeg_` with your CRM Solution prefix.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. While using the Development server only Mock data will be used. It is good for debugging and testing your UI independent of CRM.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. Please place all services and models in their respective folders: `ng g service services/your-service-name` or `ng g class models/your-model-name`.

## Build

Run `ng build` to build the project for CRM development. The build artifacts will be stored in the `dist/` directory. Run `xcopy dist fdist` to then create a development shadow copy to use with Fiddler.

Run `ng build --prod --aot --output-hashing none` for a production build. Note that this is different from the default `-prod` flag, but builds the artifacts for integration into CRM.

## CRM Production Integration

You must have a production build installed in the CRM Solution Web Resources. Best Practice is to install the components into a Component folder. So run the Production Build listed in the Build section, and upload the artifacts to `ngcrmeg_/ngdialog/` and `index.html`.

Normally, only the `main.bundle.js` and `styles.bundle.css` files will change going forward. So just re-upload those files as the development and production build progresses.

Add an HTML Web Resource to your Entity Form.

## CRM Developent Integration

First, ensure that a Production build has been integrated so that you have an `index.html` web resource to override via the Fiddler Auto-Responder (see above). Next, run the development build command, `ng build`, which will output your artifacts to the `dist` folder. The `dist` folder is owned by the Angular CLI. So before proceeding with Fiddler, you must copy the `dist` files to another folder, `fdist`, by running `xcopy dist fdist\`. Use the Telerik Fiddler Auto-Responder to supply your local file copy for `index.html`, which will in turn pull in the developer artifacts from `fdist`. Debug in Chrome using the Developer Tools. Each time code is modified, you will need to run `ng build` and `xcopy dist fdist\` again. Then refresh your browser. See Fiddler Auto-Responder below for configuration instructions.

Note that this is for Integrated Debugging. You should create Mock Data Service methods for debugging without CRM intergration to speed up your debug cycle via `ng serve`.

## Fiddler Auto-Responder

Open Telerik Fiddler, and go to the Auto-Responder tab. Install 3 rules by importing the `FiddlerResponder\ngcrmeg_DevDebug.farx` file and enabling all rules. You will need to change the folders to match your own folders depending on your Development environment.

Alternatively, create the Rules yourself as follows (changing the mappings to match your folders):
1. Add Rule - `regex:.*ngcrmeg_\/ngdialog\/index\.html`, map to `C:\Projects\ngeg\ng-crm-eg\fdist\index.html`
2. Add Rule - `regex:.*ngcrmeg_\/ngdialog\/(.*)\.bundle\.js`, map to `C:\Projects\ngeg\ng-crm-eg\fdist\$1.bundle.js`

While debugging, enable Fiddler Capturing. When making changes to CRM Entity Forms or uploading new Web Resources, disable Fiddler Capturing.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
