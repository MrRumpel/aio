# Vue 3 组件通信示例

这个示例展示了 Vue 3 中几种主要的组件通信方式。

## Props 和 Events

父组件通过 props 向子组件传递数据，子组件通过 events 向父组件发送消息。

```tsx
type ChildComponentProps = {
  message: string;
  onSendMessage: (message: string) => void;
};
type Events = {
  sendMessage(message: string): void;
};
export const ChildComponent = (props: ChildComponentProps, context: SetupContext<Events>) => {
  return (
    <div>
      <Typography.Paragraph>子组件通过props获取到的值：{props.message}</Typography.Paragraph>
      <Button onClick={() => sendMessage('Child Edit By emit!')}>通过emit修改props获取到的值</Button>
    </div>
  );
};
```

在这个示例中，message 是一个 prop，onSendMessage 是一个 event。

# Provide 和 Inject

祖先组件通过 provide 提供变量，后代组件通过 inject 来接收变量。

在这个示例中，我们使用 provide 提供了一个响应式的字符串 messageProvide。

```tsx
export const ChildComponent = () => {
  return (
    <div>
      <Typography.Paragraph>子组件通过Provide 和 Inject获取到的值：{message?.value}</Typography.Paragraph>
      <Button onClick={() => (message!.value = 'Child Edit!')}>修改inject获取到的值</Button>
    </div>
  );
};
```

# Pinia

Pinia 是一个状态管理库，它提供了一种在应用的所有组件之间共享状态的方式。

## 首先创建store 使用vue hooks的风格

```js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFirstStore = defineStore('firstStore', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

## 代码中使用store

```tsx
export const ChildComponent = () => {
  const { count, increment, doubleCount } = useFirstStore();
  return (
    <div>
      <Typography.Paragraph>
        子组件通过pinia获取到的值：{count} 双倍值：{doubleCount}
      </Typography.Paragraph>
      <Button onClick={increment}>通过操作pinia修改获取到的值</Button>
    </div>
  );
};
```
