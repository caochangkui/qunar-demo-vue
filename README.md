# quanr demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


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

