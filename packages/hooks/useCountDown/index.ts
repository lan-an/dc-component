/*
 * @Date: 2023-11-13 09:26:26
 * @Author: liu-hongrui
 * @LastEditors: liu-hongrui
 * @LastEditTime: 2023-11-13 09:32:56
 * @FilePath: \dc-component\packages\hooks\useCountDown\index.ts
 */

/**
 *  倒计时
 *  @param {Number} second 倒计时秒数
 *  @return {Number} count 倒计时秒数
 *  @return {Function} countDown 倒计时函数
 *  @example
 *  const { count, countDown } = useCountDown()
 *  countDown(60)
 * <div>{{ count }}</div>
 */
import { ref, onBeforeMount } from 'vue';
export function useCountDown() {
	const count = ref<number>(0);
	const timer = ref<NodeJS.Timeout | null>(null);
	const countDown = (second: number, ck: Function) => {
		if (count.value === 0 && timer.value === null) {
			ck();
			count.value = second;
			timer.value = setInterval(() => {
				count.value--;
				if (count.value === 0) clearInterval(timer.value);
			}, 1000);
		}
	};

	onBeforeMount(() => {
		timer.value && clearInterval(timer.value);
	});

	return {
		count,
		countDown,
	};
}