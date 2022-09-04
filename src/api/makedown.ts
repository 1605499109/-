import axios from '../utils/request'
export const GetHtml=(type:string)=>axios.get(`${type}.md`)
