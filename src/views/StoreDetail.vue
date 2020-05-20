<template>
    <div>
        <div id="j-header">
            <div id="header" class="tshop-psm-shop-header">
                <div id="header" class="tshop-psm-shop-header-enterprise businessuser">
                    <div id="header-content" class="header-box w-full header-enterprise-tb">
                        <div class="logo-search">
                            <div class="logos">
                                <a href="/" class="tb-logo">
                                    <img src="../assets/fzu.png" alt="">
                                </a>
                            </div>
                            <div class="j-search tb-header-search search">
                                <div class="search-panel">
                                    <form action="#" class="j-searchform">
                                        <div class="search-buttons">
                                            <button class="search-button">搜淘宝</button>
                                            <button class="search-button secondary">搜本店</button>
                                        </div>
                                        <div class="search-panel-fields">
                                            <div class="search-combobox">
                                                <div class="search-combobox-input-wrap">
                                                    <input type="text">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="search-bottom">
                                    <a href="">收藏店铺</a>
                                </div>
                            </div>
                        </div>
                        <div class="shop-summary j-tshopsummary">
                            <div class="shop-name">
                                <div class="shop-name-wrap">
                                    <a href="" class="shop-name-link"></a>
                                </div>
                                <div class="shop-rank-wrap">
                                    <span class="shop-rank">{{stores.uid}}</span>
                                </div>
                            </div>
                            <div class="shop-service-info">
                                <ul class="shop-service-info-list">
                                    <li class="shop-service-info-item">
                                        <span class="title">描述</span>
                                        <span class="rateinfo">
                                            <em>5.0</em>
                                        </span>
                                    </li>
                                    <li class="shop-service-info-item">
                                        <span class="title">服务</span>
                                        <span class="rateinfo">
                                            <em>5.0</em>
                                        </span>
                                    </li>
                                    <li class="shop-service-info-item">
                                        <span class="title">物流</span>
                                        <span class="rateinfo">
                                            <em>5.0</em>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="page">
            <div id="content">
                <div id="bd">
                    <div id="detail">
                        <div class="tb-detail-bd tb-clear">
                            <div class="tb-summary tb-clear">
                                <div class="tb-item-info tb-clear">
                                    <div class="tb-item-info-l">
                                        <div class="tb-gallery">
                                            <div class="tb-booth tb-pic tb-main-pic">
                                                <img :src='getImgUrl(stores.url)' alt="">
                                            </div>
                                        </div>
                                        <div class="tb-social tb-clearfix">
                                            <ul>
                                                <li class="tb-social-fav">
                                                    <a href="">
                                                        <i class="el-icon-star-on tb-icon"></i>
                                                        收藏宝贝</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="tb-item-info-r">
                                        <div class="tb-property tb-property-x">
                                            <div class="tb-wrap tb-wrap-newshop">
                                                <div id="j-title" class="tb-title">
                                                    <h3 class="tb-main-title">{{stores.describe}}</h3>
                                                    <p class="tb-subtitle"></p>
                                                </div>
                                                <ul class="tb-meta">
                                                    <li id="j-strpricemodbox" class="tb-detail-price tb-clear j-priceitem">
                                                        <span class="tb-property-type">价格</span>
                                                        <div class="tb-property-cont">
                                                            <strong id="j-strprice">
                                                                <em class="tb-rmb">¥</em>
                                                                <em class="tb-rmb-num">{{stores.price}}</em>
                                                            </strong>
                                                        </div>
                                                    </li>
                                                    <li id="j-counter" class="tb-counter">
                                                        <div class="tb-counter-bd">
                                                            <div class="tb-rate-counter">
                                                                <a href="">
                                                                    <strong class="tb-zero">0</strong>
                                                                    <span>累计评论</span>
                                                                </a>
                                                            </div>
                                                            <div class="tb-sell-counter">
                                                                <a href="">
                                                                    <strong class="tb-zero">0</strong>
                                                                    <span>交易成功</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div id="j-logistic">
                                                    <div class="tb-logistic tb-clearfix">
                                                        <span class="tb-name tb-property-type">配送</span>
                                                    </div>
                                                </div>
                                                <div id="j-sepline" class="sep-line"></div>
                                                <div id="j-isku" class="tb-key tb-key-sku">
                                                    <div class="tb-skin">
                                                        <dl class="j-prop tb-prop tb-clear" id="">
                                                            <dt class="tb-property-type">颜色分类</dt>
                                                            <dd>
                                                                <ul class="j-tsaleprop tb-img tb-clearfix">
                                                                    <li>
                                                                        <a href="">
                                                                            <img src="" alt="">
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </dd>
                                                        </dl>
                                                        <dl class="tb-amount tb-clear" id="">
                                                            <dt class="tb-property-type">数量</dt>
                                                            <dd>
                                                                <span class="tb-stock" id="j-stock">
                                                                    <button class="tb-reduce tb-iconfont" @click="reduce">-</button>
                                                                    <input type="text" v-model="count" :placeholder="count">
                                                                    <button class="tb-increase tb-iconfont" @click="increase">+</button>
                                                                    件
                                                                </span>
                                                                <em>
                                                                    (库存
                                                                    <span class="tb-count" id="j-spanstock">{{stores.count}}</span>
                                                                    件)
                                                                </em>
                                                            </dd>
                                                        </dl>
                                                        <dl class="tb-clearfix" id="j-tbmultiterms">
                                                            <dt class="tb-property-type">花呗分期</dt>
                                                            <dd>
                                                                <ul class="tb-clearfix j-tbmultiterms">
                                                                    <li class="tb-multiterms-step tb-multiterms-step-enabled">
                                                                        ￥31.55x6期<br>(含手续费)
                                                                    </li>
                                                                    <li class="tb-multiterms-step tb-multiterms-step-enabled">
                                                                        ￥31.55x6期<br>(含手续费)
                                                                    </li>
                                                                    <li class="tb-multiterms-step tb-multiterms-step-enabled">
                                                                        ￥31.55x6期<br>(含手续费)
                                                                    </li>
                                                                </ul>
                                                            </dd>
                                                        </dl>
                                                        <div class="tb-action tb-clearfix" id="j-juvalid">
                                                            <div class="tb-btn-buy">
                                                                <a href="" class="j-linkbuy">立即购买</a>
                                                            </div>
                                                            <div class="tb-btn-add">
                                                                <a href="" class="j-linkadd">
                                                                    <i class="el-icon-shopping-cart-2"></i>
                                                                    加入购物车
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tb-extra" id="j-tbextra"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tb-sidebar tb-clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
#J_Header {
    min-height: 70px;
}
.tshop-psm-shop-header {
    position: relative;
    z-index: 199;
    min-width: 950px;
    width: auto;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
}
.tshop-psm-shop-header-enterprise {
    position: relative;
    z-index: 1999;
    min-width: 950px;
    width: auto;
    border-bottom: 1px dotted #f40;
    background-color: #FFF;
}
.tshop-psm-shop-header-enterprise .header-box {
    position: relative;
    width: 1140px;
    height: 70px;
    max-width: 1190px;
    margin: 0 auto;
    min-width: 950px;
    color: #3c3c3c;
}
.tshop-psm-shop-header-enterprise .logo-search {
    float: left;
    height: 70px;
    width: 130px;
}
.tshop-psm-shop-header-enterprise .logos {
    margin-top: 12px;
    width: 668px;
    height: 44px;
    float: left;
}
.tb-header-search {
    position: absolute;
    top: 12px;
    right: 0;
}
.logos .tb-logo {
    color: #f40;
    width: 66px;
    height: 44px;
    word-wrap: break-word;
    text-decoration: none!important;
    float: left;
}
.logos .tb-logo img{
    width: 66px;
    height: 44px;
}
.search-panel {
    width: 430px;
    position: relative;
}
.search-panel .search-buttons {
    position: relative;
    z-index: 1;
    float: right;
    background-color: #fff;
}
.tshop-psm-shop-header-enterprise .search-button {
    cursor: pointer;
    border: 0;
    font-size: 12px;
    float: left;
    width: 72px;
    height: 30px;
    background-color: #f40;
    color: #fff;
    margin: 0 0 0 -1px;
}
.search-button.secondary {
    background-color: #ffe4d0;
    color: #f40;
    border: 1px solid #ffb086;
    margin-left: 3px;
    margin: 0  0  0 3px  ;
}
.search-panel-fields {
    height: 30px;
    position: relative;
    zoom: 1;
    overflow: hidden;
    background: #f40;
}
.search-combobox {
    margin-left: 2px;
    margin-right: 0;
    margin-top: 2px;
    height: 26px;
    background: #fff;
}
.search-combobox-input-wrap {
    position: relative;
    overflow: hidden;
    height: 100%;
}
.search-panel-fields input {
    font-size: 14px;
    position: relative;
    height: 20px;
    line-height: 20px;
    padding: 3px;
    margin: 2px 0 0 2px;
    vertical-align: middle;
    border: 0 none;
    z-index: 2;
    width: 100%;
    outline: 0;
    text-indent: 5px;
}
.search-bottom {
    clear: both;
    float: right;
    text-align: right;
    white-space: nowrap;
    padding: 5px 0;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
}
.tshop-psm-shop-header-enterprise .shop-summary {
    position: relative;
    float: left;
    width: 500px;
    height: 70px;
}
.shop-summary .shop-name {
    margin-top: 15px;
    height: 40px;
    padding: 0 10px;
    border-left: 1px solid #f1f1f1;
    float: left;
}
.shop-summary .shop-name-link {
    font-weight: 600;
    color: #333;
}
.tshop-psm-shop-header-enterprise .shop-service-info {
    float: left;
    margin-top: 15px;
    height: 40px;
    min-height: 40px;
    width: 120px;
    margin-left: 0;
    padding: 0 0 0 10px;
    border-left: 1px solid #f1f1f1;
}
.shop-service-info-list .shop-service-info-item {
    width: 40px;
    float: left;
    text-align: left;
}
.shop-service-info-item .title {
    display: block;
    color: #333;
    font-size: 12px;
}
.shop-service-info-item .rateinfo {
    display: block;
    color: #333;
    font-size: 12px;
}
 .rateinfo em {
    width: 24px;
    float: left;
    text-align: center;
}
#content {
    position: relative;
    width: 100%;
    min-width: 990px;
}
#page #content #bd {
    width: auto!important;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
}
#detail {
    z-index: 99999999;
    position: relative;
    margin: 10px auto 0;
    width: 1140px;
    color: #3C3C3C;
}
.tb-detail-bd {
    position: relative;
    margin-bottom: 20px;
    border: 1px solid #E8E8E8;
}
.clear:after, .tb-clear:after, .tb-clearfix:after {
    content: '\20';
    display: block;
    height: 0;
    clear: both;
}
#detail .tb-summary {
    float: left;
    width: 100%;
}
#detail .tb-sidebar {
    float: left;
    width: 200px;
    margin-left: -200px;
}
#detail .tb-summary .tb-item-info {
    margin-right: 198px;
    border-right: 1px solid #E8E8E8;
}
.tb-item-info .tb-item-info-l {
    float: left;
    padding: 20px 0 20px 20px;
    width: 400px;
    position: relative;
}
.tb-item-info .tb-item-info-r {
    float: left;
    padding: 20px 20px 20px 0;
    width: 498px;
}
.tb-gallery {
    margin-bottom: 18px;
    width: 400px;
    overflow: hidden;
}
#detail #J_Social {
    width: 100%!important;
}
#detail .tb-social {
    float: left;
    z-index: 2;
    position: relative;
}
#detail .tb-social ul li {
    float: left;
    position: relative;
    margin-right: 25px;
    height: 22px;
    line-height: 22px;
}
#detail .tb-social ul li a {
    padding-left: 0;
    height: auto;
    color: #6C6C6C;
    background: 0 0;
}
#detail .tb-social ul li a .tb-icon {
    float: left;
    margin: 4px 5px 0 0;
    width: 16px;
    height: 16px;
}
.tb-gallery .tb-main-pic {
    width: 400px;
    height: 400px;
    overflow: hidden;
}
.tb-gallery .tb-booth {
    position: relative;
    margin-bottom: 15px;
    z-index: 1;
}
.tb-gallery .tb-main-pic img {
    width: 400px;
    height: 400px;
    overflow: hidden;
}
.tb-item-info-r .tb-property {
    z-index: 1;
    position: relative;
}
.tb-property .tb-wrap {
    padding-left: 18px;
}
#detail .tb-property-x .tb-title {
    padding: 20px 0 10px!important;
    position: relative;
}
#detail .tb-title:after {
    content: "";
    display: table;
    clear: both;
}
#detail .tb-title .tb-main-title {
    min-height: 21px;
    height: 21px;
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    color: #3C3C3C;
}
.tb-title .tb-subtitle {
    margin-top: 5px;
    color: #6C6C6C;
}
.tb-property-x .tb-meta {
    padding: 10px;
    background-color: #FFF2E8;
}
.tb-meta {
    z-index: 100000;
    position: relative;
    min-height: 35px;
}
.tb-meta .tb-property-type {
    float: left;
    width: 60px;
    color: #6c6c6c;
    font-size: 12px;
}
.tb-meta li {
    margin-bottom: 0;
    line-height: 24px;
}
.tb-meta .tb-detail-price {
    width: 345px;
}
.tb-meta .tb-property-cont {
    overflow: hidden;
}
.tb-meta .tb-detail-price strong {
    position: relative;
    top: -2px;
    vertical-align: middle;
    padding-right: 5px;
    font-size: 24px;
    font-weight: 700;
    font-family: Tahoma,Arial,Helvetica,sans-serif;
    color: #f40;
    overflow: hidden;
}
#bd .tb-rmb{
    font-family: arial;
    font-weight: 400;
    margin-right: 4px;
    font-size: 24px;
}
#bd .tb-rmb-num {
    font-family: verdana,arial;
    font-size: 24px;
}
#detail .tb-property-x .tb-counter {
    position: absolute;
    top: 6px;
    right: 10px;
}
.tb-counter .tb-rate-counter {
    padding-right: 9px;
    padding-left: 9px;
    float: left;
    text-align: center;
}
.tb-sell-counter a,.tb-rate-counter a {
    display: block;
    color: #6C6C6C;
}
.tb-sell-counter a strong,.tb-rate-counter a strong {
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
}
.tb-sell-counter a span,.tb-rate-counter a span {
    font-size: 12px;
}
.tb-counter .tb-sell-counter {
    border: none;
    padding-right: 0;
    padding-left: 9px;
    border-left: 1px solid #ffe4d0;
    float: left;
    text-align: center;
}
.tb-logistic {
    margin-top: 5px;
    margin-bottom: 5px;
}
#detail .tb-property-x .tb-logistic .tb-property-type {
    padding-left: 10px;
    font-size: 12px;
}
#detail .tb-logistic .tb-property-type {
    display: inline;
    color: #6c6c6c;
    line-height: 24px;
    
}
#detail .tb-property-x .sep-line {
    margin: 0 0 10px;
}
#detail .sep-line {
    z-index: 1;
    position: relative;
    height: 1px;
    border-bottom: 1px dotted #D9D9D9;
    overflow: hidden;
}
#detail .tb-property-x .tb-key {
    padding-left: 18px;
    padding-bottom: 5px;
    margin-bottom: 20px;
}
#detail .tb-key {
    z-index: 6;
    position: relative;
    margin: -9px 0 29px -9px;
    padding: 9px 0 0 9px;
    border: 1px solid #FFF;
}
#detail .tb-key .tb-skin {
    position: relative;
}
#detail .tb-key dl {
    margin-bottom: 10px;
}
#detail .tb-key dl dt {
    font-size: 12px;
    float: left;
    margin-right: 5px;
    width: 55px;
    color: #6C6C6C;
}
#detail .tb-key dl dd {
    overflow: hidden;
}
#detail .tb-key .tb-prop li {
    float: left;
    position: relative;
    margin: 0 5px 10px 0;
    vertical-align: middle;
    line-height: 20px;
    background: #FFF;
}
#bd .tb-clearfix:after, #bd .tb-key dl:after, #bd .tb-other:after, #bd .combo ul:after, #bd .scrolling-promo-content:after, .tb-popup-share .tb-tab-hd:after {
    visibility: hidden;
    clear: both;
    content: '';
    display: block;
    height: 0;
}
#detail .tb-key .tb-stock {
    position: relative;
    float: left;
}
#bd .tb-amount {
    line-height: 28px;
}
#detail .tb-key .tb-stock input {
    float: left;
    margin: 0;
    padding: 0;
    width: 48px;
    height: 26px;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #666;
    border: 1px solid #CCC;
    outline: 0;
    background: #FFF;
    ime-mode: disabled;
}
#bd .tb-stock .tb-disable-increase, #bd .tb-stock .tb-disable-increase:hover, #bd .tb-stock .tb-disable-reduce, #bd .tb-stock .tb-disable-reduce:hover {
    color: #ccc;
    cursor: not-allowed;
    background-color: #ededed;
}
#bd .tb-stock button, #bd .tb-stock button:hover {
    display: block;
    float: left;
    width: 26px;
    height: 28px;
    border: 1px solid #ccc;
    line-height: 26px;
    padding: 0;
    text-align: center;
    overflow: hidden;
    background-color: #ededed;
}
.tb-iconfont {
    font-size: 12px;
    font-style: normal;
}
#detail .j-tbmultiterms {
    margin: 0 0 10px 0;
}
.tb-multiterms-step-enabled {
    color: #333;
    border: 1px solid #c3c3c3;
}
.tb-multiterms-step {
    text-align: center;
    padding: 3px 8px;
    cursor: pointer;
}
.tb-multiterms-step {
    float: left;
    position: relative;
    margin: 0 5px 10px 0;
    vertical-align: middle;
    line-height: 20px;
    background: #FFF;
}
.tb-action {
    margin-top: 20px;
    z-index: 1;
    position: relative;
    overflow: hidden;
}
.tb-action .tb-btn-buy {
    margin-right: 9px;
    float: left;
}
#detail .tb-key .tb-action .tb-btn-buy a {
    color: #E5511D;
    border-color: #F0CAB6;
    background: #FFE4D0;
}
#detail .tb-key .tb-action .tb-btn-buy a, #detail .tb-key .tb-action .tb-btn-add a, #detail .tb-key .tb-action .tb-btn-wait a {
    display: block;
    cursor: pointer;
    width: 134px;
    height: 38px;
    text-align: center;
    font-family: "Hiragino Sans GB","microsoft yahei",sans-serif;
    font-size: 16px;
    line-height: 38px;
    border-width: 1px;
    border-style: solid;
    border-radius: 2px;
}
.tb-key .tb-action .tb-btn-add{
    float: left;
}
#detail .tb-key .tb-action .tb-btn-add a {
    width: 180px;
    color: #FFF;
    border-color: #F40;
    background: #F40;

}
#detail .tb-key .tb-action .tb-btn-add i {
    vertical-align: middle;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    margin-right: 10px;
}
</style>
<script>
export default {
    name:'storedetail',
    data() {
        return{
            stores:'',
            count:1
        }
    },
    created:function(){
        this.stores=this.$route.query
        console.log(this.stores)
    },
    methods:{
        getImgUrl(item){
            var url = 'http://58.87.77.5:8080/img/'+item
            return url
        },
        reduce(){
            if(this.count>1){
                this.count--
            }
        },
        increase(){
            if(this.count<this.stores.count){
                this.count++
            }
        }
    }
}
</script>