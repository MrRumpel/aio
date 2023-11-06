import { defineComponent, ref } from 'vue';
import { Typography } from 'ant-design-vue';
import MarkdownPreview from '@uivjs/vue-markdown-preview';
import type { json } from 'stream/consumers';

export default defineComponent({
  name: 'CompareConstVarLet',
  components: {
    MarkdownPreview,
  },
  setup: () => {
    const md = ref('');
    const getMd = async () => {
      const data = await fetch('/md/CompareConstVarLet.md');
      return data.text();
    };
    getMd().then((e) => (md.value = e));
    return () => (
      <div>
        <div>
          <Typography.Title level={3}>对比 Const Var Let</Typography.Title>
          点击复制以下代码到控制台运行，查看const、let和var的区别
        </div>
        <markdown-preview source={md.value} />
      </div>
    );
  },
});
