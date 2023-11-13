# Promise

Promise 是 JavaScript 中处理异步操作的一种对象。它有三种状态：pending（等待）、fulfilled（完成）、rejected（拒绝）。

- resolve 是一个函数，当异步操作成功时，我们调用 resolve 并传入结果，这会使 Promise 变为 fulfilled 状态。

- reject 是一个函数，当异步操作失败时，我们调用 reject 并传入错误，这会使 Promise 变为 rejected 状态。

- then 是 Promise 的一个方法，它接受两个参数：一个是 Promise fulfilled 时的回调，另一个是 Promise rejected 时的回调。

- catch 是 Promise 的一个方法，它接受一个参数：Promise rejected 时的回调。

Promise 可以链式调用，这是因为 then 和 catch 方法都会返回一个新的 Promise。

以下是一个使用 Promise 的示例：

```js
new Promise((resolve, reject) => {
    const data = fetchDataFromAPI();  // 假设这是一个异步操作
    if (data) {
        resolve(data);
    } else {
        reject('Error: Failed to fetch data');
    }
})
.then(data => {
    console.log('Data:', data);
})
.catch(error => {
    console.error(error);
});
```

在这个示例中，我们创建了一个新的 Promise。在 Promise 的执行器函数中，我们尝试获取数据。如果获取成功，我们调用 resolve 并传入数据；如果获取失败，我们调用 reject 并传入错误。然后，我们使用 then 来处理数据，使用 catch 来处理错误。

## Promise 原型上的方法还包括 finally、all、race、allSettled 等

- finally：这个方法注册一个回调函数，该函数在 Promise 完成（无论是 fulfilled 还是 rejected）后都会被调用。它常常被用于执行一些清理操作，如关闭数据库连接、清除定时器等。

```js
fetch('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Operation finished'));
```

- all：这个方法接受一个 Promise 对象的数组作为参数，当数组中所有的 Promise 对象都变为 fulfilled 状态时，返回一个新的 Promise 对象，它的状态为 fulfilled，结果是一个数组，包含所有 Promise 的结果。如果有一个 Promise 变为 rejected 状态，返回的 Promise 的状态也会变为 rejected。

```js
Promise.all([fetch('https://api.example.com/data1'), fetch('https://api.example.com/data2')])
    .then(([data1, data2]) => console.log(data1, data2))
    .catch(error => console.error(error));
```

- race：这个方法也接受一个 Promise 对象的数组作为参数，但它返回一个新的 Promise 对象，这个 Promise 的状态和结果由第一个 settled 的 Promise 决定。

```js
Promise.race([fetch('https://api.example.com/data1'), fetch('https://api.example.com/data2')])
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

- allSettled：这个方法也接受一个 Promise 对象的数组作为参数，但无论数组中的 Promise 是否成功，它都会等待所有的 Promise 完成，然后返回一个新的 Promise，这个 Promise 的状态总是 fulfilled，结果是一个数组，包含所有 Promise 的状态和结果。

```js
Promise.allSettled([fetch('https://api.example.com/data1'), fetch('https://api.example.com/data2')])
    .then(results => console.log(results));
```

在这个示例中，results 是一个数组，每个元素是一个对象，包含 status（'fulfilled' 或 'rejected'）和 value（如果状态是 'fulfilled'）或 reason（如果状态是 'rejected'）。

- Promise.any(): 这个方法接受一个 Promise 对象的数组作为参数，返回一个新的 Promise 对象，这个 Promise 的状态和结果由第一个 fulfilled 的 Promise 决定。如果所有的 Promise 都被拒绝，返回的 Promise 的状态会变为 rejected，错误是一个 AggregateError，包含所有 Promise 的错误。

```js
Promise.any([fetch('https://api.example.com/data1'), fetch('https://api.example.com/data2')])
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

- Promise.try(): 这个方法并不是 ECMAScript 规范的一部分，但在一些库（如 bluebird）中存在。它接受一个函数作为参数，返回一个新的 Promise 对象。这个 Promise 的状态和结果由函数的执行结果决定。如果函数抛出错误，返回的 Promise 的状态会变为 rejected。

```js
const Promise = require('bluebird');

Promise.try(() => {
    return fetchDataFromAPI();  // 假设这是一个异步操作
})
.then(data => console.log(data))
.catch(error => console.error(error));
```

在这个示例中，我们使用 bluebird 库的 Promise.try 方法。我们传入一个函数，这个函数返回从 API 获取的数据。如果函数成功执行，返回的 Promise 的状态会变为 fulfilled，结果是函数的返回值。如果函数抛出错误，返回的 Promise 的状态会变为 rejected，错误是抛出的错误。
