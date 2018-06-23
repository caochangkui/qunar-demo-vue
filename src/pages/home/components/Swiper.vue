<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
        <swiper-slide v-for="item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 图片下方小原点
        loop: true // 轮播循环
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active // 样式穿透，不受scoped限制
    background: #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    background #eee
    padding-bottom 24.53%
    .swiper-img
      width 100%
</style>
