# middlebot-oss
[![Build Status](https://travis-ci.org/lemonde/middlebot-oss.svg?branch=master)](https://travis-ci.org/lemonde/middlebot-oss)
[![Dependency Status](https://david-dm.org/lemonde/middlebot-oss.svg?theme=shields.io)](https://david-dm.org/lemonde/middlebot-oss)
[![devDependency Status](https://david-dm.org/lemonde/middlebot-oss/dev-status.svg?theme=shields.io)](https://david-dm.org/lemonde/middlebot-oss#info=devDependencies)

Open search server middleware.

## Install

```
npm install https://github.com/lemonde/middlebot-oss.git
```

## Usage

```js
var middlebot = require('middlebot');
var middlebotOss = require('middlebot-oss');

var app = middlebot();
app.use(middlebotOss.create({ index: myIndex }));
```

### middlebotOss.create(options)

Call create method on the provided index.

#### Options

- `Index` index
- `Function` data
  - If these key is not provided, `res.body` will be used as data object. The function have `req` and `res` as arguments and must return a plain object. If `false` is returned, do nothing.

#### Example

```js
app.use(middlebotOss.create({
  index: myIndex,
  data: function (req, res) {
    return res.body;
  }
}));
```

### middlebotOss.destroy(options)

Call destroy method on the provided index.

#### Options

- `Index` index
- `Function` data
  - If these key is not provided, `req.query` will be used as data object. The function have `req` and `res` as arguments and must return a plain object. If `false` is returned, do nothing.

#### Example

```js
app.use(middlebotOss.destroy({
  index: myIndex,
  data: function (req, res) {
    return req.query;
  }
}));
```

## License

MIT
