<template>
    <div id="page" class="page-itemimglist">
        <div id="collect-content">
            <div id="mercury">
                <div id="fav-tab">
                    <div id="fav-tab-bd">
                        <div id="fav-tab-menu" class="clearfix floatleft">
                            <a  class="fav-logo" href="/">
                                <img aria-label="欢迎访问淘宝收藏夹" src="//img.alicdn.com/tps/i1/T1gbUrFeVaXXXO7MrX-136-28.png">
                            </a>
                            <a class="item-page " href="/collectstore" >宝贝收藏</a>
                            <a class="shop-page current" href="/collectshop" >店铺收藏</a>
                        </div>
                        <div class="fav-search" data-spm="1975051493">
                            <div class="search " id="J_Search" role="search">
                                <div class="search-panel search-sns-panel-field">
                                    <form class="search-panel-focused" id="J_TSearchForm" name="search" target="_top">
                                        <input name="_tb_token_" type="hidden">
                                        <div class="collect-search-button">
                                            <button type="submit" class="btn-search">搜 索</button>
                                        </div>
                                        <div class="search-panel-fields">
                                            <div class="search-combobox" id="ks-component122"><div class="search-combobox-input-wrap"><input id="q" name="q" accesskey="s" value=""  role="combobox" class="search-combobox-input"></div></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mercury-cont">
                    <div class="fav-floatbar">
                        <div class="fav-bar-height">
                            <div class="fav-bar-float">
                                <div class="fav-bar-float-layout clearfix">
                                    <div class="fav-select" data-spm="">
                                        <ul>
                                            <li class="fav-sel-item fav-sel-item-first J_SelItemsTags ">  
                                                <span class="fav-sel-link fav-sel-select">全部店铺</span>         
                                            </li>     
                                        </ul>
                                    </div>
                                    <div class="fav-search cleatfix">
                                        <form class="fav-search-panel-focused" id="J_FavSearchForm" name="favsearch" action="/item_collect_n.htm" target="_top">
                                            <div class="fav-search-panel-fields">
                                                <input id="fav-q" name="value" accesskey="s" autocomplete="off" x-webkit-speech="" x-webkit-grammar="builtin:translate" placeholder="宝贝搜索" value="" aria-haspopup="true" aria-combobox="list" role="combobox" class="search-combobox-input" aria-label="输入关键词搜索收藏夹内的宝贝">
                                            </div>
                                            <div class="fav-collect-search-button">
                                                <button type="button" class="fav-btn-search" data-spm-click="gostr=/tbscj;locaid=d1selbtn">搜索</button>
                                            </div>
                                        </form>
                                    </div>  
                                </div>
                            </div>                      
                        </div>
                    </div>
                    <div id="fav-list">
                        <ul class="img-item-list J_FavList clearfix">                   
                            <li class=" J_FavListItem fav-shop   clearfix" v-for="(item, index) of shops" :key="index">
                                <div class="shop-card g-sl-l-item clcearfix">
                                    <div class="shop-card-side">
                                        <div class="logo J_ShopClassTri">
                                            <a href="#" @click="toShop(item.name)">
                                                <img class="logo-img" src="../assets/avatar.png">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="shop-card-main">
                                        <div class="shop-name">
                                            <a class="shop-name-link" href="#" @click="toShop(item.name)">
                                                {{item.name}}
                                            </a>
                                        </div>
                                        <div class="seller J_ShopClassTri">
                                            <a class="seller-link" href="#"  data-spm="">
                                                {{item.username}}
                                            </a>
                                            <span class="ww-light ww-small" data-nick="shanghai4989" data-icon="small" data-spm="$!spmWangWang">
                                                <a href="" target="_blank" class="ww-inline ww-online" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。">
                                                    <span></span>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="shop-tools">
                                            <ul class="shop-tools-list clearfix">
                                                <li class="shop-tools-item shop-tools-item-top J_SetTopItem" title="置顶"></li>
                                                <li class="shop-tools-item shop-tools-item-del J_DeleteItem" title="删除"><i class="el-icon-delete"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="J_ItemListBox item-list-box latestUp-select">
                                    <div class="item-list-box-tools clearfix">
                                        <div class="item-list-box-tab clearfix">
                                            <div class="J_SideTab latestUp " pointname="tbscj.18.34" data-spm-click="gostr=/tbscj;locaid=d1latestUpTab" data-item-count="7">本周上新 <em>7</em></div>
                                            <div class="J_SideTab discount " pointname="tbscj.18.35" data-spm-click="gostr=/tbscj;locaid=d1discountTab" data-item-count="508">优惠 <em>508</em></div>
                                            <div class="J_SideTab hotSell " pointname="tbscj.18.35" data-spm-click="gostr=/tbscj;locaid=d1hotSellTab" data-item-count="510">热销 <em>510</em></div>
                                            <div class="J_SideTab preUpShelf disabled " data-spm-click="gostr=/tbscj;locaid=d1reUpShelfTab" data-item-count="0">即将上架 <em>0</em></div>
                                            <div class="J_SideTab findGoods" data-spm-click="gostr=/tbscj;locaid=d1reFindGoodsTab">发现好货</div>
                                        </div>
                                        <a tabindex="-1" class="item-list-more-btn J_PopRecTrigLink J_NewPoint" href="/shop_gallery_n.htm?id=36848177&amp;cat=4&amp;sellerId=143074663&amp;tab=0" target="_blank" pointname="tbscj.18.30" data-spm="">
                                            查看更多
                                        </a>
                                    </div>
                                    <div class="item-list">
                                        <ul class="item-list-latestUp-ul clearfix">
                                            <li class="item-box g-sl-r-item" v-for="(item1, index) of item.goods" :key="index">
                                                <div class="item">
                                                    <a tabindex="-1" target="_blank" href="#" @click="toDetail(item1)" title="韩国进口不倒翁快餐面/韩国奥土基拉面热泡米饭更好吃108g*5袋">
                                                        <img class="item-img" :src='getImgUrl(item1.url)' :alt="item1.describe">
                                                    </a>
                                                </div>
                                                <div class="g_price-box">
                                                    <div class="g_price">
                                                        <span>¥</span>
                                                        <strong>{{item1.price}}</strong>
                                                    </div>
                                                </div>
                                            </li>   
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style >
.img-item-list {
    margin-right: 0;
    overflow: hidden;
}
.fav-shop {
    border-bottom: #e5e5e5 1px solid;
    position: relative;
    min-height: 279px;
    overflow: hidden;
}
.fav-shop .shop-card {
    float: left;
    padding-top: 20px;
    position: relative;
}
.g-sl-l-item {
    width: 270px;
    margin-right: 30px;
}
.fav-shop .shop-card-side {
    float: left;
    padding-left: 6px;
    padding-right: 17px;
    height: 190px;
    width: 50px;
}
.fav-shop .shop-card .logo {
    margin-bottom: 8px;
}
.fav-shop .shop-card .logo-img {
    border-radius: 48px;
    max-width: 100%;
    max-height: 100%;
}
.fav-shop .shop-card-main {
    float: left;
}
.fav-shop .shop-name {
    line-height: 25px;
    margin-bottom: 2px;
    height: 26px;
    width: 143px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.fav-shop .shop-name-link {
    font-size: 14px;
    font-weight: 700;
    color: #3c3c3c;
}
.fav-shop .seller {
    margin-bottom: 3px;
    width: 190px;
    height: 18px;
    overflow: hidden;
}
.fav-shop .seller-link {
    color: #3a3a3a;
    font-size: 12px;
}
.fav-shop .shop-card .shop-tools {
    position: absolute;
    top: 20px;
    right: 0;
    width: 50px;
    height: 27px;
}
.fav-shop .shop-card .shop-tools-list {
    width: 50px;
    background-color: #fff;
    overflow: hidden;
}
.fav-shop .shop-card .shop-tools-item {
    text-align: center;
    height: 24px;
    line-height: 24px;
    cursor: pointer;
    width: 25px;
    float: left;
    overflow: hidden;
}
.fav-shop .item-list-box {
    float: right;
    width: 890px;
}
.fav-shop .item-list-box-tools {
    padding-top: 20px;
    padding-bottom: 16px;
    overflow: hidden;
}
.fav-shop .item-list-box-tab {
    float: left;
    border: #dcdcdc 1px solid;
    font-size: 14px;
}
.fav-shop .item-list-more-btn {
    float: right;
    color: #6c6c6c;
    padding-right: 10px;
    font-size: 12px;
}
.fav-shop .discount-select .discount, .fav-shop .hotSell-select .hotSell, .fav-shop .latestUp-select .latestUp, .fav-shop .preUpShelf-select .preUpShelf, .fav-shop .similar-select .similar {
    background-color: #f3f3f3;
    color: #ff4200;
}
.fav-shop .discount, .fav-shop .hotSell, .fav-shop .latestUp {
    border-right: #dcdcdc 1px solid;
}
.fav-shop .discount, .fav-shop .findGoods, .fav-shop .hotSell, .fav-shop .latestUp, .fav-shop .preUpShelf, .fav-shop .similar {
    float: left;
    padding: 0 13px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    color: #6c6c6c;
    cursor: pointer;
}
.fav-shop .disabled, .fav-shop .disabled:hover {
    color: #9c9c9c;
    cursor: not-allowed;
}
.fav-shop .findGoods {
    border-left: #dcdcdc 1px solid;
    width: 60px;
    overflow: hidden;
}
.fav-shop .item-list {
    position: relative;
}
.fav-shop .item-list-discount-ul, .fav-shop .item-list-findGoods-ul, .fav-shop .item-list-hotSell-ul, .fav-shop .item-list-latestUp-ul, .fav-shop .item-list-preUpShelf-ul, .fav-shop .item-list-similar-ul {
    margin-right: -40px;
    height: 205px;
    overflow: hidden;
    display: block;
}
.fav-shop .discount-select .item-list-discount-ul, .fav-shop .hotSell-select .item-list-hotSell-ul, .fav-shop .latestUp-select .item-list-latestUp-ul, .fav-shop .preUpShelf-select .item-list-preUpShelf-ul, .fav-shop .promotionItemTab-select .item-list-promotionItemTab-ul, .fav-shop .tbPromotionItemTab-select .item-list-tbPromotionItemTab-ul {
    margin-bottom: 16px;
    zoom: 1;
    position: relative;
}
.fav-shop .item-box {
    float: left;
    text-align: center;
    height: 205px;
    position: relative;
}
.fav-shop .item {
    width: 148px;
    height: 148px;
    border: #eee 1px solid;
    margin-bottom: 8px;
}
.fav-shop .g_price-box {
    height: 25px;
    line-height: 25px;
    overflow: hidden;
}
.fav-shop .item-img {
    vertical-align: middle;
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
}
#mercury .g_price-box div {
    display: inline;
    color: #6c6c6c;
    text-align: center;
}
</style>
<script>
export default {
    name:'collectshop',
    data(){
        return{
            shops:''
        }
    },
    created:function(){
        this.$axios.get('/api/favorite').then((res)=>{
            console.log(res)
            this.shops=res.data.data
        }).catch(err=>{

        })
    },
    methods:{
        getImgUrl(item){
            var url = 'http://58.87.77.5:8080/img/'+item
            return url
        },
        deleteShop(item){
            this.$axios.delete('/api/collect/'+item).then((res)=>{
                console.log(res)
                this.$router.go(0)
            }).catch(err=>{

            })
        },
        toDetail(item){
            this.$router.push({path:'/storedetail',query:item})
        },
        toShop(item){
            this.$router.push({path:'/shop',query:{item}})
        },
    }
}
</script>