# 函数式编程

## 定义hooks

在 Vue 3 中，我们可以使用 Composition API 来创建可复用的逻辑，这与 React 中的 Hooks 类似。以下是一个简单的例子，演示了如何创建一个自定义的 hook 函数 useCounter：

```js
import { ref, computed } from 'vue';

export function useCounter() {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const isZero = computed(() => count.value === 0);

  return {
    count,
    increment,
    decrement,
    isZero,
  };
}
```

## hooks 使用

在这个例子中，我们首先定义了一个响应式的变量 count，然后定义了两个函数 increment 和 decrement，用于增加和减少 count 的值。然后，我们定义了一个计算属性 isZero，它会返回 count 是否为 0。最后，我们返回了这些变量和函数。

你可以在你的组件中使用这个 useCounter 函数：

```jsx
export default () => {
  const { count, increment, decrement, isZero } = useCounter();
  return (
    <div>
      <div>
        <Typography.Title level={3}>Vue 3 中 Hooks 函数的使用</Typography.Title>
        <Typography.Paragraph>演示 count：{count.value}</Typography.Paragraph>
        <Typography.Paragraph>演示 isZero：{isZero.value ? '是' : '否'}</Typography.Paragraph>
        <Button onClick={increment}>增加</Button>
        <Button onClick={decrement}>减少</Button>
      </div>
      <MarkdownPreviewWithRoute></MarkdownPreviewWithRoute>
    </div>
  );
};
```

在这个组件中，我们使用了 useCounter 函数，并将返回的变量和函数用于模板。