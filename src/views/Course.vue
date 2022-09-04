<template>
    <div>

        <!-- <PDFvue ></PDFvue> -->
        <el-dropdown>
            <span class="el-dropdown-link">
                教程
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="onck('Map')">map</el-dropdown-item>
                    <el-dropdown-item @click="onck('axios')">axios</el-dropdown-item>
                    <el-dropdown-item @click="onck('fromData')">fromdata</el-dropdown-item>
                    <el-dropdown-item @click="onck('js同步异步')">js同步异步</el-dropdown-item>
                    <el-dropdown-item @click="onck('less%20sass')">less/sass</el-dropdown-item>
                    <el-dropdown-item @click="onck('元素偏移')">元素偏移</el-dropdown-item>
                    <el-dropdown-item @click="onck('包管理')">包管理</el-dropdown-item>
                    <el-dropdown-item @click="onck('拓展语法')">拓展语法</el-dropdown-item>
                    <el-dropdown-item @click="onck('浏览器存储数据')">浏览器存储数据</el-dropdown-item>
                    <el-dropdown-item @click="onck('身份认证')">身份认证</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <el-empty description="description" v-if="!isstatus.status" />
        <router-view></router-view>


        <!-- <VuePdf :src="pdfSrc" page v-if="isstatus.status"></VuePdf> -->

    </div>
</template>

<script setup lang="ts">
import { pushScopeId, reactive, ref, watch } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import { Getpdf } from '@/api/GetPDF'
import { Router } from 'vue-router'
import { router } from '@/router';
// import { map, values } from 'lodash';
// import  PDFvue  from  'vue3-pdf'
const isstatus = reactive({
    status: false
})
let pdfSrc = ref('')
// https://bijis.oss-cn-chengdu.aliyuncs.com/axios.pdf
// let pdfSrc = ref<any>('https://bijis.oss-cn-chengdu.aliyuncs.com/Map.pdf')

const onck = (value: string) => {
    console.log(value);

    router.push({ name: 'pdfview', params: { value } })


    // //发送异步请求请求数据
    // const { data, status } = await Getpdf(value)
    // if (status === 200) {
    // pdfSrc.value = `https://bijis.oss-cn-chengdu.aliyuncs.com/${value}.pdf`
    // isstatus.status = true
    // }
    isstatus.status = true

}
watch(pdfSrc, (a, b) => {
    console.log(a, b);

})
</script>

<style scoped>
.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
</style>