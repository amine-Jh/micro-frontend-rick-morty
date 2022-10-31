# Angular application 
displays locations filltred on search by name

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

##dependencies

    ng add ngx-build-plus - is a build tool for angular CLI.
    
    ng add @angular/elements - provides support for angular elements.
    
    npm i -g http-server - save to serve dist folder.

## Build Projet and serve it as static files  port 5001

ng build --prod --output-hashing none --single-bundle true

http-server ./dist/angular-app -p 5001  
