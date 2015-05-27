# skrlspeed

  > Scroll speed controller

## Instalation

```sh
$ npm install --save skrlspeed
```

```sh
$ component install andrepolischuk/skrlspeed
```

## API

### skrlspeed([element])

  Create controller for `element`, default `document`

```js
var ctrlElement = skrlspeed(document.querySelector('.element'));
var ctrlPage = skrlspeed();
```

### .set(factor)

  Set speed factor, default 1

```js
skrlspeed().set(-1);
```

### .clear()

  Set default speed factor

## License

  MIT
