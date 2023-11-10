import MarkdownPreviewWithRoute from '@/components/shared/md';
import { Button, Typography, message } from 'ant-design-vue';
import { ref, computed } from 'vue';

export function useCounter() {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const isZero = computed(() => count.value === 0);

  return {
    count,
    increment,
    decrement,
    isZero,
  };
}

export default () => {
  const { count, increment, decrement, isZero } = useCounter();
  return (
    <div>
      <div>
        <Typography.Title level={3}>Vue 3 中 Hooks 函数的使用</Typography.Title>
        <Typography.Paragraph>演示 count：{count.value}</Typography.Paragraph>
        <Typography.Paragraph>演示 isZero：{isZero.value ? '是' : '否'}</Typography.Paragraph>
        <Button onClick={increment}>增加</Button>
        <Button onClick={decrement}>减少</Button>
      </div>
      <MarkdownPreviewWithRoute></MarkdownPreviewWithRoute>
    </div>
  );
};
