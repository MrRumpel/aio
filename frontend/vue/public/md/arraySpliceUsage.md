```js
const array = ref([1, 2, 3, 4, 5]);
const index = ref(1);
const deleteCount = ref(2);
const addItem = ref(6);
const spliceArray = () => {
  array.value.splice(index.value, deleteCount.value, addItem.value);
};
```
