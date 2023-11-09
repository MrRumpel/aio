```js
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const obj = { name: 'Vue 3' };

console.log(greet.apply(obj, ['Hello', '!'])); // "Hello, Vue 3!"
console.log(greet.call(obj, 'Hello', '!')); // "Hello, Vue 3!"

const boundGreet = greet.bind(obj, 'Hello', '!');
console.log(boundGreet()); // "Hello, Vue 3!"
```