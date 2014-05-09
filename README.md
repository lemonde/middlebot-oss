# middlebot-oss
[![Build Status](https://travis-ci.org/lemonde/middlebot-oss.svg?branch=master)](https://travis-ci.org/lemonde/middlebot-oss)
[![Dependency Status](https://david-dm.org/lemonde/middlebot-oss.svg?theme=shields.io)](https://david-dm.org/lemonde/middlebot-oss)
[![devDependency Status](https://david-dm.org/lemonde/middlebot-oss/dev-status.svg?theme=shields.io)](https://david-dm.org/lemonde/middlebot-oss#info=devDependencies)

Open search server middleware.

## Install

```
npm install middlebot-oss
```

## Usage

```js
var middlebot = require('middlebot');
var middlebotOss = require('middlebot-oss');

var app = middlebot();
app.use(middlebotOss.create({ index: myIndex }));
```

### create(options)

Call the create method of the index with `res.body`.

```js
app.use(middlebotOss.create({ index: myIndex }));
```

### destroy(options)

Call the destroy method of the index with `res.query`.

```js
app.use(middlebotOss.destroy({ index: myIndex }));
```

## License

MIT