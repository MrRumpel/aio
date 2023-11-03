import { defineComponent, ref } from 'vue';
import MarkdownPreview from '@uivjs/vue-markdown-preview';
import '@uivjs/vue-markdown-preview/markdown.css';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  components: {
    MarkdownPreview,
  },
  setup: () => {
    const { name } = useRoute();
    const md = ref('');
    const getMd = async () => {
      const data = await fetch(`/md/${name?.toString()}.md`);
      return data.text();
    };
    getMd().then((e) => (md.value = e));
    return () => (
      <div>
        <markdown-preview source={md.value} />
      </div>
    );
  },
});
