import { Typography } from 'ant-design-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CompareVwAndPercent',
  setup: () => {
    return () => (
      <div>
        <Typography.Title>对比 Vw 和 百分比</Typography.Title>
        <Typography.Paragraph>vw和%都是CSS中的长度单位，它们的主要区别在于参考基准不同：</Typography.Paragraph>
        <Typography.Paragraph>
          vw：表示视口的宽度。1vw等于视口宽度的1%。无论元素在哪里，无论嵌套有多深，vw都是基于视口的宽度来计算的。
        </Typography.Paragraph>
        <Typography.Paragraph>
          %：表示父元素的宽度。1%等于父元素宽度的1%。%是基于父元素的宽度来计算的。
        </Typography.Paragraph>
        <Typography.Title>百分比</Typography.Title>
        <div style={{ height: '50px', backgroundColor: '#95de64', width: '50%' }}></div>
        <Typography.Title>vw</Typography.Title>
        <div style={{ height: '50px', backgroundColor: '#389e0d', width: '50vw' }}></div>
      </div>
    );
  },
});
