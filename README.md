# webpack-jest-react
A started template for react and webpack with jest testing

## Prerequisites

* node
* yarn or npm

## Usage

### run the build
>> yarn build

### test
>> yarn test

### start webpack server
>> yarn start

### dependencies


### Configuration

>> .babelrc or babel.config.js

#### jest config to use relative paths

> "jest": {
>    "modulePaths": [
>      "<rootDir>/src"
>    ]
>  }

Usage: import Container from "components/Container"; 

#### handling assets in jest

  "jest": {
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    }
  }

## errors

### error 1
● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".
    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    SyntaxError: /Users/pavansachi/workspace/webpacks/src/dom.test.js: Unexpected token (11:28)

       9 | describe('<Container />', () => {
      10 |     it('check for property', () => {
    > 11 |       const wrapper = mount(<Container text="Welcome"/>);
         |                             ^
      12 |       document.body.innerHTML = wrapper.html();
      13 |     //   console.log(wrapper.html());
      14 |     //   console.log(document.querySelector("#container"));

      at Parser.raise (node_modules/@babel/parser/lib/index.js:6400:17)
      at Parser.unexpected (node_modules/@babel/parser/lib/index.js:7728:16)
      at Parser.parseExprAtom (node_modules/@babel/parser/lib/index.js:8940:20)
      at Parser.parseExprSubscripts (node_modules/@babel/parser/lib/index.js:8507:23)
      at Parser.parseMaybeUnary (node_modules/@babel/parser/lib/index.js:8487:21)
      at Parser.parseExprOps (node_modules/@babel/parser/lib/index.js:8353:23)
      at Parser.parseMaybeConditional (node_modules/@babel/parser/lib/index.js:8326:23)
      at Parser.parseMaybeAssign (node_modules/@babel/parser/lib/index.js:8273:21)
      at Parser.parseExprListItem (node_modules/@babel/parser/lib/index.js:9590:18)
      at Parser.parseCallExpressionArguments (node_modules/@babel/parser/lib/index.js:8720:22)

### error 2

● Test suite failed to run

    Configuration error:
    
    Could not locate module ./logo.svg mapped as:
    /Users/pavansachi/workspace/webpacks/__mocks__/fileMock.js.
    
    Please check your configuration for these entries:
    {
      "moduleNameMapper": {
        "/\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/": "/Users/pavansachi/workspace/webpacks/__mocks__/fileMock.js"
      },
      "resolver": null
    }

      1 | import React from 'react';
    > 2 | import logo from './logo.svg';
        | ^
      3 | import './App.css';
      4 | // import Home from './Home';
      5 | 

      at createNoMappedModuleFoundError (node_modules/jest-resolve/build/index.js:501:17)
      at Object.<anonymous> (src/App.js:2:1)