import MarkdownPreviewWithRoute from '@/components/shared/md';
import { useFirstStore } from '@/stores/firstStore';
import { Button, Typography } from 'ant-design-vue';
import { defineComponent, inject, provide, ref, type Ref, type SetupContext } from 'vue';
type ChildComponentProps = {
  message: string;
  onSendMessage: (message: string) => void;
};
type Events = {
  sendMessage(message: string): void;
};
export const ChildComponent = (props: ChildComponentProps, context: SetupContext<Events>) => {
  const message = inject<Ref<string>>('message');
  const { emit } = context;
  const sendMessage = (message: string) => emit('sendMessage', message);
  const { count, increment, doubleCount } = useFirstStore();
  return (
    <div>
      <Typography.Paragraph>子组件通过props获取到的值：{props.message}</Typography.Paragraph>
      <Typography.Paragraph>子组件通过Provide 和 Inject获取到的值：{message?.value}</Typography.Paragraph>
      <Typography.Paragraph>
        子组件通过pinia获取到的值：{count} 双倍值：{doubleCount}
      </Typography.Paragraph>
      <Button onClick={() => (message!.value = 'Child Edit!')}>修改inject获取到的值</Button>
      <Button onClick={() => sendMessage('Child Edit By emit!')}>通过emit修改props获取到的值</Button>
      <Button onClick={increment}>通过操作pinia修改获取到的值</Button>
    </div>
  );
};

export default defineComponent({
  setup() {
    const message = ref('Hello, Vue 3');
    const messageProvide = ref('Provide Hello, Vue 3');
    provide('message', messageProvide);
    const store = useFirstStore();
    return () => (
      <div>
        <div>
          <Typography.Title level={3}>Vue 3 组件通信方式</Typography.Title>
          <Typography.Paragraph>父组件原始值：{message.value}</Typography.Paragraph>
          <Typography.Paragraph>父组件Provide的原始值：{messageProvide.value}</Typography.Paragraph>
          <Typography.Paragraph>pinia中的原始值：{store.count}</Typography.Paragraph>
          <ChildComponent message={message.value} onSendMessage={(val: string) => (message.value = val)} />
        </div>
        <MarkdownPreviewWithRoute></MarkdownPreviewWithRoute>
      </div>
    );
  },
});
