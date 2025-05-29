/**
 * 防抖函数
 * @param fn 要执行的函数
 * @param delay 延迟时间（毫秒）
 * @param immediate 是否立即执行（默认 false）
 * @returns 防抖后的函数
 */
export function debounce<F extends (...args: any[]) => any>(
  fn: F,
  delay: number,
  immediate: boolean = false
): (...args: Parameters<F>) => ReturnType<F> | void {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    // 保存当前上下文（解决 this 指向问题）
    const context = this;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    if (immediate) {
      // 立即执行模式：首次调用时立即执行，后续触发重新计时
      const callNow = timer === null;
      timer = setTimeout(() => {
        timer = null; // 延迟结束后重置定时器
      }, delay);
      if (callNow) {
        return fn.apply(context, args); // 立即执行函数并返回结果
      }
    } else {
      // 非立即执行模式：延迟结束后执行
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
  };
}
