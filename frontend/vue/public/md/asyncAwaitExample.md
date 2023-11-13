# Async/Await 例子

async/await 是 JavaScript 中处理异步操作的一种方式。它是基于 Promise 的，但提供了一种更直观、更易于理解的语法。

- async 关键字用于声明一个异步函数。在异步函数中，你可以使用 await 关键字来等待 Promise 的结果。

- await 关键字只能在 async 函数中使用。它会暂停代码的执行，直到 Promise 完成并返回结果。如果 Promise 被拒绝，await 会抛出错误。

## 以下是一个使用 async/await 的示例：

```js
async function fetchData() {
    try {
        const response = await fetch('/md/asyncAwaitExample.md');
        const data = await response.text();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
```
在这个示例中，我们定义了一个异步函数 fetchData。在这个函数中，我们使用 await 来等待 fetch 和 response.json() 的结果。如果这些 Promise 被拒绝，await 会抛出错误，我们可以使用 try/catch 来捕获这些错误。

本项目的markdown文本也是通过此方法异步加载显示的。