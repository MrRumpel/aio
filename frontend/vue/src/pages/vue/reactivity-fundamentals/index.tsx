import { computed, defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'reactivity-fundamentals',
  setup: () => {
    /*  接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value。
        ref 对象是可更改的，也就是说你可以为 .value 赋予新的值。它也是响应式的，即所有对 .value 的操作都将被追踪，并且写操作会触发与之相关的副作用。
        如果将一个对象赋值给 ref，那么这个对象将通过 reactive() 转为具有深层次响应式的对象。这也意味着如果对象中包含了嵌套的 ref，它们将被深层地解包。
        若要避免这种深层次的转换，请使用 shallowRef() 来替代。 */

    // const count = ref(0);

    // console.log(count); // { value: 0 }
    // console.log(count.value); // 0

    // count.value++;
    // console.log(count.value); // 1
    // const count = ref(1);

    /*  computed()
        接受一个 getter 函数，返回一个只读的响应式 ref 对象。
        该 ref 通过 .value 暴露 getter 函数的返回值。
        它也可以接受一个带有 get 和 set 函数的对象来创建一个可写的 ref 对象。 */

    // 创建一个只读的计算属性 ref：
    // const plusOne = computed(() => count.value + 1);

    // console.log(plusOne.value); // 2

    // plusOne.value++; // 错误
    // const obj = reactive({ count: 0 });
    // obj.count++;

    /*  reactive()
        返回一个对象的响应式代理。
        响应式转换是“深层”的：它会影响到所有嵌套的属性。一个响应式对象也将深层地解包任何 ref 属性，同时保持响应性。
        值得注意的是，当访问到某个响应式数组或 Map 这样的原生集合类型中的 ref 元素时，不会执行 ref 的解包。
        若要避免深层响应式转换，只想保留对这个对象顶层次访问的响应性，请使用 shallowReactive() 作替代。
        返回的对象以及其中嵌套的对象都会通过 ES Proxy 包裹，因此不等于源对象，建议只使用响应式代理，避免使用原始对象。 */

    // const count = ref(1);
    // const obj = reactive({ count });

    // // ref 会被解包
    // console.log(obj.count === count.value); // true

    // // 会更新 `obj.count`
    // count.value++;
    // console.log(count.value); // 2
    // console.log(obj.count); // 2

    // // 也会更新 `count` ref
    // obj.count++;
    // console.log(obj.count); // 3
    // console.log(count.value); // 3
    // return { count };

    // 注意当访问到某个响应式数组或 Map 这样的原生集合类型中的 ref 元素时，不会执行 ref 的解包：
    // const books = reactive([ref('Vue 3 Guide')]);
    // // 这里需要 .value
    // console.log(books[0].value);

    // const map = reactive(new Map([['count', ref(0)]]));
    // // 这里需要 .value
    // console.log(map.get('count')?.value);
    // 将一个 ref 赋值给一个 reactive 属性时，该 ref 会被自动解包：
    // const count = ref(1);
    // const obj = reactive({});

    // obj.count = count;

    // console.log(obj.count); // 1
    // console.log(obj.count === count.value); // true
  },
  render() {
    return <div>深入组合式api</div>;
  },
});
