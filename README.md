# Events

[![downloads][downloads-badge]][npmcharts]
[![version][version-badge]][package]
[![license][license-badge]][license]
[![coverage][codecov-badge]][codecov]
[![PRs Welcome][prs-badge]][prs]

Small events library for JavaScript

```js
import events from '@railsmob/events';

let counter = 0;

const increment = () => counter = counter + 1;
const log = () => console.log('counter = ', counter);

events.on('increment', increment);
events.on('increment', log);

events.emit('increment');
// counter = 1

events.emit('increment');
// counter = 2

events.off('increment', increment); // unbind specific listener
events.off('increment'); // unbin all listeners
```

## Table of Contents

* [Install](#install)
* [Add Listener](#add-listener)
* [Remove Listener](#remove-listener)
* [Emit Event](#emit-event)
* [Once](#once)

## Install

```sh
yarn install @railsmob/events
```

## Add Listener

```js
const log = info => console.log('Logger: ', info);
events.on('log', log);
events.emit('log', 'hello world');
// Logger: hello world
```


## Remove Listener

```js
events.off('log', log); // unbind specific listener
events.off('log'); // unbin all listeners for 'log' event
```

## Emit Event

```js
events.emit('log', 123); // a second argument is optional
```

## Once

```js
events.once('log', () => console.log('Log once'));
```

## LICENSE

MIT

[version-badge]: https://img.shields.io/npm/v/@railsmob/events.svg?style=flat-square
[package]: https://www.npmjs.com/package/@railsmob/events
[downloads-badge]: https://img.shields.io/npm/dm/@railsmob/events.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/@railsmob/events
[license-badge]: https://img.shields.io/npm/l/@railsmob/events.svg?style=flat-square
[license]: https://github.com/railsmob/events/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[codecov]: https://codecov.io/gh/railsmob/events
[codecov-badge]: https://img.shields.io/codecov/c/github/railsmob/events.svg?style=flat-square
