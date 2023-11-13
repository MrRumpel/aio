import MarkdownPreviewWithRoute from '@/components/shared/md';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <MarkdownPreviewWithRoute />
      </div>
    );
  },
});
