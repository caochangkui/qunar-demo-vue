<template>
  <ul class="list">
    <li class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timeer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // A字母距离滚动条顶部距离
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timeer) {
          clearTimeout(this.timeer)
        }
        this.timeer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 // 手指触摸当前位置距离视口顶部的距离减去79（79指顶部加上搜索框的距离）
          const index = Math.floor((touchY - this.startY) / 18) // 手指触摸当前位置所在的字母索引
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    align-items center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
      line-height .36rem
      color $bgColor

</style>
