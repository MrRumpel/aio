import { defineComponent } from 'vue';
import { Alert } from 'ant-design-vue';

export default defineComponent({
  name: 'DashboardPage',
  setup: () => {
    const data = ['js面试题', 'css面试题', '浏览器面试题', 'http面试题', 'vue面试题'];

    return () => (
      <div>
        <h1>本项目分类为：</h1>
        {data.map((item) => (
          <Alert style={{ marginBottom: '10px' }} message={item} type='info' />
        ))}
      </div>
    );
  },
});
