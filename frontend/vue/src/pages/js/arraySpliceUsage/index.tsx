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
    const index = ref(1);
    const deleteCount = ref(2);
    const addItem = ref(6);
    const spliceArray = () => {
      array.value.splice(index.value, deleteCount.value, addItem.value);
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
          <Typography.Title level={3}>数组splice方法的使用</Typography.Title>
          <Typography.Paragraph>原数组：{array.value.join(', ')}</Typography.Paragraph>
          <Typography.Paragraph>
            splice参数：开始位置 {index.value}，删除数量 {deleteCount.value}，添加项 {addItem.value}
          </Typography.Paragraph>
          <Button onClick={spliceArray}>执行splice</Button>
          <Typography.Paragraph>执行后的数组：{array.value.join(', ')}</Typography.Paragraph>
        </div>
        <markdown-preview source={md.value} />
      </div>
    );
  },
});
