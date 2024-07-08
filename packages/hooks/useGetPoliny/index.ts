/*
 * @Date: 2024-07-04 15:21:39
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2024-07-04 15:23:08
 * @FilePath: \dc-component\packages\hooks\useGetPoliny\index.ts
 */
import axios from 'axios';
import { ref } from 'vue';

export const useGetPolyline = (pathPointArray, map) => {
  const polyline = ref([]);
  const polylineArr = [];
  if (pathPointArray.length < 17) {
    pathPointArray.forEach((item) => {
      polylineArr.push(item);
    });
  } else {
    const count = Math.floor(pathPointArray.length / 17);
    for (let a = 1; a <= 16; a++) {
      polylineArr.push(pathPointArray[a * count]);
    }
  }
  axios
    .get(
      `https://restapi.amap.com/v3/direction/driving?origin=${
        pathPointArray[0]
      }&destination=${
        pathPointArray[pathPointArray.length - 1]
      }&waypoints=${polylineArr.join(
        ';',
      )}&extensions=all&output=json&key=3a3aeee9d5516c964aff56bc2a0b00c7`,
    )
    .then((res) => {
      const steps = res.data.route.paths[0].steps;
      for (let i = 0; i < steps.length; i++) {
        const data = steps[i].polyline.split(';');
        data.forEach((item) => {
          polyline.value.push([
            Number(item.split(',')[0]),
            Number(item.split(',')[1]),
          ]);
        });
      }
    });
  return {
    polyline,
  };
};
