/*
 * @Date: 2023-11-02 15:39:36
 * @Author: liu-hongrui
 * @LastEditors: liu-hongrui
 * @LastEditTime: 2023-11-03 10:43:25
 * @FilePath: \dc-component\packages\components\src\dModal\dModal.d.ts
 */
export type IProps = {
    visible: boolean;
    title: string;
    fullscreen?: boolean; //是否为全屏
    width: string | number;
    top?: string; //margin-top
    customClass?: string; //自定义类名
    draggable?: boolean; // 是否拖拽
    center?: boolean; // 是否居中
    alignCenter?: boolean; // 是否水平垂直对齐对话框
    destroyOnClose?: boolean; //关闭时，销毁其中的元素
    opendelay?: number; // 打开延迟 毫秒
    closedelay?: number; //关闭延迟 毫秒
    closeonclickmodal?: boolean; //是否可以通过点击 modal 关闭
    closeonpressescape?:boolean; //是否可以通过按下 ESC 关闭
    beforeClose?: () => void; //关闭前的回调
    open?:()=> void;
    close: () => void;
}