<template>
    <div class="page lang-zh-s">
        <div class="regist-header">
            <div class="regist-logo">
                <img src="../assets/fzu.png">
                <h2 class="tsl">申请商家</h2>
            </div>
        </div>
        <div class="steps steps-4">
            <el-steps :active="active" finish-status="success">
                <el-step title="申请信息"></el-step>
                <el-step title="注册成功"></el-step>
            </el-steps>
        </div>
        <div class="regist-content">
            <form action="#" class="main-register-form">
                <div class="form-list form-main-list" v-if="active===0">
                    <div class="form-group">
                        <div class="form-item">
                            <span class="form-label tsl">店铺名</span>
                            <el-input type="text"  class="text-input" v-model="name" placeholder="请输入店铺名" prefix-icon="el-icon-s-shop"></el-input>
                        </div>
                        <div class="form-item">
                            <span class="form-label tsl">店铺描述</span>
                            <el-input type="textarea" autosize class="text-input" placeholder="请输入内容" v-model="describe"></el-input>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-item form-item-short">
                            <el-button class="form-next" @click="regist" :disabled="pass" >下一步</el-button>
                        </div>
                        
                    </div>
                </div>
                <div class="form-list form-main-list" v-if="active===1">
                    <div class="form-result"><h1 style="font-size:48px;">申请成功</h1></div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import * as _ from '../util/index'
export default {
    name:'merchant',
    data() {
        return {
            name:'',
            describe:'',
            active:0
        }
    },
    methods:{
        next() {
            if (this.active++ > 1) this.active = 0;
        },
        regist:function(){
            console.log(this.name)
            let data = {
                "name":this.name,
                "describe":this.describe
            }
            this.$axios.post('/api/merchant',JSON.stringify(data))
            .then(res => {
                console.log(res)
                if(res.data.code===200){
                    this.$cookie.set("merchant",this.$data.name,"1d")
                    _.merchant(this.$data.name)
                    setTimeout(function(){
                        this.$router.push('/');//跳转到登录界面
                    },4000)
                    this.next()
                }else{
                    _.alert(res.data.msg);
                }
            })
            .catch(res => {
                 _.alert('邮件发送失败')
            });
        }
    },
    computed: {
        pass:function(){
            if(this.$data.name&&this.$data.describe){
                return false
            }
            else{
                return true
            }
        }
    },
}
</script>
<style>
.form-item .form-next{
    height: 48px;
}
</style>