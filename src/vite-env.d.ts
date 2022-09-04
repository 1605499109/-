/// <reference types="vite/client" />
///<reference types="node" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vue3-markdown-it' {

}

declare module 'vue3-video-play'
declare module 'vue-pdf'
declare module 'vue3-pdf'
declare module 'vue3-pdfjs/esm'
declare module "libname" {
  // Types inside here
  export function helloWorldMessage(): string
}
