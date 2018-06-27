### 移动端开发通用文件
 reset.css
 border.css  ————> 移动端1像素边框问题的解决方案

### 移动端better-scroll使用
https://www.npmjs.com/package/better-scroll
#### 安装：
    npm install better-scroll --save
#### 引入：
    import Bscroll from 'better-scroll'
#### 使用案例：
```
<template>
  <div class="list" ref="wrapper">
    <div>
        需要滚动的部分
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
</style>
```


## 对全局事件的解绑
    对Window绑定全局事件时，需要及时解绑
```
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }

```
```
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
```


