<template>
    <div>
        直播界面
        <videoPlay v-bind="optons"></videoPlay>
    </div>
</template>

<script setup lang="ts">
import "vue3-video-play/dist/style.css";
import { videoPlay } from 'vue3-video-play';
import { reactive } from 'vue'
const optons=reactive({
    width:"100%",
    height:"800px",
    src:"https://media.w3.org/2010/05/sintel/trailer.mp4",
    autoPlay: true,
})
</script>

<style scoped>
</style>