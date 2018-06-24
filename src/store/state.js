let defaultCity = '上海'
// 为防止用户关闭了浏览器的localstorage功能，或者使用了隐身模式而报错，可以使用以下方式
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
