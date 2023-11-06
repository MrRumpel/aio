```js
// var的作用域是函数作用域
function testVar() {
  if (true) {
    var x = 'var在函数作用域内可见';
  }
  console.log(x); // 输出: "var在函数作用域内可见"
}
testVar();
console.log(typeof x); // 输出: "undefined"

// let和const的作用域是块级作用域
function testLetAndConst() {
  if (true) {
    let y = 'let只在块级作用域内可见';
    const z = 'const只在块级作用域内可见';
  }
  console.log(typeof y); // 输出: "undefined"
  console.log(typeof z); // 输出: "undefined"
}
testLetAndConst();

// const定义的变量不能重新赋值
const a = '我是const变量';
a = '试图重新赋值'; // 报错: "Assignment to constant variable."
```
