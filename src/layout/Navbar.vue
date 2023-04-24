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
}
</style>

<template>
  <div class="nav-bar" h-32 flex justify-between items-center px-16>
    <div flex justify-center items-center>
      <div class="logo" w-10 h-10></div>
      <div class="logo-text" ml-3 text-2xl>杭州上城区蓝天救援队</div>
    </div>

    <div class="links">
      <router-link class="nav-link" to="/">首页</router-link>
      <router-link class="nav-link" to="/">蓝天救援</router-link>
      <router-link class="nav-link" to="/">关于我们</router-link>
      <router-link class="nav-link" to="/">联系我们</router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
