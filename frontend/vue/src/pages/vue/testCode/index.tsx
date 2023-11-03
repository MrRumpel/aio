import {
  computed,
  customRef,
  defineComponent,
  reactive,
  readonly,
  ref,
  shallowRef,
  toRef,
  triggerRef,
  watchEffect,
} from 'vue';
import MarkdownPreview from '@uivjs/vue-markdown-preview';
import '@uivjs/vue-markdown-preview/markdown.css';

export function useDebouncedRef(value: any, delay = 200) {
  let timeout: string | number | NodeJS.Timeout | undefined;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
export default defineComponent({
  name: 'reactivity-core',
  components: {
    MarkdownPreview,
  },
  setup: () => {
    const md = ref('');
    const getMd = async () => {
      const data = await fetch('/md/reactivity-core.md');
      return data.text();
    };
    getMd().then((e) => (md.value = e));
    const text = useDebouncedRef('hello');
    const data = reactive({
      name: 'vue',
      age: '3',
    });
    // const nameRef = toRef(data, 'name');
    const nameRef = ref(data.name);
    const { name, age } = data;
    console.info(nameRef.value, name);
    data.name = 'vue3';
    console.info('修改reactive');
    console.info(data.name, nameRef.value, name);
    nameRef.value = 'vue4';
    console.info('修改ref');
    console.info(data.name, nameRef.value, name);

    return () => (
      <div>
        <markdown-preview source={md.value} />
      </div>
    );
  },
});
