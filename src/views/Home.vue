<template>
    <div class="home">
        <div class="header">
            <el-row :gutter="10" class="header-set">
                <el-col :xs="8" :sm="8" :md="7" :lg="2" :xl="6" offset="1">
                    <img class="header-img" src="../assets/fzu.png">
                </el-col>
                <el-col :xs="16" :sm="15" :md="15" :lg="14" :xl="14"><div class=""></div></el-col>
                <el-col :xs="0" :sm="1" :md="2" :lg="3" :xl="4"><div class=""></div></el-col>
            </el-row>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style>
.header{
    margin-top: 24px;
}
.header-img{
    width: 100%;
}
.header-set div{
    min-height: 36px;
}
</style>
    


<script>

export default {
  name: 'Home',

}
</script>
