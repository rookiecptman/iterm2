<template>
    <div class="srp-main" id="main">
        <div class="grid-total">
            <div class="grid-left">
                <div id="mainsrp-header">
                    <div class="m-header g-clearfix">
                        <div class="header-wraper">
                            <div class="header-inner">
                                <div class="logo">
                                    <img src="../assets/fzu.png" alt="" class="icon-btn-logo">
                                </div>
                                <div class="search">
                                    <form action="#" >
                                        <div class="wraper">
                                            <div class="inputs inputs-imgsearch">
                                                <div class="search-combobox" id="ks-component499">
                                                    <div class="search-combobox-input-wrap">
                                                        <input class="search-combobox-input" id="q" placeholder="请输入要搜索的词">
                                                    </div>
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <button class="submit icon-btn-search">搜索</button>
                                    </form>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-total">
            <div class="grid-left">
                <div id="mainsrp-tab">
                    <div class="m-tab g-clearfix">
                        <ul class="tabs">
                            <li class="tab"><a href="" class="selected">所有宝贝</a></li>
                            <li class="tab"><a href="">天猫</a></li>
                            <li class="tab"><a href="">二手</a></li>
                        </ul>
                    </div>
                </div>
                <div id="mainsrp-nav">
                    <div class="m-nav g-clearfix">
                        <div class="crumb g-clearfix">
                            <a href="#" class="j-togglenav icon-tag toggle-btn show-expand">
                                <span class="expand">显示筛选</span>
                            </a>
                            <span class="cat-text">所有分类</span>
                        </div>
                        <div class="groups j-navgroup" style="display:none;"></div>
                    </div>
                </div>
                <div id="mainsrp-sortbar"></div>
                <div id="mainsrp-itemlist">
                    <div class="m-itemlist">
                        <div class="grid g-clearfix">
                            <div class="items" >
                                <div class="item j-mouseronverreq item-ad" v-for="(item, index) of stores" :key="index">
                                    <div class="pic-box j-mouseenterleave j-picbox">
                                        <div class="pic-box-inner">
                                            <div class="pic">
                                                <a class="pic-link" @click="toDetail(item)" >
                                                    <img :src='getImgUrl(item.url)' alt="" style="width: 220px;height: 220px;">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ctx-box j-mouseenterleave j-iconmorenew">
                                        <div class="row row-1 g-clearfix">
                                            <div class="price g_price g_price-highlight">
                                                <span>¥</span>
                                                <strong>{{item.price}}</strong>
                                            </div>
                                            <div class="deal-cnt">{{item.count}}人付款</div>
                                        </div>
                                        <div class="row row-2 title">
                                            <a id="J_Itemlist_TLink_585738486118" class="J_ClickStat" >
                                                {{item.describe}}
                                            </a>
                                        </div>
                                        <div class="row row-3 g-clearfix">
                                            <div class="shop">
                                                <a class="shopname J_MouseEneterLeave J_ShopInfo" href="/shop">
                                                    <span>{{item.uid}}</span>
                                                </a>
                                            </div>
                                            <div class="location">{{item.addr}}</div>
                                        </div>
                                        <div class="row row-4 g-clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid-right"></div>
        </div>
        <div class="store-footer">
            <el-pagination
                background
                layout="prev, pager, next"
                :page-count="count"
                :current-page="xth"
                @current-change="changeXth"
                >
            </el-pagination>
        </div>
    </div>
</template>
<style>
.grid-total {
    width: 1190px;
    margin: 0 auto;
    overflow: hidden;
}
.grid-total .grid-left {
    float: left;
    width: 940px;
}
.m-header {
    margin-top: 16px;
}
.m-header .header-wraper {
    min-height: 44px;
}
.header-inner{
    overflow: hidden;
    
}
.m-header .logo {
    float: left;
}
.icon-btn-logo {
    background-position: -125px -5px;
    width: 105px;
    height: 78px;
}
.m-header .search {
    float: right;
    margin-top: 24px;
    height: 35px;
}
.m-header .search .wraper {
    float: left;
    border: solid 2px #f50;
    border-right: none;
    height: 31px;
}
.response-normal .m-header .search .inputs {
    width: 530px;
}
.m-header .search .inputs {
    float: left;
    position: relative;
}
.search-combobox {
    font-size: 12px;
}
.search-combobox-input-wrap {
    vertical-align: middle;
    position: relative;
}
.m-header .search .inputs .search-combobox-input {
    height: 31px;
    border: none 0;
    outline: 0;
    font-size: 14px;
    padding-left: 5px;
    width: 580px;
}
.m-header .search .submit {
    float: left;
    width: 80px;
    height: 35px;
    border: none;
    cursor: pointer;
}
.icon-btn-search{
    display: inline-block;
    color: #fff;
    font-size: 18px;
    background-color: #f50;
    margin: 0;
}
.grid-total:after, .grid-total:before {
    content: "";
    display: table;
}
.response-normal .grid-total .grid-left {
    float: left;
    width: 940px;
}
.m-tab {
    margin-top: 15px;
    height: 38px;
    border-bottom: 2px solid #f40;
}
.g-clearfix:after, .g-clearfix:before {
    content: "";
    display: table;
}
.m-tab .tabs {
    font-size: 16px;
}
.m-tab .tab {
    float: left;
    line-height: 38px;
}
.m-tab .selected {
    background: #f40;
    color: #fff;
}
.m-tab a {
    display: block;
    height: 38px;
    padding: 0 20px;
    color: #333;
    text-decoration: none;
}
.m-nav {
    margin-top: 10px;
}
.m-nav .crumb {
    margin-left: 20px;
}
.m-nav .crumb .toggle-btn {
    float: right;
    margin: 0 0 0 4px;
    height: 24px;
    line-height: 24px;
    border: solid 1px #e8e8e8;
    padding: 0 9px;
    background: #f6f6f6;
    color: #6b6b6b;
    cursor: pointer;
    text-decoration: none;
}
.m-nav .crumb .cat, .m-nav .crumb .cat-text {
    margin-top: 4px;
    float: left;
    line-height: 20px;
    height: 20px;
    color: #666;
    text-decoration: none;
}
.m-nav .crumb .show-collapse .expand {
    display: none;
}
.m-itemlist {
    clear: left;
}
.m-itemlist .grid {
    margin-right: -17px;
}
.m-itemlist .grid .item {
    margin-right: 17px;
    width: 220px;
    height: 360px;
    margin-top: 22px;
    float: left;
    border: 1px solid #ededed;
    transition: border-color .2s;
}
.m-itemlist .item-ad {
    position: relative;
    display: block!important;
}
.m-itemlist .grid .pic, .m-itemlist .grid .pic-box, .m-itemlist .grid .pic-box-inner, .m-itemlist .grid .pic-link {
    width: 220px;
    height: 220px;
}
.m-itemlist .pic-box {
    position: relative;
}
.m-itemlist .pic-box-inner {
    position: relative;
    overflow: hidden;
}
.m-itemlist .pic-link {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.m-itemlist .grid .row {
    padding: 0 10px;
}
.m-itemlist .grid .row-1 {
    margin-top: 11px;
    height: 22px;
    line-height: 22px;
    overflow: hidden;
}
.m-itemlist .grid .row-2, .m-itemlist .grid .title {
    margin-top: 6px;
    height: 36px;
}
.m-itemlist .title {
    overflow: hidden;
    font-weight: 400;
}
.m-itemlist .grid .row-3 {
    margin-top: 5px;
    height: 22px;
    line-height: 22px;
    overflow: hidden;
}
.m-itemlist .grid .row-4 {
    padding: 0 10px 0 6px;
    margin-top: 10px;
    height: 20px;
    overflow: hidden;
}
.g-clearfix:after, .g-clearfix:before {
    content: "";
    display: table;
}
.m-itemlist .grid .price {
    float: left;
    font-size: 18px;
}
.m-itemlist .grid .deal-cnt {
    float: right;
}
.m-itemlist .deal-cnt {
    color: #888;
    font-size: 12px;
}
.g_price-highlight span {
    color: #F40;
}
.g_price span {
    margin-right: 3px;
    color: #F40;

}
.grid .price strong {
    font-size: 16px;
    color: #F40;
    font-weight: 700;
}
.m-itemlist .location {
    float: right;
    color: #888;
}
.m-itemlist .shopname {
    color: #888;
    text-decoration: underline;
    float: left;
}
.store-footer{
    width:1190px ;
    margin: 40px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>
<script>
export default {
    data() {
        return {
            stores:'',
            xth:1,
            count:0
        }
    },
    name:'store',
    created:function(){
        this.$axios.get(this.getUrl(this.$data.xth)).then(res => {
            console.log(res)
            this.stores=res.data.data    
        }).catch(res => {
        })
        this.$axios.get('/api/count').then(res => {
            console.log(res)
            this.count=Math.ceil(res.data.data.count/8) 
            console.log(this.count)
        }).catch(res => {
        })
    },
    methods:{
        getImgUrl(item){
            var url = 'http://58.87.77.5:8080/img/'+item
            return url
        },
        toDetail(item){
            this.$router.push({path:'/storedetail',query:item})
        },
        getUrl(item){
            var url = 'http://58.87.77.5:8080/api/goods?page=8&xth='+item
            return url
        },
        changeXth(e){
            console.log(e)
            this.xth=e
            this.$axios.get(this.getUrl(this.$data.xth)).then(res => {
                console.log(res)
                this.stores=res.data.data    
            }).catch(res => {
        })
        }

    }
}
</script>