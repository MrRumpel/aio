import { defineComponent, onMounted, ref, type Ref } from 'vue';
import { Alert, Card, ConfigProvider, Table, theme } from 'ant-design-vue';
import { useFetch } from '@/components/shared/fetch';
import { useECharts } from '@/hooks/web/useECharts';
import * as echarts from 'echarts/core';
import 'echarts-liquidfill';

export default defineComponent({
  name: 'DashboardPage',
  setup: () => {
    // 0 亏损 1 债券 2 其他 3 券商 4 银行理财 5 银行存款 6 股票基金
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
    const chartRef = ref<HTMLDivElement | null>(null);
    const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
    const res = ref('');
    const getFc = async () => {
      const data = await fetch('/api/data');
      return data.json();
    };
    getFc().then((e: { sum: number }[]) => {
      res.value = e as any;
      const angle = 0; // 角度
      const dataValue = (((e.map((item) => item.sum).reduce((a, b) => a + b) + 12000) / 12000) * 100).toFixed(2);

      setOptions({
        // backgroundColor: '#002837',
        title: {
          text: `{v|${dataValue}}{unit|%}\n{t|回本进度}`,
          x: 'center',
          y: 'center',
          textStyle: {
            rich: {
              v: { fontSize: 35, color: '#28edf2' },
              unit: { fontSize: 24, color: '#28edf2' },
              t: { fontSize: 22, color: '#28edf2' },
            },
          },
        },
        series: [
          /** 绘制内部圆弧-1 <right-top> */
          {
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                  startAngle: ((270 + angle) * Math.PI) / 180,
                  endAngle: ((360 + angle) * Math.PI) / 180,
                },
                style: {
                  fill: 'transparent',
                  stroke: 'rgba(1, 248, 68, 0.4)',
                  lineWidth: 2,
                },
                silent: true,
              };
            },
            data: [0],
          },
          /** 绘制内部圆弧-2 <left-bottom> */
          {
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                  startAngle: ((90 + angle) * Math.PI) / 180,
                  endAngle: ((180 + angle) * Math.PI) / 180,
                },
                style: {
                  fill: 'transparent',
                  stroke: 'rgba(1, 248, 68, 0.4)',
                  lineWidth: 2,
                },
                silent: true,
              };
            },
            data: [0],
          },
          /** 绘制外部圆弧-1 <right-bottom> */
          {
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.66,
                  startAngle: ((355 + -angle) * Math.PI) / 180,
                  endAngle: ((120 + -angle) * Math.PI) / 180,
                },
                style: {
                  fill: 'transparent',
                  stroke: 'rgba(1, 248, 68, 0.4)',
                  lineWidth: 2.6,
                },
                silent: true,
              };
            },
            data: [0],
          },
          /** 绘制外部圆弧-2 <left-top> */
          {
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.66,
                  startAngle: ((175 + -angle) * Math.PI) / 180,
                  endAngle: ((300 + -angle) * Math.PI) / 180,
                },
                style: {
                  fill: 'transparent',
                  stroke: 'rgba(1, 248, 68, 0.4)',
                  lineWidth: 2.6,
                },
                silent: true,
              };
            },
            data: [0],
          },
          /** 绘制外部圆弧-1-开始圆点 <right-bottom> */
          {
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              let x0 = api.getWidth() / 2;
              let y0 = api.getHeight() / 2;
              let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.66;
              return {
                type: 'circle',
                shape: {
                  /** 角度355° 外弧1开始角度 */
                  cx: x0 + r * Math.cos(((355 + -angle) * Math.PI) / 180),
                  cy: y0 + r * Math.sin(((355 + -angle) * Math.PI) / 180),
                  r: 4,
                },
                style: {
                  fill: 'rgba(1, 248, 68, 0.4)',
                  stroke: 'rgba(1, 248, 68, 0.4)',
                },
                silent: true,
              };
            },
            data: [0],
          },
          /** 绘制外部圆弧-2-开始圆点 <left-top> */
          {
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              let x0 = api.getWidth() / 2;
              let y0 = api.getHeight() / 2;
              let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.66;
              return {
                type: 'circle',
                shape: {
                  /** 角度175° 外弧2开始角度 */
                  cx: x0 + r * Math.cos(((175 + -angle) * Math.PI) / 180),
                  cy: y0 + r * Math.sin(((175 + -angle) * Math.PI) / 180),
                  r: 4,
                },
                style: {
                  fill: 'rgba(1, 248, 68, 0.4)',
                  stroke: 'rgba(1, 248, 68, 0.4)',
                },
                silent: true,
              };
            },
            data: [0],
          },
          /** 刻度仪表盘 */
          {
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '68.5%', // 错位调整此处
            startAngle: 0,
            endAngle: 360,
            axisLine: { show: false },
            splitLine: { show: false },
            axisTick: {
              splitNumber: 10,
              // length: 8,  // 刻度长度
              length: '4%',
              lineStyle: {
                color: 'rgba(1, 248, 68, 0.4)',
                width: 1.5,
              },
            },
            axisLabel: { show: false },
          },
          /** 内心圆 */
          {
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              return {
                type: 'circle',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.38,
                  startAngle: ((175 + angle) * Math.PI) / 180,
                  endAngle: ((300 + angle) * Math.PI) / 180,
                },
                style: {
                  fill: 'transparent',
                  stroke: '#00374C80',
                  lineWidth: 2.6,
                },
                silent: true,
              };
            },
            data: [0],
          },
          /** 饼图 */
          {
            name: '已完成',
            type: 'pie',
            startAngle: 90,
            z: 0,
            label: {
              position: 'center',
            },
            radius: ['56%', '44%'],
            silent: true,
            animation: false, // 关闭饼图动画
            data: [
              {
                value: dataValue,
                itemStyle: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0.2,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      { offset: 0, color: '#01f74420' },
                      { offset: 1, color: '#01f744' },
                    ],
                  },
                },
              },
              {
                name: '未完成',
                value: 100 - dataValue,
                label: { show: false },
                itemStyle: { color: '#00374C' },
              },
            ],
          },
          /** 饼图上刻度 */
          {
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '63%', // 错位调整此处
            startAngle: 0,
            endAngle: 360,
            splitNumber: 12,
            axisLine: { show: false },
            splitLine: {
              // length: 39,
              length: '24%',
              lineStyle: {
                width: 10,
                color: '#002837',
              },
            },
            axisTick: { show: false },
            axisLabel: { show: false },
          },
        ],
      });
    });
    return () => (
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <div ref={chartRef} style={{ height: 'calc(80vh - 78px)' }}></div>
        <Table dataSource={res.value as any} columns={columns} size='small'></Table>
      </ConfigProvider>
    );
  },
});
