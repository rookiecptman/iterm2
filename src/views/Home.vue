<template>
    <div class="home">
        <div class="header">
            <el-row :gutter="0" class="header-set" type="flex" justify="center" align="middle">
                <el-col :xs="8" :sm="8" :md="7" :lg="2" :xl="6" >
                    <img class="header-img" src="../assets/fzu.png">
                </el-col>
                <el-col :xs="8" :sm="8" :md="7" :lg="1" :xl="6" >
                </el-col>
                <el-col :xs="16" :sm="15" :md="15" :lg="10" :xl="14" class="header-search">
                    <div>
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                            <el-menu-item index="1">淘宝</el-menu-item>
                            <el-menu-item index="2">天猫</el-menu-item>
                            <el-menu-item index="3">店铺</el-menu-item>
                        </el-menu>
                    </div>
                    <div class="header-input">
                        <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            suffix-icon="el-icon-camera"
                            v-model="input">
                        </el-input>
                    </div>
                    <div class="header-button">
                        <el-button type="warning" plain>主要按钮</el-button>
                    </div>
                    <div class="header-link">
                        <el-link href="https://element.eleme.io" target="_blank">新款连衣裙</el-link>
                        <el-link href="https://element.eleme.io" target="_blank">四件套</el-link>
                        <el-link href="https://element.eleme.io" target="_blank">时尚女鞋</el-link>
                        <el-link href="https://element.eleme.io" target="_blank">男士外套</el-link>
                    </div>
                </el-col>
                <el-col :xs="0" :sm="1" :md="2" :lg="3" :xl="4"><div class=""></div></el-col>
            </el-row>
        </div>
        <div class="line">
            <el-row :gutter="0" type="flex" justify="center">
                <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1">
                    <div class="line-main lm-theme">主题市场</div>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="4" :xl="11">
                    <div class="line-main lm-tianmao">
                        <div>天猫</div>
                        <div>聚划算</div>
                        <div>天猫超市</div>
                    </div>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="5" :xl="11">
                    <div class="line-main ">
                        <div>淘抢购</div>
                        <div>电器城</div>
                        <div>司法拍卖</div>
                        <div>淘宝心选</div>
                        <div>兴农脱贫</div>
                    </div>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="5" :xl="1">
                    <div class="line-main ">
                        <div>飞猪旅行</div>
                        <div>智能生活</div>
                        <div>苏宁易购</div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="main">
            <el-row :gutter="0" type="flex" justify="center">
                <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1">
                    <div class="main-guide">
                        <el-menu default-active="taobao" class="main-menu-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
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
                        </el-menu>
                    </div>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <div class="main-show">
                        <el-carousel class="main-show ms-context1">
                            <el-carousel-item v-for="item in itemimg" :key="item.index">
                                <img :src="item.url" class="main-show ms-img">
                            </el-carousel-item>
                        </el-carousel>
                        <el-carousel class="main-show ms-context2">
                            <el-carousel-item v-for="item in itemimg" :key="item.index">
                                <img :src="item.url" class="main-show ms-img">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="2" :xl="11">
                    <div class="main-avter">
                        
                    </div>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="1">
                    <div class="main-user">
                        
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="main"></div>
        <div class="main"></div>
        <div class="footer"></div>
    </div>
</template>

<style>
.header{
    margin-top: 24px;
}
.header-img{
    width: 100%;
}
.header-search{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.header-input{
    width: 80%;
}
.header-button{
    width: 20%;
}
.header-link{
    width: 100%;
}
.header-link a{
    margin: 0 1%;
}
.header-set div{
    min-height: 36px;
}
.line{
    background: orange;
}
.lm-theme{
    background: orangered;  
}
.line-main {
    min-height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#ffffff;
}
.line-main div{
    color:#ffffff;
    margin: 0 2%;
}
.main-menu-demo{
    border:1px solid orangered ;
}
.main-guide /deep/ .main-menu-demo{
    border-right:1px solid orangered;
}
.main-show{
    margin: 2px 2px;
}
.ms-context1{
    min-height: 36px;
}
.ms-img{
    width: 100%;
}
</style>
    


<script>

export default {
    name: 'Home',
    data() {
        return {
            itemimg:[
                {url: require('../assets/item1.png')},
                {url: require('../assets/item2.png')},
                {url: require('../assets/item3.png')},
                {url: require('../assets/item4.png')}
            ] 
        }
    }
}

</script>