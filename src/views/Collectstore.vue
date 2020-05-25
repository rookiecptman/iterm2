<template>
    <div id="page" class="page-itemimglist">
        <div id="collect-content">
            <div id="mercury">
                <div id="fav-tab">
                    <div id="fav-tab-bd">
                        <div data-spm="1997985201" id="fav-tab-menu" class="clearfix floatleft">
                            <a aria-label="您可以使用tab键寻找您的收藏" class="fav-logo" href="/">
                                <img aria-label="欢迎访问淘宝收藏夹" src="//img.alicdn.com/tps/i1/T1gbUrFeVaXXXO7MrX-136-28.png">
                            </a>
                            <a class="item-page current" href="/collectstore" >宝贝收藏</a>
                            <a class="shop-page " href="/collectshop" >店铺收藏</a>
                        </div>
                        <div class="fav-search" data-spm="1975051493">
                            <div class="search " id="J_Search" role="search">
                                <div class="search-panel search-sns-panel-field">
                                    <form class="search-panel-focused" id="J_TSearchForm" name="search" action="//s.taobao.com/search" target="_top">
                                        <input name="_tb_token_" type="hidden" value="5b73e065b3eee">
                                        <div class="collect-search-button">
                                            <button type="submit" class="btn-search">搜 索</button>
                                        </div>
                                        <div class="search-panel-fields">
                                            <div class="search-combobox" id="ks-component122"><div class="search-combobox-input-wrap"><input id="q" name="q" accesskey="s" autocomplete="off" x-webkit-speech="" x-webkit-grammar="builtin:translate" value="" aria-label="搜索全网请输入搜索文字或从搜索历史中选择" aria-haspopup="true" aria-combobox="list" role="combobox" class="search-combobox-input"></div></div>
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
                                                <span class="fav-sel-link fav-sel-select">全部宝贝</span>         
                                            </li>     
                                        </ul>
                                    </div>
                                    <div class="fav-search cleatfix">
                                        <form class="fav-search-panel-focused" id="J_FavSearchForm" name="favsearch" action="/item_collect_n.htm" target="_top">
                                            <div class="fav-search-panel-fields">
                                                <input id="fav-q" name="value" accesskey="s" placeholder="宝贝搜索"  class="search-combobox-input">
                                            </div>
                                            <div class="fav-collect-search-button">
                                                <button type="button" class="fav-btn-search" >搜索</button>
                                            </div>
                                        </form>
                                    </div>  
                                </div>
                            </div>                      
                        </div>
                    </div>
                    <div id="fav-list">
                        <ul class="img-item-list J_FavList clearfix">                   
                            <li class="J_FavListItem g-i-item fav-item " v-for="(item, index) of goods" :key="index">
                                <div class="img-controller-box J_FavImgController">
                                    <div class="img-controller-img-box">
                                        <a href="#" @click="toDetail(item)" class="img-controller-img-link" :title="item.describe">              
                                            <img class="img-controller-img" :src='getImgUrl(item.url)' :alt="item.describe">
                                        </a>
                                    </div>
                                    <div class="delete-box" >
                                        <div class="delete-btn J_DeleteItem" title="删除宝贝" @click="deleteStore(item.gid)">
                                            <i class="el-icon-delete-solid"></i>
                                        </div>
                                    </div>
                                    <div class="note">
                                        <div class="note-bg"></div>
                                        <div class="note-txt">
                                            <span class="note-txt-icon"></span>
                                            添加备注
                                        </div>
                                    </div>
                                </div>
                                <div class="img-item-title">
                                    <a class="img-item-title-link" href="#" >{{item.describe}}</a>
                                </div>
                                <div class="price-container">
                                    <div class="g_price-box">
                                        <div class="g_price ">                                  
                                            <span>¥</span>
                                            <strong>{{item.price}}</strong>           
                                         </div>
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
#fav-tab {
    width: 100%;
    height: 60px;
    background-color: #F40;
    margin-bottom: 10px;
    position: relative;
    z-index: 100;
}
#fav-tab-bd {
    width: 1190px;
    height: 100%;
    margin: 0 auto;
    font-family: "Microsoft Yahei";
}
.floatleft {
    float: left;
    overflow: hidden;
}
#fav-tab-bd .fav-logo {
    display: block;
    float: left;
    width: 200px;
    text-decoration: none;
    height: 60px;
    line-height: 60px;
    color: #FFF;
}
#fav-tab-bd .fav-logo img {
    margin-top: 16px;
}
#fav-tab-bd .album-page:link, #fav-tab-bd .album-page:visited, #fav-tab-bd .buyed-page:link, #fav-tab-bd .buyed-page:visited, #fav-tab-bd .cornucopia-page:link, #fav-tab-bd .cornucopia-page:visited, #fav-tab-bd .item-page:link, #fav-tab-bd .item-page:visited, #fav-tab-bd .shop-page:link, #fav-tab-bd .shop-page:visited, #fav-tab-bd .tab-link:link, #fav-tab-bd .tab-link:visited, #fav-tab-bd .uzhan-page:link, #fav-tab-bd .uzhan-page:visited {
    display: block;
    float: left;
    height: 60px;
    line-height: 60px;
    text-decoration: none;
    padding: 0 25px;
    text-align: center;
    color: #fff;
    font-size: 16px;
}
#fav-tab-bd .current {
    background-color: #de3b00;
}
#fav-tab-bd .fav-search {
    float: right;
}
.search {
    position: relative;
    top: 13px;
    float: right;
    padding: 0;
}
.search .search-sns-panel-field {
    width: 100%;
    margin-right: 0;
}
.search-sns-panel-field {
    float: right;
    background: #fff;
    height: 27px;
    margin-top: 4px;
}
.search-panel .collect-search-button {
    position: relative;
    z-index: 1;
    float: right;
    background: #fff;
}
.search-sns-panel-field button.btn-search {
    text-indent: 0;
    font-size: 12px;
    color: #666;
    background: #f5f5f5;
    height: 27px;
    width: 72px;
    border: 0 none;
    margin: 0 0;
}
#J_TSearchForm .search-combobox {
    font-size: 12px;
    margin: 0;
}
.search-sns-panel-field .search-panel-fields {
    height: 27px;
}
.search-sns-panel-field .search-combobox-input-wrap {
    height: 27px;
}
.search-combobox-input-wrap {
    vertical-align: middle;
    position: relative;
    overflow: hidden;
}
.search .search-sns-panel-field .search-panel-fields input {
    top: 0;
    left: 0;
    padding-left: 0;
    margin-left: 0;
    border-right-color: #fff;
    background-repeat: no-repeat;
}
.search .search-sns-panel-field .search-panel-fields input {
    width: 240px;
}
.mercury-cont {
    width: 1190px;
    margin: 0 auto;
}
.fav-floatbar {
    margin-bottom: 10px;
    position: relative;
    z-index: 50;
}
.fav-bar-height {
    height: 48px;
}
.fav-bar-float {
    height: 46px;
    line-height: 46px;
    border-bottom: #e5e5e5 2px solid;
}
.fav-bar-float-layout{
    overflow: hidden;
}
.fav-floatbar .fav-select {
    float: left;
}
.fav-floatbar .fav-sel-item {
    float: left;
}
.fav-floatbar .fav-sel-select {
    padding-right: 40px;
    position: relative;
    color: #f40;
    border-bottom: #ff4200 2px solid;
}
.fav-floatbar .fav-sel-link {
    padding: 0 20px;
    color: #3c3c3c;
    font-size: 14px;
    display: block;
    text-decoration: none;
}
.fav-floatbar .fav-search {
    width: 160px;
    float: right;
    margin-left: 10px;
    padding-top: 7px;
}
.fav-floatbar .fav-search-panel-fields {
    float: left;
    width: 129px;
    height: 27px;
    line-height: 27px;
    color: #9c9c9c;
    border: #dcdcdc 1px solid;
    border-right: none;
}
.fav-floatbar .search-combobox-input {
    height: 25px;
    line-height: 25px;
    text-indent: 5px;
    float: left;
}
.search-combobox-input {
    width: 100%;
    vertical-align: middle;
    background-color: #fff;
    border: 0;
    color: #000;
    overflow-y: visible;
    font-size: 12px;
}
.fav-floatbar .fav-search-button {
    float: left;
}
.fav-floatbar .fav-btn-search {
    display: block;
    height: 29px;
    line-height: 29px;
    width: 29px;
    background-color: #f5f5f5;
    color: #6c6c6c;
    border: #dcdcdc 1px solid;
    cursor: pointer;
    background-position: -20px -699px;
    text-indent: -9999px;
}
#fav-list {
    position: relative;
    z-index: 3;
}
.img-item-list {
    margin-right: -30px;
    overflow: hidden;
}
.fav-item {
    height: 226px;
    float: left;
    text-align: center;
    position: relative;
    margin-bottom: 14px;
}
.g-i-item {
    width: 150px;
    margin-right: 23px;
}
.fav-item .img-controller-box {
    border: #eee 1px solid;
    margin-bottom: 11px;
    height: 148px;
    overflow: hidden;
    position: relative;
}
.fav-item .img-controller-img-link {
    width: 148px;
    height: 148px;
    display: block;
    line-height: 145px;
}
.fav-item .img-controller-img {
    vertical-align: middle;
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
}
.delete-btn{
    position:absolute;
    top: 0;
    right: 0;
    height: 25px;
    width: 24px;
    cursor: pointer;
    background-color: #fff;
}
.fav-item .img-item-title {
    height: 23px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.fav-item .img-item-title-link {
    color: #3c3c3c;
    font-size: 12px;
    font-weight: 500;
}
.fav-item .knockdown, .fav-item .price-container {
    word-wrap: break-word;
    word-break: normal;
    height: 23px;
    line-height: 23px;
    overflow: hidden;
}
#mercury .g_price-box div {
    display: inline;
    color: #6c6c6c;
}
#mercury .g_price span {
    color: #f40;
    margin-right: 0;
}
#mercury .g_price strong {
    color: #f40;
    font-weight: 700;
    font-family: verdana,arial;
}
</style>
<script>

export default {
    name:'collectstore',
    data(){
        return{
            goods:''
        }
    },
    created:function(){
        this.$axios.get('/api/collect').then((res)=>{
            console.log(res)
            this.goods=res.data.data
        }).catch(err=>{

        })
    },
    methods:{
        getImgUrl(item){
            var url = 'http://58.87.77.5:8080/img/'+item
            return url
        },
        deleteStore(item){
            this.$axios.delete('/api/collect/'+item).then((res)=>{
                console.log(res)
                this.$router.go(0)
            }).catch(err=>{

            })
        },
        toDetail(item){
            this.$router.push({path:'/storedetail',query:item})
        },
    }
}
</script>