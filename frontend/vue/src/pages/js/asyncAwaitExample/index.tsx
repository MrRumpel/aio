import { useFetch } from '@/components/shared/fetch';
import MarkdownPreviewWithRoute from '@/components/shared/md';
import { Typography } from 'ant-design-vue';
import { defineComponent, onMounted, ref, watchEffect } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <div>
          <Typography.Title level={3}>Async/Await 的使用</Typography.Title>
        </div>
        <MarkdownPreviewWithRoute></MarkdownPreviewWithRoute>
      </div>
    );
  },
});
