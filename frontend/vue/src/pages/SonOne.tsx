import { defineComponent } from 'vue';
import WujieVue from 'wujie-vue3';

const SonOne = defineComponent({
  name: 'SonOne',
  components: {
    WujieVue,
  },
  setup: () => {
    return {};
  },
  render() {
    return (
      <wujie-vue
        width='100%'
        height='100%'
        name='react'
        url={'http://localhost:5174/'}
        sync={true}
        props={{ data: 123, methods: () => console.info('vue frame') }}
      ></wujie-vue>
    );
  },
});
export default SonOne;
