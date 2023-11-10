import { GetTitleWithRouter } from '@/components/header/getTitleWithRouter';
import MarkdownPreviewWithRoute from '@/components/shared/md';
import { Button } from 'ant-design-vue';
import { ref, watch, watchEffect } from 'vue';

export default () => {
  const count = ref(0);

  watch(count, (newValue, oldValue) => {
    console.log(`watch: count changed from ${oldValue} to ${newValue}`);
  });

  watchEffect(() => {
    console.info('立即执行!');
    console.log(`watchEffect: count is ${count.value}`);
  });

  return (
    <div>
      <div>
        <GetTitleWithRouter></GetTitleWithRouter>
        <Button onClick={() => count.value++}>修改count值 触发watch</Button>
      </div>
      <MarkdownPreviewWithRoute />
    </div>
  );
};
