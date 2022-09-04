import axios from 'axios'
const instart = axios.create({
    baseURL: 'https://bijis.oss-cn-chengdu.aliyuncs.com/',
    timeout: 5000,

})

export default instart