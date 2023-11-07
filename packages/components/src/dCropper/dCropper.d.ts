/*
 * @Date: 2023-11-06 14:20:54
 * @Author: liu-hongrui
 * @LastEditors: liu-hongrui
 * @LastEditTime: 2023-11-07 11:24:14
 * @FilePath: \dc-component\packages\components\src\dCropper\dCropper.d.ts
 */

export type Options = {
  img: string | ArrayBuffer | null // 裁剪图片的地址
  info: true // 裁剪框的大小信息
  outputSize: number // 裁剪生成图片的质量 [1至0.1]
  outputType: string // 裁剪生成图片的格式
  canScale: boolean // 图片是否允许滚轮缩放
  autoCrop: boolean // 是否默认生成截图框
  autoCropWidth: number // 默认生成截图框宽度
  autoCropHeight: number // 默认生成截图框高度
  fixedBox: boolean // 固定截图框大小 不允许改变
  fixed: boolean // 是否开启截图框宽高固定比例
  fixedNumber: Array<number> // 截图框的宽高比例  需要配合centerBox一起使用才能生效
  full: boolean // 是否输出原图比例的截图
  canMoveBox: boolean // 截图框能否拖动
  original: boolean // 上传图片按照原始比例渲染
  centerBox: boolean // 截图框是否被限制在图片里面
  infoTrue: boolean // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
  accept: string // 上传允许的格式
}
export type IProps = {
  allowTypeList?: string[] // 接收允许上传的图片类型
  limitSize?: number // 限制大小
  fixedNumber?: number[] // 截图框的宽高比例
  previewWidth?: '100' | '150' | '200' | '250' | '300' // 预览宽度
  title?: string // 裁剪标题
  type?: string // 返回的文件类型 Base64  Blob  file对象
}
// 预览样式
export type IStyle = {
  width: number | string,
  height: number | string
}
