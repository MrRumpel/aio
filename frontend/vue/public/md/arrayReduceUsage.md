```js
const array = ref([1, 2, 3, 4, 5]);
const initialValue = ref(0);
const resultValue = ref(0);
const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
const reduceArray = () => {
  return array.value.reduce(reducer, initialValue.value);
};
```