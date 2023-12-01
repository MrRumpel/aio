import { defineComponent } from 'vue';

export const BlankLayoutComponent = defineComponent({
  name: 'BlankLayoutComponent',
  render() {
    return <router-view />;
  },
});
