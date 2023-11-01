import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'reactivity-fundamentals',
  setup: () => {
    const count = ref(0);
    return { count };
  },
  render() {
    const { count } = this;
    return <div>{count}</div>;
  },
});
