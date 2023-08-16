<style lang="scss" scoped>
.nav-bar {
  background-color: #edefff;
}

.logo {
  background: transparent url('@/assets/images/logo.png') no-repeat scroll 0 0 /
    100% 100%;
}

.logo-text {
  color: #0094dc;
  font-weight: bold;
  letter-spacing: 0.2rem;
}

.links {
  a {
    text-decoration: none;
    color: #333;

    & + a {
      margin-left: 5rem;
    }
  }

  a.disabled {
    color: #999;
  }
}
</style>

<template>
  <div class="nav-bar" h-32 flex justify-between items-center px-16>
    <div
      flex
      justify-center
      items-center
      cursor-pointer
      @click="router.push('/')"
    >
      <div class="logo" w-10 h-10></div>
      <div class="logo-text" ml-3 text-2xl>杭州上城区蓝天救援队</div>
    </div>

    <div class="links">
      <router-link class="nav-link" to="/">首页</router-link>
      <router-link class="nav-link" to="/information">信息公示</router-link>
      <router-link class="nav-link" to="/activity">活动动态</router-link>
      <router-link class="nav-link" to="/join">加入我们</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
