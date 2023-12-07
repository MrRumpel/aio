import {
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Form,
  FormItem,
  InputNumber,
  Select,
  SelectOption,
  Space,
  Textarea,
  theme,
} from 'ant-design-vue';
import { defineComponent, reactive, ref } from 'vue';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const { push } = useRouter();
    const formData = reactive({
      date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      sum: 0,
      type: 1,
      description: '',
    });
    const typeMap = [
      { type: 1, name: '债券' },
      { type: 2, name: '其他' },
      { type: 3, name: '券商' },
      { type: 4, name: '银行理财' },
      { type: 5, name: '银行存款' },
      { type: 6, name: '股票基金' },
    ];
    const save = (e: any) => {
      fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(e),
      })
        .then((data) => push({ name: 'home' }))
        .catch((error) => console.error('Error:', error));
    };
    return () => (
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <Card title='新增记录'>
          <Form model={formData} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={save}>
            <FormItem label='日期' name='date'>
              <DatePicker
                style={{ width: '100%' }}
                valueFormat='YYYY-MM-DD HH:mm:ss'
                v-model:value={formData.date}
              ></DatePicker>
            </FormItem>
            <FormItem label='类别' name='type'>
              <Select style={{ width: '100%' }} v-model:value={formData.type}>
                {typeMap.map((item) => (
                  <SelectOption value={item.type}>{item.name}</SelectOption>
                ))}
              </Select>
            </FormItem>
            <FormItem label='金额' name='sum'>
              <InputNumber style={{ width: '100%' }} v-model:value={formData.sum}></InputNumber>
            </FormItem>
            <FormItem label='备注' name='description'>
              <Textarea style={{ width: '100%' }} v-model:value={formData.description}></Textarea>
            </FormItem>
            <FormItem>
              <Button type='primary' html-type='submit'>
                Submit
              </Button>
            </FormItem>
          </Form>
        </Card>
      </ConfigProvider>
    );
  },
});
