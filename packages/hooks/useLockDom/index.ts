import { onMounted, onUnmounted, ref, watch, watchEffect } from 'vue';
const UNCODE_ID = Date.now();

export const useLockDom = (flag) => {
  const style = ref<HTMLStyleElement>();
  const dom = document.createElement('style');
  dom.type = 'text/css';

  dom.id = `${UNCODE_ID}`;
  dom.innerHTML = `html body{ overflow-y:hidden;width: calc(100% - 17px); }`;

  const dombak = document.getElementById(`${UNCODE_ID}`);
  const value =
    document.documentElement.scrollHeight >
    (window.innerHeight || document.documentElement.clientHeight);
  let timer = null;
  watchEffect(() => {
    if (flag && value) {
      document?.getElementsByTagName('head')[0].appendChild(dom);
    } else {
      timer = setTimeout(() => {
        if (dombak) {
          document?.getElementsByTagName('head').item(0)?.removeChild(dombak);
        }
      }, 100);
    }
  });
  onUnmounted(() => {
    clearTimeout(timer);
  });
  return dom;
};
