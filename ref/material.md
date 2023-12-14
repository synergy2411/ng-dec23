# JavaScript Types

- Primitive Types : Number String Boolean Symbol BigInt
- Reference Types : Object Array Date Function

# TypeScript Type

- any
- enum
- never
- null
- tuple
- void
- undefined
- null

# Custom Types

- type keyword
- interface
- classes

# TypeScript Compiler

- npm install -g typescript
- tsc --version
- tsc basics.ts
- tsc --init

# to generate package.json file

- npm init -y
- npm run start

# JavaScfript Libraries / Framework

- Angular : v2 onwards; framework; super-herioc framwork; Shadow DOM, Form Validation, State Management, Data binding, MVC, SPA, DOM Manipulation, XHR Calls etc
- AngularJS : library. v1
- React : to render the UI quickly and efficiently
- NextJS : Server Side Framework for React
- Vue : template driven framework
- Polymer : custom web components
- Stencil : VDOM, web components
- Electron : desktop based app in JavaScript
- Ember : Framework; very frequent changes in API
- Backbone : MVC pattern client side
- Knockout : two way data-binding; MVVM pattern
- jQuery : DOM manipulation, AJAX Calls, animation etc
- ExtJS : paid library

<!-- Server side -->

- Express
- NodeJS
- Koa /Hapi / Kranken / SailsJS

# Angular CLI Tool

- npm install -g @angular/cli@14
- ng version
- ng new frontend
- cd frontend
- npm start

# semver.org

# CLI Commands

- ng generate component path/to/componentName
- ng g c path/to/componentName
- ng g p path/to/PipeName
- ng g s path/to/ServiceName
- ng g d path/to/DirectiveName
- ng g m path/to/ModuleName

Pure Change
let fruits = ["a", "b"];

fruits.push("c"); // Impure Change

fruits = ["a","b","c"]; // Pure Change

# Form / Form Controls - State & Classes

- ngValid / ngInvalid
- ngPristine / ngDirty
- ngUntouched / ngTouched

Data inconsistency
Delegation of additional responsibility

ng new frontend --aplication=false
ng g application appNameOne
ng g application appNameTwo

# JSON SERVER

- npm install -g json-server
- json-server -v
- cd data
- json-server db.json --watch

# Routing Terminologies -

- Routes : config about route path and component
- RouterModule : to include route config in app
- RouterOutlet: provide the space to load the component template
- RouterLink : does not reload / refresh the browser
- Router : programmatically navigate the user
- ActivatedRoute : access of currently loaded route / url

http://localhost:4200/products/overview
http://localhost:4200/products/specification
