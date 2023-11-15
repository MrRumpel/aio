import MarkdownPreviewWithRoute from '@/components/shared/md';
import { Typography } from 'ant-design-vue';

export default function ObjectIsExample() {
  return (
    <div>
      <div>
        <Typography.Title level={3}>Object.is 的使用</Typography.Title>
      </div>
      <MarkdownPreviewWithRoute />
    </div>
  );
}
