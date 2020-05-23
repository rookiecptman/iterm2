<template>
    <div>
        <header class="mt-header">
            <article>
                <div class="mt-logo">
                    <img src="../assets/userlogo.png" alt="我的FZU" class="mt-tblogo">
                </div>
                <nav class="mt-nav">
                    <ul id="j-mtmainnav">
                        <li class="selected">
                            <a href="/user">首页</a>
                        </li>
                        <li class="j-mtnavsubtrigger">
                            <a href="/">账户设置</a>
                        </li>
                    </ul>
                </nav>
            </article>
        </header>
        <div id="layout-center">
            <div class="grid-c2">
                <div id="j-col-main" class="col-main">
                    <div class="main-wrap">
                        <div class="mt-ml-c1">
                            <div class="mt-ml-shim">
                                <div class="m-userinfo">
                                    <div class="s-userbar s-bar">
                                        <div class="s-baseinfo">
                                            <img src="../assets/avatar.png" alt="" class="s-avatar">
                                            <div class="s-name">
                                                <span>{{this.userinfo.user}}</span>
                                            </div>
                                        </div>
                                        <ul class="s-my-stuffs">
                                            <li ><a href="">我的收货地址</a></li>
                                            <li ><a href="">我的优惠信息</a></li>
                                            <li ><a href="">我的支付宝</a></li>
                                        </ul>
                                    </div>
                                    <div class="s-my-counts s-content">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <span>待付款</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span>待发货</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span>待收货</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span>待评价</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span>退款</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="m-logistics g-box-base g-mb-set">
                                    <div class="s-bar">我的物流</div>
                                    <div class="s-content"></div>
                                </div>
                                <div class="m-guess-you-like">
                                    <div class="s-bar">根据浏览，猜我喜欢
                                        <a href="">换一组</a>
                                    </div>
                                    <div class="s-content">
                                        <div class="s-inner-content">
                                            <div class="s-item-list clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-ml-c2">
                            <div></div>
                        </div>
                    </div>
                </div>
                <section id="j-col-sub" class="col-sub">
                    <aside class="mt-menu" id="j-mtsidemenu">
                        <div class="mt-menu-tree">
                            <dl class="mt-menu-item">
                                <dt>全部功能</dt>
                                <dd><a href="/shoppingcar">我的购物车</a></dd>
                                <dd><a href="">已买的宝贝</a></dd>
                                <dd><a href="/collectstore">我的收藏</a></dd>
                                <dd><a href="">购买过的店铺</a></dd>
                                <dd v-if="userinfo.ismerchant"><a href="" @click="toShop(userinfo.merchant)">我的店铺</a></dd>
                                <dd v-if="userinfo.ismerchant"><a href="/uploadstore">上架商品</a></dd>
                            </dl>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    </div>
</template>
<style>
.mt-header {
    height: 36px;
    background: #ff4401;
    padding: 12px 0;
    position: relative;
    z-index: 5;
    border-bottom: 1px #e7e7e7 solid;
}
.mt-header article {
    width: 1190px;
    margin: 0 auto;
}
.mt-logo {
    float: left;
    position: relative;
    overflow: hidden;
    width: 16%;
    height: 35px;
}
.mt-logo .mt-tblogo {
    width: 140px;
    height: 36px;
    display: inline-block;
    vertical-align: middle;
}
.mt-nav {
    float: right;
    width: 82.4%;
}
.mt-nav li {
    position: relative;
    float: left;
    cursor: pointer;
    z-index: 1;
    height: 50px;
    font: 400 14px/36px;
    line-height: 36px;
}
.mt-nav li a:link, .mt-nav li a:visited {
    text-decoration: none;
    display: block;
    text-align: center;
    padding: 0 25px;
    color: #fff;
}
#layout-center {
    width: 1180px;
    position: relative;
    left: 2px;
    margin: 0 auto;
}
.grid-c2 {
    width: 100%;
    height: 100%;
    top: -2px;
    position: relative;
    clear: both;
}
.col-main {
    min-height: 1px;
    float: left;
    width: 100%;
    padding-top: 25px;
    padding-bottom: 40px;
}
.main-wrap {
    position: relative;
    margin-left: 120px;
    padding-right: 1px;
    padding-bottom: 1px;
    min-height: 1px;
}
.mt-ml-c1 .mt-ml-shim {
    margin-bottom: -26px;
    margin-left: 10px;
    width: 726px;
}
.m-userinfo {
    border: 1px solid #e4eaee;
    margin-bottom: 23px;
    font-size: 12px;
    color: #4b4b4b;
    position: relative;
    z-index: 3;
    overflow: hidden;
}
.m-userinfo .s-userbar {
    padding: 5px 0;
    position: relative;
    padding-top: 10px;
}
.m-userinfo .s-bar {
    vertical-align: middle;
    color: #546d7e;
    border-bottom: 1px solid #e4eaee;
    line-height: 23px;
    overflow: hidden;
}
.m-userinfo .s-baseinfo {
    float: left;
    width: 39%;
}
.m-userinfo .s-avatar {
    float: left;
    display: block;
    width: 52px;
    height: 52px;
    margin-right: 13px;
    margin-left: 12px;
    position: relative;
    border: 2px solid #FFF;
    border-radius: 50%;
    overflow: hidden;
}
.m-userinfo .s-name {
    margin-top: 6px;
    display: block;
    color: #000;
}
.m-userinfo .s-my-stuffs {
    float: right;
    width: 61%;
    margin-right: -1px;
    margin-top: 9px;
}
.m-userinfo .s-my-stuffs>li {
    width: 33%;
    float: right;
}
.m-userinfo .s-my-stuffs li a{
    zoom: 1;
    cursor: pointer;
    position: relative;
    z-index: 2;
    display: block;
    padding: 10px 0;
    color: #546d7e;
    text-align: center;
}
.m-userinfo .s-my-counts {
    overflow: hidden;
}
.m-userinfo .s-my-counts ul {
    height: 52px;
    overflow: hidden;
}
.m-userinfo .s-my-counts li {
    width: 20%;
    float: left;
}
.m-userinfo .s-my-counts a {
    zoom: 1;
    padding: 17px 0;
    display: block;
    color: #4b4b4b;
    text-align: center;
}
.m-userinfo .s-my-counts span {
    margin-left: -1px;
    height: 18px;
    line-height: 18px;
    display: block;
    border-left: 1px solid #e4eaee;
}
.m-logistics {
    border: 0;
    position: relative;
    z-index: 2;
    margin-bottom: 23px;
}
.g-box-base {
    font-size: 12px;
    color: #4b4b4b;
}
.m-logistics .s-bar {
    border: 1px solid #e4eaee;
    padding-left: 48px;
}
.g-box-base .s-bar {
    vertical-align: middle;
    font-size: 15px;
    color: #546d7e;
    padding: 10px;
    background: #f5f8fa;
    line-height: 23px;
    padding-top: 11px;
    padding-bottom: 8px;
}
.m-guess-you-like {
    font-size: 14px;
    color: #4b4b4b;
}
.m-guess-you-like .s-bar {
    color: #fff;
    background: #a0cdeb;
    border: #a0cdeb;
    border-top: #e4eaee;
    font-size: 18px;
    line-height: 18px;
    padding: 11px 10px;
    position: relative;
}
.m-guess-you-like a{
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 3px 12px;
    margin-top: -3px;
    height: 20px;
    background: #fff;
    font-size: 14px;
    line-height: 20px;
    color: #4b4b4b;
}
.m-guess-you-like .s-content {
    border: 1px solid #e4eaee;
    border-top: 0;
    background-color: #f5f8fa;
    padding: 26px 0 0;
}
.m-guess-you-like .s-content .s-inner-content {
    margin: 0 8px;
}
.grid-c2 .col-sub {
    width: 110px;
    overflow: hidden;
    float: left;
    margin-left: -100%;
    min-height: 1px;
    padding-top: 25px;
}
.grid-c2 .col-sub .mt-menu {
    width: 110px;
}
.mt-menu-tree {
    overflow: inherit;
    margin-top: -5px;
    font-size: 12px;
    padding-left: 3px;
}
.mt-menu-tree dt {
    font-size: 15px;
    line-height: 28px;
    margin: 5px 10px 1px 0;
    color: #f40;
}
.mt-menu-tree dd {
    list-style: none;
}
.mt-menu-tree .mt-menu-item a:link, .mt-menu-tree .mt-menu-item a:visited {
    display: block;
    overflow: hidden;
    text-decoration: none;
    line-height: 28px;
    color: #000;
    height: 28px;
}
</style>

<script>
export default {
    name:'usermess',
    data(){
        return{
            userinfo:{
                user:'',
                merchant:'',
                ismerchant:false
            }
        }
    },
    created:function(){
        if(!this.$cookie.get('token')){
            this.$router.push({path:'/login'})
        }
        else{
            this.userinfo.user=this.$store.state.loginInfo.user
            this.userinfo.merchant=this.$cookie.get('merchat')
            this.userinfo.ismerchant=this.$store.state.loginInfo.ismerchant
            console.log(this.userinfo)
        }
    },
    methods:{
        toShop(item){
            this.$router.push({path:'/shop',query:{item}})
        }
    }
}
</script>