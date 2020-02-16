![Validate Color](https://raw.githubusercontent.com/dreamyguy/validate-color/master/docs/validate-color-logo-github-full-width.png "Validate all possible HTML colors!")

# Validate Color

> ✅🌈🙌 Validate HTML colors by `name`, `hex`, `rgb`, `rgba`, `hsl` or `hsla` values

[![Build Status](https://travis-ci.com/dreamyguy/validate-color.svg?branch=master)](https://travis-ci.org/dreamyguy/validate-color) [![Node Version](https://img.shields.io/badge/node-v12.4.0-brightgreen.svg)](https://github.com/nodejs/node/releases/tag/v12.4.0)
[![NPM Version](https://img.shields.io/badge/npm-v6.9.0-brightgreen.svg)](https://github.com/npm/cli/releases/tag/v6.9.0)
[![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dreamyguy/validate-color/blob/master/LICENSE)

**_HTML colors are remarkably easy to get wrong_**, because they allow for so many different values.

As I was writing [Console Log Plus](https://github.com/dreamyguy/console-log-plus), I thought it would be great to allow users to pass any _HTML color_ they wanted as one of the parameter to the function. But since _HTML colors_ have so many variations and therefore are complex strings, it didn't take me long to realize that I'd have to make quite a few checks to validate the value passed by the user. That need brought me here.

**Validate Color** let's one validate the color string against all current possible _HTML color_ values. Some examples:

- `hex` - `#bada55`
- `name` - `LightGoldenrodYellow`
- `rgb` - `rgb(0, 0, 0)`
- `rgba` - `rgba(0, 0, 0, .45)`
- `hsl` - `hsl(100%, 100%, 100%)`
- `hsla` - `hsla(100%, 100%, 100%, 1)`

# Demo ✅ 🌈 🙌

To demonstrate the power of _validate-color_, I decided it would be best to create a living github page, that would serve both as a way of showcase _validate-color_, and facilitate its use:

[https://dreamyguy.github.io/validate-color/][7]

On this page you can:

- **Validate HTML colors as you type**

_On my TODO list:_

- _See opaque colors against black and white backgrounds._
- _See colors with transparency in different contexts._

# Usage

**validate-color** is also [available as a package on `npm`][6] and can be installed as a depedency with:

    npm i validate-color --save

As with any node module, first you'll have to import it with `require`:

```javascript
var validateColor = require('validate-color');
```

...or through `import`:

```javascript
import validateColor from 'validate-color';
```

Once you've done the import, you'll be able to do checks like (example in **React**):

```javascript
import React from 'react';
import validateColor from 'validate-color';

const ColorBox = props => {
  const {
    color = '',
    text = ''
  } = props;
  const theColor = color && validateColor(color) ? color : 'transparent';
  return (
    <div className="color-box" style={{backgroundColor: theColor}}>
      <p>{text}</p>
    </div>
  )
};

export default ColorBox;
```

> 👉 The source for a full-fledged color validation component can be [viewed here](https://github.com/dreamyguy/validate-color/blob/master/src/app/App.js). That component can be [seen in action here][7].

# Extend

One can "extend" the library by using only parts of it.

**1. Validate only HTML colors (`hex`, `rgb`, `rgba`, `hsl`, `hsla`), without `name`**

```javascript
import { validateHTMLColor } from 'validate-color';
```

**2. Validate only color `hex`**

```javascript
import { validateHTMLColorHex } from 'validate-color';
```

**3. Validate only color `name`**

```javascript
import { validateHTMLColorName } from 'validate-color';
```

# Development

## Getting started

Clone this repo locally. You'll need to have [NodeJS][1] installed. Install all dependencies by running:

    npm i

## Run it locally

To start the app locally, run:

    npm run start

This command fires up the application on port `9900`, making it visible on http://localhost:9900. Because this app is based on [create-react-app][2], the port number should be configured on the [.env](https://github.com/dreamyguy/validate-color/blob/master/.env#L1) file.

## Building the frontend for Production

When you're ready to build for production, run:

     npm run build

This command compiles all production-optimised resources to a folder called **build**. It's meant to be run remotely, at the environment host, at build time.

## Building for NPM

When you're done with your changes, run:

     npm run build-npm

This command compiles the distribution-optimised `javascript` to `lib/index.js`, a file compiled out of [src/validate-color/index.js][3].

> 👉 Note that the `lib/` folder and its contents are only available at the [NPM distribution][6].

# Testing

This project wouldn't be complete without proper testing.

[Jest][4] is my Unit Testing framework of choice. It's well documented and shares good practices & syntax with its most known predecessors (Mocha, Jasmine, etc). [Babel][5] was introduced as a dependency to the project because of Jest, but it was worth it since now we can use **ES6** syntax on our tests as well.

Run all tests, in watch mode:

    npm run test

Tests are also run through [Travis][8] on every push to `master`. The build status is shown [at the top of this README](https://github.com/dreamyguy/validate-color#validate-color).

> 👉 All tests are named according to the file they're testing: `index.js` -> _`index.test.js`_, and reside under the same directory. Since `Jest` comes as courtesy of [CRA][2], all tests should be placed under the [src/](https://github.com/dreamyguy/validate-color/blob/master/src/) folder.

# Deploying

This repo is a hybrid one. It:

- Builds the NPM distribution
- Builds the GitHub Page that serves as a demo/showcase

There are 3 commands one can run to deploy to these two places.

**Deploy to GitHub Pages**

    npm run deploy

**Deploy to NPM**

    npm run deploy-npm

**Deploy to both places at once**

    npm run release

> ⚠️ Make sure to bump version before releasing!

## Good to know

### License

[MIT](LICENSE)

### Credits

- The RegEx behind the HTML color validation came from https://www.regextester.com/103656
- The color name list was extracted from https://htmlcolorcodes.com/color-names/

### About

**Validate Color** was put together by [Wallace Sidhrée][1]. 👨‍💻🇳🇴

  [1]: http://sidhree.com/
  [2]: https://facebook.github.io/create-react-app/
  [3]: https://github.com/dreamyguy/validate-color/blob/master/src/validate-color/index.js
  [4]: https://jestjs.io/
  [5]: https://babeljs.io/
  [6]: https://www.npmjs.com/package/validate-color
  [7]: https://dreamyguy.github.io/validate-color/
  [8]: https://travis-ci.com/dreamyguy/validate-color
