# Watch & watchEffect

## 说明

watch 和 watchEffect 都是 Vue 3 中的响应式 API，它们都用于观察响应式数据的变化。主要区别在于：

- watch 需要明确指定要观察的数据源，它可以是一个响应式引用（如 ref）或者是一个函数。当数据源发生变化时，watch 会执行一个回调函数。
- watchEffect 会立即执行一个函数，并响应函数内部依赖的所有响应式数据的变化。当任何依赖的数据发生变化时，watchEffect 会再次执行这个函数。

### 以下是一个示例：

```js
import { ref, watch, watchEffect } from 'vue';

export default {
    name: 'WatchAndWatchEffect',
    setup() {
        const count = ref(0);

        watch(count, (newValue, oldValue) => {
            console.log(`watch: count changed from ${oldValue} to ${newValue}`);
        });

        watchEffect(() => {
            console.log(`watchEffect: count is ${count.value}`);
        });

        return {
            count,
        };
    },
};
```

在这个示例中，我们首先定义了一个响应式的变量 count。然后，我们使用 watch 来观察 count 的变化，当 count 变化时，我们会在控制台打印一条消息。接着，我们使用 watchEffect 来观察 count 的变化，当 count 变化时，我们会在控制台打印一条消息。注意，watchEffect 会立即执行一次。

在你的模板中，你可以显示 count 的值，并提供一个按钮来改变 count 的值。