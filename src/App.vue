<template>
  <div id="app">
    <el-alert
    type="warning"
    center
    show-icon
    title="警告"
    v-show="showAlert">
    {{alertMsg}}
    </el-alert>
    <div class="site-nav">
        <div class="site-nav-bd">
            <ul class="site-nav-bd-l">
                <li class="menu">
                    <div class="menu-hd">
                        <a href="/login" class="h">亲，请登录</a>
                        <a href="/regist">免费注册</a>
                    </div>
                </li>
            </ul>
            <ul class="site-nav-bd-r">
                <li class="menu home">
                    <div class="menu-hd">
                        <a href="/" class="h">首页</a>
                        <a href=""></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  name: 'app',
  computed:mapState({
    alertMsg: state => {
        return state.alertMsg 
    },
    ...mapGetters([
          'showAlert'
      ])
  })
}
</script>

<style>
meta{
  content:"width=device-width,initial-scale=1.0";
}
body {
    color: #3C3C3C;
    -webkit-font-smoothing: antialiased;
    background-color: #f4f4f4;
}
blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
}
ol, ul {
    list-style: none;
}
a {
    cursor: pointer;
    text-decoration: none;
}
fieldset, img {
    border: 0;
}
@media screen and (max-width: 1200px){
    .site-nav .site-nav-bd {
    width: 990px;
    margin: 0 auto;
}
}
.site-nav .site-nav-bd .site-nav-bd-l, .site-nav .site-nav-bd .site-nav-bd-l .menu, .site-nav .site-nav-bd .site-nav-bd-r .menu {
    float: left;
}
.site-nav {
    width: 100%;
    background: #F5F5F5;
    border-bottom: 1px solid #EEE;
    height: 35px;
}
.site-nav-bd {
    width: 1190px;
    margin: 0 auto;
}
.site-nav-bd .menu .menu-hd {
    position: relative;
    padding: 0 6px;
    height: 35px;
    line-height: 35px;
}
.site-nav-bd .menu .menu-hd a {
    float: left;
    margin-right: 7px;
    font-size: 12px;
    color: #6C6C6C;
}
.site-nav-bd .h {
    color: #F22E00!important;
}
.site-nav .site-nav-bd .site-nav-bd-r {
    float: right;
}
</style>
