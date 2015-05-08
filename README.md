# skrlspeed

  Scroll speed controller

## Instalation

  Component(1):

```sh
$ component install andrepolischuk/skrlspeed
```

  Npm:

```sh
$ npm install skrlspeed
```

  Umd:

```html
<script src="https://cdn.rawgit.com/andrepolischuk/skrlspeed/0.1.1/skrlspeed.js"></script>
```

## API

### skrlspeed([element])

  Return [controller](#controller) for `element`, default `window`

### Controller

#### Controller#set(factor)

  Set speed factor, default 1

```js
skrlspeed().set(-1);
```

#### Controller#clear()

  Set default speed factor

## License

  MIT
