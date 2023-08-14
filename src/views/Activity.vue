<style lang="scss">
.activity-list {
  .activity-item {
    cursor: pointer;

    & + .activity-item {
      border-top: 1px dashed #efefef;
    }
  }
}
</style>

<template>
  <div w-full bg-white rounded-3 px-5 py-3 shadow-lg class="activity-list">
    <div v-for="item in list" :key="item.title" class="activity-item">
      <div @click="toUrl(item.url)" flex justify-between items-center py-2>
        <span ml-1>{{ item.title }}</span>
        <span text-gray>{{ item.date }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const list = [
  {
    title: '“筑牢防火墙，护航亚运会”森林消防课题演练',
    url: 'https://mp.weixin.qq.com/s/dr_4UQLlPXILCP0PZ_GpqA',
    date: '2023-06-08 21:12'
  },
  {
    title: '热烈庆祝共青团杭州上城区蓝天救援队支部委员会成立',
    url: 'https://mp.weixin.qq.com/s/rWnf4pG8wKe1TbcZdNnZDQ',
    date: '2023-05-16 19:48'
  },
  {
    title: '5.12全国防灾减灾日',
    url: 'https://mp.weixin.qq.com/s/A3jD6Mk1WMYiEux-YT8iYA',
    date: '2023-05-13 13:58'
  },
  {
    title: '西施音乐节圆满落幕',
    url: 'https://mp.weixin.qq.com/s/E2Iqd2Dy0vpqykUaVTiyiw',
    date: '2023-04-16 17:31'
  },
  {
    title: '防震减灾，平安常在',
    url: 'https://mp.weixin.qq.com/s/Cl6SEX2izuItoCsH5vEseQ',
    date: '2023-04-04 13:29'
  }
]

const toUrl = (url: string) => {
  window.open(url)
}
</script>
