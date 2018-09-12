# flat-map
flat map algorithm like scala

# API

## flatMap(Array, Mapper) => Array

# Usage

```js
assert.deepEqual(flatMap([
     1, 2, 3, [ 4, 5 ]
     ], (r) => r * 2),
     [
        2, 4, 6, 8, 10
    ]);
```
