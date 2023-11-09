import { defineComponent, ref } from 'vue';
import MarkdownPreview from '@uivjs/vue-markdown-preview';
import { useRoute, useRouter } from 'vue-router';
import MarkdownPreviewWithRoute from '@/components/shared/md';

export default defineComponent({
  components: {
    MarkdownPreview,
  },
  setup: () => {
    return () => (
      <div>
        <MarkdownPreviewWithRoute />
      </div>
    );
  },
});
