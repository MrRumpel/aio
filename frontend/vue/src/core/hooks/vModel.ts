import { computed } from 'vue';

export default function useVModle<T>(props: T, propName: string, emit: (payload: string, ...args: any[]) => void) {
  return computed({
    get() {
      return new Proxy((props as any)[propName], {
        get(target, key) {
          return Reflect.get(target, key);
        },
        set(target, key, newValue) {
          emit('update:' + propName, {
            ...target,
            [key]: newValue,
          });
          return true;
        },
      });
    },
    set(value) {
      emit('update:' + propName, value);
    },
  });
}
