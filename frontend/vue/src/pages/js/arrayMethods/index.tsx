import MarkdownPreviewWithRoute from '@/components/shared/md';
import { Divider, Typography } from 'ant-design-vue';
import { ref } from 'vue';

export default () => {
  const originalArray = ref([1, 2, 3, 4, 5]);
  const newArray = ref<number[]>([]);

  // 使用 forEach
  originalArray.value.forEach((item, index) => {
    originalArray.value[index] = item * 2;
  });

  // 使用 map
  newArray.value = originalArray.value.map((item) => item * 2);

  const originalObjArray = ref([{ num: 1 }, { num: 2 }, { num: 3 }]);
  const newObjArray = ref<{ num: number }[]>([]);

  // 使用 forEach
  originalObjArray.value.forEach((item) => {
    item.num *= 2;
  });

  // 使用 map
  newObjArray.value = originalObjArray.value.map((item) => ({ ...item, num: item.num * 2 }));

  return (
    <div>
      <div>
        <Typography.Title level={3}>forEach 和 map 方法的区别</Typography.Title>
        <Typography.Paragraph>
          在这个示例中，我们首先定义了一个原始数组 originalArray 和一个新数组 newArray。
        </Typography.Paragraph>
        <Typography.Paragraph>
          然后，我们使用 forEach 遍历 originalArray，并将每个元素乘以 2。注意，这会修改 originalArray。
        </Typography.Paragraph>
        <Typography.Paragraph>
          然后，我们使用 map 遍历 originalArray，并将每个元素乘以 2，结果赋值给 newArray。
        </Typography.Paragraph>
        <Typography.Paragraph>注意，map 不会修改 originalArray，而是返回一个新的数组。</Typography.Paragraph>
        <Typography.Paragraph>原数组：{[1, 2, 3, 4, 5].join(', ')}</Typography.Paragraph>
        <Typography.Paragraph>forEach数组：{originalArray.value.join(', ')}</Typography.Paragraph>
        <Typography.Paragraph>map数组：{newArray.value.join(', ')}</Typography.Paragraph>
        <Divider />
        <Typography.Paragraph>
          如果数组的元素是对象，forEach 和 map 的行为会有所不同。forEach 仍然会直接修改原数组，而 map
          会创建一个新的数组，但新数组中的对象是对原数组中对象的引用，所以如果你修改了新数组中的对象，原数组中的对象也会被修改。
        </Typography.Paragraph>
        <Typography.Paragraph>
          在这个示例中，我们首先定义了一个原始数组 originalObjArray 和一个新数组
          newObjArray，数组的元素是对象。然后，我们使用 forEach 遍历 originalObjArray，并将每个元素的 num 属性乘以
          2。然后，我们使用 map 遍历 originalObjArray，并将每个元素的 num 属性乘以 2，结果赋值给
          newObjArray。注意，我们在 map 中使用了对象的扩展运算符 ... 来创建一个新的对象，这样就不会修改原数组中的对象。
        </Typography.Paragraph>
        <Typography.Paragraph>
          原数组：{[{ num: 1 }, { num: 2 }, { num: 3 }].map((item) => item.num).join(', ')}
        </Typography.Paragraph>
        <Typography.Paragraph>
          forEach数组：{originalObjArray.value.map((item) => item.num).join(', ')}
        </Typography.Paragraph>
        <Typography.Paragraph>map数组：{newObjArray.value.map((item) => item.num).join(', ')}</Typography.Paragraph>
      </div>
      <MarkdownPreviewWithRoute />
    </div>
  );
};
