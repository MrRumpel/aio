```js
  const originalArray = ref([1, 2, 3, 4, 5]);
  const newArray = ref<number[]>([]);

  // 使用 forEach
  originalArray.value.forEach((item, index) => {
    originalArray.value[index] = item * 2;
  });

  // 使用 map
  newArray.value = originalArray.value.map((item) => item * 2);

  const originalObjArray = ref([{ num: 1 }, { num: 2 }, { num: 3 }]);
  const newObjArray = ref<{ num: number }[]>([]);

  // 使用 forEach
  originalObjArray.value.forEach((item) => {
    item.num *= 2;
  });

  // 使用 map
  newObjArray.value = originalObjArray.value.map((item) => ({ ...item, num: item.num * 2 }));
```
