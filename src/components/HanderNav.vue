<template>
    <div class="nav">
        <ul>
            <li @click="handerHtml">html</li>
            <li @click="handerJs"> js</li>
            <li>vue</li>
            <li @click="handerReact">react</li>
            <li @click="handerNginx">nginx</li>
        </ul>
    </div>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { router } from '../router/index'
const handerHtml = () => {
    router.push({ name: 'makedown', query: { data: 'html' } })
}
const handerJs = () => {
    router.push({ name: 'makedown', query: { data: 'js' } })
}
const handerReact = () => {
    router.push({ name: 'makedown', query: { data: 'react ' } })
}
const handerNginx = () => {
    router.push({ name: 'makedown', query: { data: 'ngix' } })
}
</script>

<style scoped>
.nav {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

ul {
    display: flex;
    width: 400px;
    justify-content: space-around;
}

ul li {
    cursor: cell;
}
</style>