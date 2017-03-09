# Date Path

Give him a date, it will return a path.

## Installation

```sh
npm install date-path
```

Can be used on browser directly, with `dist/date-path.min.js`.

## Usage

```javascript
const datePath = require('date-path');

console.log(datePath(new Date(2017, 1, 12));
// > 2017/02/

console.log(datePath(new Date(2016, 11, 20));
// > 2016/12/

// By default it is today's date (and today it is March 22th of 2017)
console.log(datePath());
// > 2017/03/
```
