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
                        <a href="/login" class="h">{{user}}</a>
                        <a href="/regist" v-if="!haveinfo">免费注册</a>
                    </div>
                </li>
            </ul>
            <ul class="site-nav-bd-r">
                <li class="menu home">
                    <div class="menu-hd">
                        <a href="/" class="h">首页</a>
                        <a href="/usermess">我的FZU</a>
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
import * as _ from './util/index'
export default {
    data() {
        return {
        }
    },
    name: 'app',
    computed:{
        ...mapState({
            loginInfo: state =>{
                return state.loginInfo
            },
            alertMsg: state => {
                return state.alertMsg 
            },
            haveinfo:state => {
                return state.loginInfo.state 
            },
            user:state => {
                if(state.loginInfo.user){
                    return state.loginInfo.user 
                }
                else{
                    return "亲，请登录"
                }
            },
            ...mapGetters([
                'showAlert'
            ])
        }),
    },
    created:function(){
        if(this.$cookie.get('token')){
            _.loginInfo({
                state:true,
                token:this.$cookie.get('token'),
                user:this.$cookie.get('user')
            })
            this.$axios.defaults.headers = {
                "Content-Type": "application/json;charset=UTF-8",
                "token": this.$cookie.get('token')
            }
        }
    }
}
</script>

<style>
meta{
    content:"width=device-width,initial-scale=1.0";
}
body {
    color: #3C3C3C;
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
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
address, cite, dfn, em, var {
    font-style: normal;
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
