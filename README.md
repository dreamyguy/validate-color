# Validate Color

> ✅🌈🙌 Validate HTML colors by `name`, `hex`, `rgb`, `rgba`, `hsl` or `hsla` values

[![Node Version](https://img.shields.io/badge/node-v12.4.0-brightgreen.svg)](https://github.com/nodejs/node/releases/tag/v12.4.0)
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

# Usage

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

## Building for production

When you're done with your changes, run:

     npm run build

This command compiles the production-optimised `javascript` to `dist/index.js`, a file compiled out of [src/index.js][3].

# Testing

This project wouldn't be complete without proper testing.

[Jest][4] is my Unit Testing framework of choice. It's well documented and shares good practices & syntax with its most known predecessors (Mocha, Jasmine, etc). [Babel][5] was introduced as a dependency to the project because of Jest, but it was worth it since now we can use **ES6** syntax on our tests as well.

Run all tests, once:

    npm run test

Initialise the tests in watch mode:

    npm run test:watch

> All tests reside under the [test/](https://github.com/dreamyguy/validate-color/blob/master/tests/) folder. There's only one test file at the moment: [index.test.js](https://github.com/dreamyguy/validate-color/blob/master/tests/index.test.js).

## Good to know

### License

[MIT](LICENSE)

### Credits

- The RegEx behind the HTML color validation came from https://www.regextester.com/103656
- The color name list was extracted from https://htmlcolorcodes.com/color-names/

### About

**Validate Color** was put together by [Wallace Sidhrée][1]. 👨‍💻🇳🇴


  [1]: http://sidhree.com/
  [2]: https://nodejs.org/
  [3]: https://github.com/dreamyguy/validate-color/blob/master/src/index.js
  [4]: https://jestjs.io/
  [5]: https://babeljs.io/
