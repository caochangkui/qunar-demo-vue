<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, index) in cities"
        :key="index"
        :ref="index"
      >
        <div class="title border-topbottom">{{index}}</div>
        <div
          class="item-list"
          v-for="innerItem in item"
          :key=innerItem.id
          @click="handleCityClick(innerItem.name)"
          >
          <div class="item border-bottom"> {{innerItem.name}} </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    // 监听 Alphabet 中传过来的letter，如有变化，则滚动区域自动滚动到对应元素上
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0] // 获取对应字母的ref
        this.scroll.scrollToElement(element) // 利用better-scroll插件 滚动到指定元素element
      }
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city) // 将参数city传给vuex中的mutations中的changeCity函数
      this.changeCity(city)
      this.$router.push('/') // 页面跳转 参考：https://router.vuejs.org/zh/guide/essentials/navigation.html
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom // 参考1像素解决方案
    &:before
      border-color #cccccc
    &:after
      border-color #cccccc
  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
        line-height: .54rem
        background: #eee
        padding-left: .2rem
        color: #666
        font-size: .26rem
      .button-list
        overflow: hidden
        padding: .1rem .6rem .1rem .1rem
        .button-wrapper
          float: left
          width: 33.33%
          .button
            margin: .1rem
            padding: .1rem 0
            text-align: center
            border: .02rem solid #ccc
            border-radius: .06rem
      .item-list
        .item
          line-height .76rem
          padding-left .2rem

</style>
