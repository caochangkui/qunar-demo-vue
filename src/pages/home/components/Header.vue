<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点
    </div>
    <router-link to="/city">
      <div class="header-right">
          {{this.city}}
        <span class="iconfont arrow-icon">&#xe62d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  // 圆形图宽度为750px, 相当于iPhoneX宽度的2倍， 所以在原型图上量的的100px，需要在定义时写成50px；
  // 另，在reset.css中：
  // 1rem = html font-size = 50px;
  // 所以，在原型图上测量为86px时，开发时尺寸定义为0.86rem即可。
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem

</style>
