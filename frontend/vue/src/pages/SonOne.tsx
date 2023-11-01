import { defineComponent } from 'vue';

const SonOne = defineComponent({
  name: 'SonOne',
  setup: () => {
    return {};
  },
  render() {
    return (
      <WujieVue
        width='100%'
        height='100%'
        name='react'
        url={'http://localhost:5174/'}
        sync={true}
        props={{ data: 123, methods: () => console.info('vue frame') }}
      ></WujieVue>
    );
  },
});
export default SonOne;
