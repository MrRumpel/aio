import { Typography } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import MarkdownPreview from '@uivjs/vue-markdown-preview';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    MarkdownPreview,
  },
  setup() {
    const set = ref(new Set([1, 2, 3, 4, 5]));
    const map = ref(new Map().set('a', 1).set('b', 2).set('c', 3));
    const setInfo = `Set是一种特殊的数据结构，它只存储唯一的值。当前Set的值：${[...set.value].join(', ')}`;
    const mapInfo = `Map是一种特殊的数据结构，它存储键值对。当前Map的值：${[...map.value]
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ')}`;

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
          <Typography.Title level={3}>Set和Map的对比</Typography.Title>
          <Typography.Paragraph>{setInfo}</Typography.Paragraph>
          <Typography.Paragraph>{mapInfo}</Typography.Paragraph>
        </div>
        <markdown-preview source={md.value} />
      </div>
    );
  },
});
