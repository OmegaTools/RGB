# How to Use



## Hex

```js

  const { hexToRGB } = require('to-rgb');

```

###### `Alpha` Support

```js

  const [ R , G , B , A ] = hexToRGB('#108C3266');
  const [  R  , G ,  B  ] = hexToRGB('#108C32');

```

***

## HSL

```js

  const { hslToRGB } = require('to-rgb');

```

###### `Alpha` Support

```js

  const [ R , G , B , A ] = hslToRGB(180,0.5,0.5,40);
  const [  R  , G ,  B  ] = hslToRGB(100,0.8,0.2);

```

###### Pass an `Array`

```js

  const rgb = hslToRGB([ 30 , 0 , 0.2 ]);

```

###### Use with `.map()`

```js

  const hslColors = [
    [ 210 ,  1  , 0.5 , 130 ],
    [ 120 , 0.8 ,  0  , 200 ]
  ]

  hslColors
  .map(hslToRGB)
  .forEach((rgba) => console.log(rgba));

```
