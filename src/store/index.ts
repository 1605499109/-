//引入pinia
import { defineStore } from 'pinia'

export const useStore = defineStore(
    //第一个参数唯一的id
    //
    'cou', {
    //state数据
    state: () => ({ count: 0 }),
    //操作的函数
    actions: {
        countadd() {
            this.count++
        }
    }
}
)