import MarkdownPreviewWithRoute from '@/components/shared/md';
import { Button, Typography } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    function greet(this: { name: string }, greeting: string, punctuation: string) {
      return `${greeting}, ${this.name}${punctuation}`;
    }
    const obj = { name: 'Vue 3' };
    const boundGreet = greet.bind(obj, 'Hello', '!');
    const greetApply = () => console.log(greet.apply(obj, ['Hello', '!']));
    const greetCall = () => console.log(greet.call(obj, 'Hello', '!'));
    const greetBind = () => console.log(boundGreet());
    return () => (
      <div>
        <div>
          <Typography.Title level={3}>Apply, Call 和 Bind 区别</Typography.Title>
          <Typography.Paragraph>
            apply、call 和 bind 都是 JavaScript 中的函数方法，它们都可以用来改变函数中 this
            的指向，但它们在使用方式和使用场景上有一些区别。
          </Typography.Paragraph>
          <Typography.Paragraph>
            apply：apply 方法接受两个参数：一个是你想要设置的 this
            的值，另一个是一个数组，这个数组的元素将作为参数传递给函数。apply 会立即调用函数。
          </Typography.Paragraph>
          <Typography.Paragraph>
            call：call 方法的工作方式类似于 apply，但它接受的是一个参数列表，而不是一个参数数组。call 也会立即调用函数。
          </Typography.Paragraph>
          <Typography.Paragraph>
            bind：bind 方法创建一个新的函数，这个函数的 this 值被设置为 bind
            的第一个参数，其余的参数将作为新函数的参数。与 apply 和 call 不同，bind 不会立即调用函数，而是返回新的函数。
          </Typography.Paragraph>
          <Typography.Paragraph>
            打开console，演示以下效果
          </Typography.Paragraph>
          <Button onClick={greetApply}>执行apply</Button>
          <Button onClick={greetCall}>执行call</Button>
          <Button onClick={greetBind}>执行bind</Button>
        </div>
        <MarkdownPreviewWithRoute />
      </div>
    );
  },
});
