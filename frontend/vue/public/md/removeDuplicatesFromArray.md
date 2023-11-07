```js
const array = ref([1, 2, 2, 3, 4, 4, 5]);
const uniqueArrayWithSet = ref<number[]>([]);
const uniqueArrayWithFilter = ref<number[]>([]);
const uniqueArrayWithReduce = ref<number[]>([]);

const removeDuplicatesWithSet = () => {
  uniqueArrayWithSet.value = [...new Set(array.value)];
};

const removeDuplicatesWithFilter = () => {
  uniqueArrayWithFilter.value = array.value.filter((value, index, self) => self.indexOf(value) === index);
};

const removeDuplicatesWithReduce = () => {
  uniqueArrayWithReduce.value = array.value.reduce((accumulator: number[], value) => {
if (!accumulator.includes(value)) {
  accumulator.push(value);
}
return accumulator;
  }, []);
};

removeDuplicatesWithSet();
removeDuplicatesWithFilter();
removeDuplicatesWithReduce();
```
