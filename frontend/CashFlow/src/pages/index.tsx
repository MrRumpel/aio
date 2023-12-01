import { defineComponent, onMounted } from 'vue';
import { Alert, Card, ConfigProvider, Table, theme } from 'ant-design-vue';
import { useFetch } from '@/components/shared/fetch';

export default defineComponent({
  name: 'DashboardPage',
  setup: () => {
    const { data, error } = useFetch('/api/data');
    const columns = [
      {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        customRender: ({ text }: { text: string }) => <div>{text.split('T')[0]}</div>,
      },
      {
        title: '金额',
        dataIndex: 'sum',
        key: 'sum',
      },
      {
        title: '说明',
        dataIndex: 'description',
        key: 'description',
      },
    ];
    return () => (
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <Table dataSource={data.value as any} columns={columns} size='small'></Table>
      </ConfigProvider>
    );
  },
});
