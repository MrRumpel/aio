import { defineComponent, ref } from 'vue';
import MarkdownPreview from '@uivjs/vue-markdown-preview';
import { useRoute } from 'vue-router';

const MarkdownPreviewWithRoute = defineComponent({
  components: {
    MarkdownPreview,
  },
  setup() {
    const md = ref('');
    const { name } = useRoute();
    const getMd = async () => {
      const data = await fetch(`/md/${name?.toString()}.md`);
      return data.text();
    };
    getMd().then((e) => (md.value = e));
    return () => <markdown-preview source={md.value} />;
  },
});

export default MarkdownPreviewWithRoute;
