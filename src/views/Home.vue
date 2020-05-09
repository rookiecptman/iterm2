<template>
    <div class="home">
        <div class="cup j-cup">
            <div class="top j-top">
                <div class="top-wrap clearfix">
                    <div class="fzu-logo j-module fzu-pass">
                        <img class="fzu-img" src="../assets/fzu.png">
                    </div>
                    <div class="fzu-search j-module">
                        <div class="search-top">
                            <el-menu class="el-menu-demo" mode="horizontal">
                                <el-menu-item index="1">淘宝</el-menu-item>
                                <el-menu-item index="2">天猫</el-menu-item>
                                <el-menu-item index="3">店铺</el-menu-item>
                            </el-menu>
                        </div>
                        <div class="search-input">
                            <el-input
                                placeholder="请输入内容"
                                prefix-icon="el-icon-search"
                                suffix-icon="el-icon-camera"
                                >
                            </el-input>
                        </div>
                        <div class="search-button">
                            <el-button type="warning" plain>主要按钮</el-button>
                        </div>
                        <div class="search-link">
                            <el-link href="https://element.eleme.io" target="_blank">新款连衣裙</el-link>
                            <el-link href="https://element.eleme.io" target="_blank">四件套</el-link>
                            <el-link href="https://element.eleme.io" target="_blank">时尚女鞋</el-link>
                            <el-link href="https://element.eleme.io" target="_blank">男士外套</el-link>
                        </div>
                    </div> 
                    <div class="fzu-qr-wrapper"></div>       
                </div>
            </div>
        </div>    
        <div class="fzu-nav j-module fzu-pass fzu-bg">
            <div class="nav j-nav clearfix" role="navigation">
                <h2>主题市场</h2>
                <ul class="nav-hd">
                    <li><el-link href="https://element.eleme.io" target="_blank">天猫</el-link></li>
                    <li><el-link href="https://element.eleme.io" target="_blank">聚划算</el-link></li>
                    <li><el-link href="https://element.eleme.io" target="_blank">天猫超市</el-link></li>
                </ul>
                <ul class="nav-bd">
                    <li class="pipe">|</li>
                    <li><el-link href="https://element.eleme.io" target="_blank">淘抢购</el-link></li>
                    <li><el-link href="https://element.eleme.io" target="_blank">电器城</el-link></li>
                    <li><el-link href="https://element.eleme.io" target="_blank">司法拍卖</el-link></li>
                    <li><el-link href="https://element.eleme.io" target="_blank">淘宝心选</el-link></li>
                    <li><el-link href="https://element.eleme.io" target="_blank">兴农脱贫</el-link></li>
                </ul>
                <ul class="nav-bd last">
                    <li class="pipe">|</li>
                    <li><el-link href="https://element.eleme.io" target="_blank">飞猪旅行</el-link></li>
                    <li><el-link href="https://element.eleme.io" target="_blank">智能生活</el-link></li>
                    <li><el-link href="https://element.eleme.io" target="_blank">苏宁易购</el-link></li>
                </ul>
            </div>  
        </div>
        <div class="screen-outer clearfix">
            <div class="main" role="main">
                <div class="fzu-service j-module">
                    <el-menu class="service-bd" >
                        <el-menu-item index="1">
                            <span slot="title">女装/男装/内衣</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <span slot="title">鞋靴/箱包/配件</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <span slot="title">童装玩具/孕产</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <span slot="title">家电/数码/手机</span>
                        </el-menu-item>
                        <el-menu-item index="5">
                            <span slot="title">美妆/护肤/保健品</span>
                        </el-menu-item>
                        <el-menu-item index="6">
                            <span slot="title">珠宝/眼镜/手表</span>
                        </el-menu-item>
                        <el-menu-item index="7">
                            <span slot="title">运动/户外/乐器</span>
                        </el-menu-item>
                        <el-menu-item index="8">
                            <span slot="title">游戏/动漫/影视</span>
                        </el-menu-item>
                        <el-menu-item index="9">
                            <span slot="title">美食/生鲜/零食</span>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div class="core j-core">
                    <el-carousel >
                        <el-carousel-item v-for="item in item1img" :key="item.index">
                            <img :src="item.url" class="main-show1 ms-img1" width="100%">
                        </el-carousel-item>
                    </el-carousel>
                    <el-carousel>
                        <el-carousel-item v-for="item in item2img" :key="item.index">
                            <img :src="item.url1"  width="50%">
                            <img :src="item.url2"  width="50%">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="sub-column">
                    <div class="fzu-focus j-module">
                        <img src="../assets/focus.png" width="100%">
                    </div>
                    <div class="hd-tanx hb-tanx-down">
                        <h5>今日热卖</h5>
                        <div class="tanx j-module">
                            <img src="../assets/tanx.png" width="100%">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-right" role="complementary">
                <div class="fzu-member">
                    <div class="member">
                        <div class="member-bd">
                            <div class="avatar-wrapper">
                                <img src="../assets/avatar.png" width="100%">
                            </div>
                            <span class="member-nick-info">
                                hi 你好
                            </span>
                            <p class="member-tjb"></p>
                        </div>
                        <div class="member-ft">
                            <div class="member-logout j-memberlogout">
                                <a href="/login">登录</a>
                                <a href="/regist">注册</a>
                                <a href="/">开店</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fzu-tip">
                    <img src="../assets/tip.png" width="100%">
                </div>
            </div>
        </div>
        <div class="layer clearfix">
            <div class="layer-inner clearfix">
                <div class="fzu-discover-goods j-module on">
                    <div class="goods-inner">
                        <h3 class="goods-hd mod-hd com-hd">
                            <img src="../assets/mlogo1.png" class="mlogo fl">
                            <p>
                                <span class="subtitle">与品质生活不期而遇</span>
                            </p>
                        </h3>
                        <ul class="list clearfix goods-list">
                            <a href="">
                                <div class="img-wrapper">
                                    <img src="../assets/img-w-1-1.png" width="100%">
                                </div>
                                <div class="info">
                                    <h4>大豆家 方头奶奶鞋</h4>
                                    <p>一脚蹬设计，方便日常穿</p>
                                    <p class="extra">
                                        3758 人说好
                                    </p >
                                </div>
                            </a>
                            <a href="">
                                <div class="img-wrapper">
                                    <img src="../assets/img-w-1-2.png" width="100%">
                                </div>
                                <div class="info">
                                    <h4>孩子早教中，这款早教</h4>
                                    <p>不同纹理小球，适合宝宝</p>
                                    <p class="extra"> 
                                        47 人说好
                                    </p>
                                </div>
                            </a>
                            <a href="">
                                <div class="img-wrapper">
                                    <img src="../assets/img-w-1-3.png" width="100%">
                                </div>
                                <div class="info">
                                    <h4>佳宝路转角水槽</h4>
                                    <p>304不锈钢，表面光洁坚固</p>
                                    <p class="extra">
                                        121人说好
                                    </p>
                                </div>
                            </a>
                            <a href="">
                                <div class="img-wrapper">
                                    <img src="../assets/img-w-1-4.png" width="100%">
                                </div>
                                <div class="info">
                                    <h4>Coca-Cola 可乐瓶T恤</h4>
                                    <p>简约的纯色基调，宣扬自由</p>
                                    <p>
                                        35 人说好
                                    </p>
                                </div>
                            </a>
                            <a href="">
                                <div class="img-wrapper">
                                    <img src="../assets/img-w-1-5.png" width="100%">
                                </div>
                                <div class="info">
                                    <h4>Bite 唇釉</h4>
                                    <p>简洁的深灰色包装，低调</p>
                                    <p class="extra">
                                        13 人说好
                                    </p>
                                </div>
                            </a>
                            <a href="">
                                <div class="img-wrapper">
                                    <img src="../assets/img-w-1-6.png" width="100%">
                                </div>
                                <div class="info">
                                    <h4>肖优秀真皮细高跟过膝</h4>
                                    <p>细跟尖头设计更显优雅女人</p>
                                    <p class="extra">
                                        68 人说好
                                    </p>
                                </div>
                            </a>
                        </ul>
                    </div>
                </div>
                <div class="fzu-shopping fl j-module">
                    <div class="shopping-inner">
                        <h3 class="shopping-hd mod-hd com-hd">
                            <img src="../assets/mlogo2.png" class="mlogo fl">
                            <p>
                                <span class="subtitle">献给聪明可爱的你</span>
                            </p>
                        </h3>
                        <ul class="list clearfix shopping-list">
                            <li>
                                <a href="">
                                    <div class="img-wrapper">
                                        <img src="../assets/img-w-2-1.png" width="100%">
                                    </div>
                                    <div class="info">
                                        <p class="subtitle">“2017新款潮女士双肩包韩版时尚休闲百搭pu软皮背</p>
                                        <div class="extra">
                                            <p class="name">时髦挖掘机</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div class="img-wrapper">
                                        <img src="../assets/img-w-2-2.png" width="100%">
                                    </div>
                                    <div class="info">
                                        <p class="subtitle">”美国爱蒂宝趴趴枕午睡枕学生午睡小神器</p>
                                        <div class="extra">
                                            <p class="name">爱逛01</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div class="img-wrapper">
                                        <img src="../assets/img-w-2-3.png" width="100%">
                                    </div>
                                    <div class="info">
                                        <p class="subtitle">“香港进口特产美心原味鸡蛋卷32大条礼盒装</p>
                                        <div class="extra">
                                            <p class="name">放飞自我的兔小姐</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="second">
                                <a href="">
                                    <div class="img-wrapper">
                                        <img src="../assets/img-w-2-4.png" width="100%">
                                    </div>
                                    <div class="info">
                                        <p class="subtitle">”秋冬季棉拖鞋包跟厚底情侣居家防滑保暖居家男女</p>
                                        <div class="extra">
                                            <p class="name">不喜勿扰哈</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="second">
                                <a href="">
                                    <div class="img-wrapper">
                                        <img src="../assets/img-w-2-5.png" width="100%">
                                    </div>
                                    <div class="info">
                                        <p class="subtitle">原创品牌日系学生单肩包百搭休闲文艺小清新</p>
                                        <div class="extra">
                                            <p class="name">时髦挖掘机</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="second">
                                <a href="">
                                    <div class="img-wrapper">
                                        <img src="../assets/img-w-2-6.png" width="100%">
                                    </div>
                                    <div class="info">
                                        <p class="subtitle">格莱达大容量保温杯男士保温壶户外不锈钢</p>
                                        <div class="extra">
                                            <p class="name">潮流女孩girl</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="main"></div>
        <div class="footer"></div>
    </div>
</template>

<style>
@media screen and (max-width: 1200px){
    .top .top-wrap {
        width: 990px;
        margin: 0 auto;
    }
    .top-wrap .fzu-search {
        margin-left: 218px;
        margin-right: 145px;
    }
    .fzu-nav .nav {
        width: 990px;
        margin: 0 auto;
    }
    .nav .last{
        display: none;
    }
    .home .screen-outer{
        width: 990px;
    }
    .screen-outer .main{
        width: 700px;
    }
    .main .core {
        width: 492px;
        overflow: hidden;
    }
    .main .sub-column{
        display: none;
    }
    .home .layer{
        width: 990px;
    }
    .layer-inner .fzu-discover-goods{
        width: 490px;
    }
    .layer-inner .fzu-shopping{
        width: 490px;
    }
    .goods-inner .goods-list a {
        width: 148px;
    }
    .fzu-discover-goods .img-wrapper {
        height: 148px;
        margin-top: 16px;
        margin-bottom: 16px;
    }
    .goods-inner .goods-list a .img-wrapper img {
        height: 148px;
    }
    .fzu-shopping .shopping-inner .list li {
        width: 148px;
    }
    .fzu-shopping .list li .img-wrapper {
        height: 148px;
        margin-top: 16px;
        margin-bottom: 16px;
    }
    .fzu-shopping .list li .img-wrapper img {
        height: 148px;
    }
}
.top{
    background-color: #fff;
    padding-top: 24px;
    height: 136px;
}
.top-wrap{
    width: 1190px;
    margin: 0 auto;
    position: relative;
}
.fzu-logo{
    float: left;
    width: 190px;
}
.fzu-img{
    width: 100%;
    height: 128px;
}
.j-module{
    min-height: 0;
    background-color: #fff;
}
.fzu-search{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 258px;
    margin-right: 302px;
}
.search-input{
    width: 80%;
}
.search-button{
    width: 20%;
    
}
.search-button .el-button{
    height: 48px;
}
.fzu-qr-wrapper{
    position: absolute;
    top: 0;
    right: 110px;
}
.fzu-bg{
    background-image: linear-gradient(to right,#ff9000 0,#ff5000 100%);
}
.nav {
    width: 1190px;
    margin: 0 auto;
}
.fzu-nav .nav{
    height: 30px;
    line-height: 30px;
    position: relative;
    color: #fff;
}
.fzu-nav h2 {
    float: left;
    width: 190px;
    text-align: center;
    font-size: 16px;
    background: #ff5000;
}
.fzu-nav .nav-hd {
    float: left;
    *display: inline;
    font-size: 16px;
    font-weight: 700;
}
.fzu-nav .nav-bd {
    float: left;
    *display: inline;
    font-size: 14px;
}
.fzu-nav ul {
    position: relative;
    z-index: 5;
}
ol, ul {
    list-style: none;
}
.fzu-nav .nav-bd li {
    margin-left: 7px;
}
.fzu-nav .nav-bd li, .fzu-nav .nav-hd li {
    position: relative;
}
.fzu-nav li {
    float: left;
    *display: inline;
}
.fzu-nav .nav-bd a, .fzu-nav .nav-hd a {
    float: left;
    *display: inline;
    padding: 0 5px;
    font-weight: 700;
}
.fzu-nav li .el-link{
    color: #fff;
}
.screen-outer {
    width: 1190px;
    margin: 0 auto;
    height: 522px;
}
.main {
    float: left;
    width: 900px;
    height: 100%;
    clear: left;
}
.fzu-service {
    position: relative;
    float: left;
    width: 190px;
}
.core {
    margin-left: 10px;
    margin-top: 10px;
    float: left;
    height: 512px;
    width: 520px;
}
.service-bd {
    border: 1px solid #ff5000;
    border-top: none;
    padding-top: 5px;
    padding-bottom: 3px;
}
.fzu-service /deep/ .el-menu{
    border-right: 1px solid #ff5000;
}
.sub-column {
    float: right;
    width: 160px;
    height: 512px;
    margin-right: 10px;
    margin-top: 10px;
}
.fzu-focus {
    overflow: hidden;
    height: 280px;
    background-color: #FFF;
}
.hb-tanx-down {
    margin-top: 1px;
    height: 230px;
}
.hd-tanx {
    overflow: hidden;
    height: 230px;
    background-color: #FFF;
}
.hb-tanx-down h5 {
    font-size: 12px;
    font-weight: 400;
    background: #f1f1f1;
    color: #a1a1a1;
    line-height: 14px;
    padding-top: 6px;
}
.col-right {
    float: right;
    width: 290px;
    height: 100%;
    margin-top: 10px;
    position: relative;
}
.fzu-member{
    width: 290px;
    height: 145px;
    background-color: #fff;
}
.member {
    padding: 3px 0 10px 0;
    height: 132px;
    padding-right: inherit;
    text-align: center;
    background-repeat: no-repeat;
}
.member-bd {
    position: relative;
    height: 91px;
}
.member-bd .avatar-wrapper {
    display: block;
    margin: 0 auto;
    width: 56px;
    height: 56px;
}
.avatar-wrapper img{
    border-radius: 50%;
}
.member-bd .member-nick-info {
    display: block;
    line-height: 17px;
    height: 17px;
}
.member-tjb {
    height: 17px;
    line-height: 17px;
}
.member-ft {
    height: 40px;
    overflow: hidden;
    margin-top: 2px;
    padding-left: 15px;
}
.member-logout {
    height: 25px;
    margin-top: 8px;
}
.member-logout a {
    float: left;
    line-height: 25px;
    width: 75px;
    margin-right: 15px;
    text-align: center;
    color: #FFF;
    background-image: linear-gradient(to right,#ff5000 0,#ff6f06 100%);
    background-repeat: repeat-x;
    border-radius: 4px;
    background-clip: padding-box;
    font-size: 14px;
    font-weight: 700;
}
.fzu-tip{
    width: 290px;
    min-height: 10px;
}
.layer {
    width: 1190px;
    margin: 0 auto;
}
.layer-inner {
    margin-top: 10px;
}
.fzu-discover-goods{
    position: relative;
}
.fzu-discover-goods, .fzu-shopping {
    width: 590px;
    float: left;
    height: 658px;
}
.com-hd {
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.mod-hd {
    position: relative;
}
.mod-hd .mlogo {
    height: 24px;
    margin-right: 5px;
}
.fl {
    display: inline;
}
.mod-hd p {
    line-height: 24px;
    height: 24px;
    color: #999;
    font-weight: 400;
}
.goods-list {
    overflow: hidden;
    padding-left: 21px;
}
.goods-list a {
    display: block;
    float: left;
    width: 180px;
    overflow: hidden;
    margin: 0 4px 17px 0;
}
.img-wrapper {
    background: #4f4f4f;
    overflow: hidden;
    height: 180px;
}
.goods-list a .info {
    overflow: hidden;
    padding: 0 4px 0 6px;
}
.goods-list a h4 {
    margin-top: 5px;
    font-size: 16px;
    height: 28px;
    overflow: hidden;
    line-height: 28px;
    font-weight: normal;
}
.goods-list a p {
    line-height: 24px;
    color: #999;
    font-size: 14px;
    overflow: hidden;
    height: 24px;
}
.goods-list a .img-wrapper img {
    width: 100%;
    height: 180px;
    display: block;
}
.goods-list a p.extra {
    line-height: 22px;
    height: 22px;
    margin-top: 12px;
    color: #35b1ff;
}
.fzu-shopping {
    width: 590px;
    float: left;
    margin-left: 10px;
    height: 658px;
}
.fzu-shopping .list {
    overflow: hidden;
    padding-left: 21px;
}
.shopping-inner .list li {
    float: left;
    width: 180px;
    overflow: hidden;
    margin: 0 4px 17px 0;
}
.fzu-shopping .list .info {
    overflow: hidden;
    padding-left: 10px;
}
.fzu-shopping .list .subtitle {
    margin-top: 11px;
    line-height: 22px;
    height: 44px;
    overflow: hidden;
    font-size: 14px;
    color: #999;
}
.fzu-shopping .list .extra {
    margin-top: 14px;
}
.fzu-shopping .list .name {
    margin-left: 30px;
    line-height: 22px;
    font-size: 12px;
    color: #999;
}
.fzu-shopping .list .img-wrapper img {
    width: 100%;
    height: 180px;
    display: block;
    background: #fff;
}
</style>
    


<script>

export default {
    name: 'Home',
    data() {
        return {
            item1img:[
                {url: require('../assets/item1.png')},
                {url: require('../assets/item2.png')},
                {url: require('../assets/item3.png')},
                {url: require('../assets/item4.png')}
            ],
            item2img:[
                {
                    url1: require('../assets/item1-1.png'),
                    url2: require('../assets/item1-2.png')
                },
                {
                    url1: require('../assets/item2-1.png'),
                    url2: require('../assets/item2-2.png')
                },
                {
                    url1: require('../assets/item3-1.png'),
                    url2: require('../assets/item3-2.png')
                },
                {
                    url1: require('../assets/item4-1.png'),
                    url2: require('../assets/item4-2.png')
                },
            ]
        }
    }
}

</script>