import MarkdownPreviewWithRoute from '@/components/shared/md';
import { Button, Typography, message } from 'ant-design-vue';
import { ref, computed, unref } from 'vue';

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
  //   const unwrapped = unref(count);
  return (
    <div>
      <div>
        <Typography.Paragraph>演示 count：{count.value}</Typography.Paragraph>
        {/* <Typography.Paragraph>演示 unwrapped {unwrapped}</Typography.Paragraph> */}
        <Typography.Paragraph>演示 isZero：{isZero.value ? '是' : '否'}</Typography.Paragraph>
        <Button onClick={() => console.info(unref(count), count)}>clear</Button>
        <Button onClick={increment}>增加</Button>
        <Button onClick={decrement}>减少</Button>
      </div>
    </div>
  );
};
