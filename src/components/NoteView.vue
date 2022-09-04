<template>
  <div>

    <!-- <pdf src="./static/relativity.pdf"></pdf> -->
    <!-- <VueMarkdown></VueMarkdown> -->
    <Markdown :source="data" quotes> </Markdown>
    <!-- <pdf></pdf> -->
  </div>
</template>

<script setup lang="ts">

import Markdown from 'vue3-markdown-it';
import {  watch, ref } from 'vue';
import { GetHtml } from '../api/makedown'
import { router } from '../router/index'
import { useRoute } from 'vue-router';

const sources: any = useRoute().query.data
const { data } = await GetHtml(sources)





console.log(useRoute().query.data);

const makedowndata = defineProps({
  data: String
});





// import pdf from '@jbtje/vue3pdf'
// import VueMarkdown from 'vue-markdown'


// import pdf from 'vue3-pdf'
</script>

<style scoped>
</style>