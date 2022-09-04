<template>
    <div class="header">
        <h1>login</h1>
        <div>
            <ul>
                <li>
                    <router-link to="/note"> 笔记</router-link>
                </li>
                <li>
                    <router-link to="/course">教程</router-link>
                </li>
                <li>
                    <router-link to="/linux">Linux</router-link>
                </li>
                <li>
                    <router-link to="/servers">servers</router-link>

                </li>
                <li>
                   
                    <router-link to="/liveBroadcast">直播</router-link>
                </li>
            </ul>
        </div>
        <div>
            <el-button>登录</el-button> /<el-button>注册</el-button>
        </div>

    </div>
</template>

<script setup lang="ts">


</script>

<style  scoped>
.header {
    width: 100%;
    height: 60px;
    border: 1px solid #000;
    display: flex;
    justify-content: space-around;
    color: #fff;
    background-color: rgb(32, 35, 42);
    align-items: center;
}

.header ul {
    width: 200px;
    display: flex;
    justify-content: space-around;
    list-style: none;
}
</style>