import { Button, Typography } from 'ant-design-vue';
import { defineComponent, reactive, ref } from 'vue';
import MarkdownPreview from '@uivjs/vue-markdown-preview';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    MarkdownPreview,
  },
  setup() {
    const message = ref('Hello, Vue 3');
    const state = reactive({ count: 0 });
    const increment = () => {
      state.count++;
    };

    return () => (
      <div>
        <div>
          <Typography.Title level={3}>vue3的 reactive 和 ref 区别和使用场景</Typography.Title>
          <Typography.Paragraph>
            在 Vue 3 中，<Typography.Text mark>reactive</Typography.Text> 和 <Typography.Text mark>ref</Typography.Text>
            都是用来创建响应式数据的方法，但它们在使用方式和使用场景上有一些区别。
          </Typography.Paragraph>
          <Typography.Paragraph>
            <Typography.Text mark>reactive</Typography.Text> 是用来创建响应式对象的。你可以传递一个普通的 JavaScript
            对象给
            <Typography.Text mark>reactive</Typography.Text>
            ，它会返回一个新的响应式对象，这个对象是原对象的代理。当你访问或修改这个响应式对象的属性时，Vue
            会自动追踪这些操作，以便在需要时更新视图。<Typography.Text mark>reactive</Typography.Text>
            更适合用于管理复杂的状态，比如包含多个属性的对象。
          </Typography.Paragraph>
          <Typography.Paragraph>
            <Typography.Text mark>ref</Typography.Text> 是用来创建响应式的单个值的。你可以传递一个值给
            <Typography.Text mark>ref</Typography.Text>，它会返回一个具有单个属性 value 的对象。你可以通过 value
            属性来访问或修改这个值。当你修改 value 属性的值时，Vue 会自动追踪这个操作，以便在需要时更新视图。
            <Typography.Text mark>ref</Typography.Text>
            更适合用于管理简单的状态，比如单个的字符串、数字或布尔值。
          </Typography.Paragraph>
          以下是一个示例，演示了如何使用 <Typography.Text mark>reactive</Typography.Text> 和{' '}
          <Typography.Text mark>ref</Typography.Text>：
        </div>
        <Typography.Paragraph>
          <Typography.Text mark>ref</Typography.Text>: {message.value}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text mark>reactive</Typography.Text>: {state.count}
        </Typography.Paragraph>
        <Button onClick={increment}>执行count++</Button>
      </div>
    );
  },
});
