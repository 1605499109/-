<template>
  
    <VuePdf :src="pdfSrc"></VuePdf>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VuePdf } from 'vue3-pdfjs/esm';
import { VuePdfPropsType } from 'vue3-pdfjs/components/vue-pdf/vue-pdf-props'
import { useRoute } from 'vue-router'

console.log(useRoute().params);


const pdfSrc = `https://bijis.oss-cn-chengdu.aliyuncs.com/${useRoute().params.value}.pdf`
</script>

<style scoped>
</style>