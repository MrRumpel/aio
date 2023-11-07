```js
const set = ref(new Set([1, 2, 3, 4, 5]));
const map = ref(new Map().set('a', 1).set('b', 2).set('c', 3));

const setInfo = `Set是一种特殊的数据结构，它只存储唯一的值。当前Set的值：${[...set.value].join(', ')}`;
const mapInfo = `Map是一种特殊的数据结构，它存储键值对。当前Map的值：${[...map.value].map(([key, value]) => `${key}: ${value}`).join(', ')}`;
```
