<style lang="scss" scoped>
.home-container {
  background-color: #edefff;
}

.text {
  .logo-text {
    letter-spacing: 0.5rem;
    opacity: 0.7;
  }

  .slogan {
    letter-spacing: 1rem;
    font-weight: bold;
    opacity: 0.7;
  }

  .desc {
    letter-spacing: 0.2rem;
    line-height: 1.5rem;
    opacity: 0.7;
  }
}

.color-background {
  position: absolute;
  background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  filter: blur(72px);
}

.color-text {
  color: transparent;
  background: -webkit-linear-gradient(-45deg, #666 30%, #333);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px #333;
  opacity: 0.5;
}

.title {
  letter-spacing: 0.1rem;

  &::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    height: 1px;

    background-color: #ababab;
  }
}

.archives {
  width: 100%;
  height: 100%;

  &.image-1 {
    background: transparent url('@/assets/images/archives/1.jpg') no-repeat
      scroll 0 center / 100% auto;
  }

  &.image-2 {
    background: transparent url('@/assets/images/archives/2.jpg') no-repeat
      scroll 0 center / 100% auto;
  }

  &.image-3 {
    background: transparent url('@/assets/images/archives/3.jpg') no-repeat
      scroll 0 center / 100% auto;
  }
}
</style>

<template>
  <div class="home-container" h-126 grid grid-cols-2>
    <div class="text" flex flex-col justify-center items-start px-16>
      <p class="logo-text" text-xl>杭州上城区蓝天救援队</p>
      <p class="slogan" mt-5 text-5xl>专业拯救生命</p>
      <p class="desc" mt-10>
        蓝天救援品牌成立于07年，曾参与汶川、玉树、 雅安
        、云南，菲律宾、缅甸、尼泊尔、斯里兰卡等地救援活动。以专业拯救生命为宗旨，有499支品牌授权队伍，开展防灾减灾、安全教育、演练、保障、打捞、寻人等公益活动，并配合公安消防的任务。
      </p>
    </div>
    <div flex justify-center items-center>
      <div class="color-background" w-72 h-72></div>
      <div class="color-text" text-46>BSR</div>
    </div>
  </div>

  <div mt-10 px-16>
    <div class="title" text-xl>蓝天救援</div>
  </div>

  <div mt-10 px-16 h-96 grid grid-cols-2 gap-5>
    <div>
      <div class="archives image-1" rounded-9></div>
    </div>
    <div flex flex-col justify-between items-center gap-5>
      <div class="archives image-2" rounded-9></div>
      <div class="archives image-3" rounded-9></div>
    </div>
  </div>

  <div h-32></div>
</template>

<script setup lang="ts"></script>
