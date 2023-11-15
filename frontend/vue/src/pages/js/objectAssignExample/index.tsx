import MarkdownPreviewWithRoute from '@/components/shared/md';
import { Typography } from 'ant-design-vue';

export default () => {
  return (
    <div>
      <div>
        <Typography.Title level={3}>Object.assign 的使用 的使用</Typography.Title>
      </div>
      <MarkdownPreviewWithRoute />
    </div>
  );
};
