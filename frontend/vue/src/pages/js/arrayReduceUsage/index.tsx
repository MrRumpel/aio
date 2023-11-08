import { Button, Typography } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import MarkdownPreview from '@uivjs/vue-markdown-preview';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    MarkdownPreview,
  },
  setup() {
    const array = ref([1, 2, 3, 4, 5]);
    const initialValue = ref(0);
    const resultValue = ref(0);
    const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
    const reduceArray = () => {
      return array.value.reduce(reducer, initialValue.value);
    };

    const md = ref('');
    const { name } = useRoute();
    const getMd = async () => {
      const data = await fetch(`/md/${name?.toString()}.md`);
      return data.text();
    };
    getMd().then((e) => (md.value = e));
    return () => (
      <div>
        <div>
          <Typography.Title level={3}>数组reduce方法的使用</Typography.Title>
          <Typography.Paragraph>
            在这个示例中，我们首先定义了一个数组 array 和一个初始值 initialValue。然后，我们定义了一个 reducer
            函数，这个函数接受两个参数：累加器和当前值，然后返回它们的和。接着，我们定义了一个 reduceArray
            方法，这个方法使用 reduce 方法来计算 array 的所有元素的和。
            最后，我们在页面上渲染了这个数组的和。
          </Typography.Paragraph>
          <Typography.Paragraph>原数组：{array.value.join(', ')}</Typography.Paragraph>
          <Typography.Paragraph>reduce参数：初始值 {initialValue.value}</Typography.Paragraph>
          <Button onClick={() => (resultValue.value = reduceArray())}>执行reduce</Button>
          <Typography.Paragraph>执行后的结果：{resultValue.value}</Typography.Paragraph>
        </div>
        <markdown-preview source={md.value} />
      </div>
    );
  },
});
