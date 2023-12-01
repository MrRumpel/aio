import { Typography } from 'ant-design-vue';
import { useRoute } from 'vue-router';

export const GetTitleWithRouter = () => {
  const { meta } = useRoute();
  return <Typography.Title level={3}>{meta.title}</Typography.Title>;
};
