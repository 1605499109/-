import axios from '../utils/request'
export const Getpdf=(type:string)=>axios.get(`${type}.pdf`)
