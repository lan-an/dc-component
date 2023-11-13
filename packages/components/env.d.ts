declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.png'
declare module 'xlsx'
