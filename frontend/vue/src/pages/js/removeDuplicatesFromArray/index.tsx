import { Typography } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import MarkdownPreview from '@uivjs/vue-markdown-preview';

export default defineComponent({
  components: {
    MarkdownPreview,
  },
  setup() {
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

    const md = ref('');
    const getMd = async () => {
      const data = await fetch('/md/removeDuplicatesFromArray.md');
      return data.text();
    };
    getMd().then((e) => (md.value = e));
    return () => (
      <div>
        <div>
          <Typography.Title level={3}>数组去重演示</Typography.Title>
          原数组：{array.value.join(', ')}
          <br />
          使用Set去重：{uniqueArrayWithSet.value.join(', ')}
          <br />
          使用filter去重：{uniqueArrayWithFilter.value.join(', ')}
          <br />
          使用reduce去重：{uniqueArrayWithReduce.value.join(', ')}
        </div>
        <markdown-preview source={md.value} />
      </div>
    );
  },
});
