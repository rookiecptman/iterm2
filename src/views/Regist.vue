<template>  
    <div class="page lang-zh-s">
        <div class="header">
            <div class="logo">
                <img src="../assets/fzu.png">
                <h2 class="tsl">用户注册</h2>
            </div>
        </div>
        <div class="steps steps-4">
            <el-steps :active="active" finish-status="success">
                <el-step title="验证邮箱"></el-step>
                <el-step title="设置账户信息"></el-step>
                <el-step title="注册成功"></el-step>
            </el-steps>
        </div>
        <div class="content">
            <form action="#" class="main-register-form">
                <div class="form-list form-main-list" v-if="false">
                    <div class="form-group">
                        <div class="form-item">
                            <span class="form-label tsl">邮箱号</span>
                            <el-input class="text-input" type="text"  v-model="email" placeholder="请输入邮箱" prefix-icon="el-icon-message"></el-input>
                        </div>
                        <div class="form-item">
                            <span class="form-label tsl">验证</span>
                            <el-input type="text" class="code-input" v-model="codeEmail" placeholder="请输入验证码" prefix-icon="el-icon-mobile-phone"></el-input>  
                            <el-button type="success" class="verifi-code" @click="getCodeEmail" v-if="!sendCode">获取验证码</el-button>
                            <el-button class="verifi-code readonly" v-if="sendCode">{{timeOut}}秒重新获取</el-button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-item form-item-short">
                            <el-button class="form-next" @click="next" disabled >下一步</el-button>
                        </div>
                        
                    </div>
                </div>
                <div class="form-list form-main-list" v-if="true">
                    <div class="form-group">
                        <div class="form-item">
                            <span class="form-label tsl">用户名</span>
                            <el-input type="text"  class="text-input" v-model="username" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
                        </div>
                        <div class="form-item">
                            <span class="form-label tsl">密码</span>
                            <el-input type="text" class="text-input" placeholder="请输入密码" v-model="password" show-password prefix-icon="el-icon-key"></el-input>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-item form-item-short">
                            <el-button class="form-next" @click="regist" disabled >下一步</el-button>
                        </div>
                        
                    </div>
                </div>
                <div class="form-list form-main-list" v-if="false">
                    
                </div>
            </form>
        </div>
    </div>
    
</template>

<script>
import * as _ from '../util/index'
const REG_EAMIL = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
export default {
    name:'regist',
    data() {
        return {
            username:'',
            email: '',
            password: '',
            codeEmail: '',
            sendCode: false,
            timeOut: 60,
            active: 0
        }
    },
    computed: {
    },
    methods: {
        next() {
        if (this.active++ > 2) this.active = 0;
        },
        getCodeEmail () {
            let me = this;
            if (!this.username) {
                _.alert('用户名不能为空')
                return
            }
            if (!this.password) {
                _.alert('请输入密码')
                return
            }
            if (!this.email) {
                _.alert('请输入邮箱')
                return
            }
            if(!REG_EAMIL.test(this.email)){
                _.alert('邮箱格式错误');
                return 
            }
            var data = {
                    "email": this.email
            }
            this.$axios.post('/api/code',JSON.stringify(data)).then(res => {
                console.log(res)
                if(res.data.msg){
                    me.sendCode = true;
                    me.timeOut = 60;
                    me.setTimeOut()
                }else{
                    _.alert('系统错误')
                }
            }).catch(res => {
                    _.alert('系统错误')
            });
        },
        setTimeOut () {
            let me = this;
            let timer = setTimeout(() => {
                if(me.timeOut < 0) return;
                me.timeOut--
                me.setTimeOut()
            }, 1000)
            if(me.timeOut <= 0) {
                me.sendCode = false;
            }
        },
        regist () {
            var me = this;
            if (!this.email || !this.password || !this.codeEmail) {
                alert('请填写完整')
                return
            }
            if(!REG_EAMIL.test(this.email)){
                _.alert('邮箱格式错误');
                return 
            }
            if(this.password.length <　6 || this.password.length > 16){
                _.alert('密码长度6-16之间');
                return
            }
            if(/^\d$/.test(this.password)){
                _.alert('密码不能全为数字');
            }
            this.next();
            let data = {
                "username": this.username,
                "password":this.password,
                "email":this.email,
                "code":this.codeEmail
            }
            this.$axios.post('/api/user',JSON.stringify(data))
            .then(res => {
                console.log(res)
                if(res.data.msg){
                    setTimeout(function(){
                        me.$router.push('/login');//跳转到登录界面
                    },4000)
                    
                }else{
                    _.alert(res.data.msg);
                }
            })
            .catch(res => {
                 _.alert('邮件发送失败')
            });
        }
    }
}
</script>

<style>

.page {
    width: 1190px;
    margin: 0 auto;
    color: #3c3c3c;
    font: 400 12px/1.6;
}
.header {
    position: relative;
    height: 43px;
    padding: 40px 0;
}
.logo {
    display: inline-block;
}
.logo img {
    display: inline-block;
    width: 106px;
    height: 64px;
    overflow: hidden;
    vertical-align: middle;
}
.logo h2 {
    display: inline-block;
    height: 43px;
    line-height: 43px;
    margin-left: 6px;
    font-size: 22px;
    font-weight: 400;
    vertical-align: middle;
}
.steps {
    height: 64px;
    position: relative;
    width: 720px;
    margin: 0 auto;
}
.content {
    padding: 50px 0;
}
.form-main-list {
    width: 720px;
}
.form-list {
    margin: 0 auto;
    font-size: 14px;
}
.form-group {
    padding: 10px 0;
}
.form-item {
    padding: 10px 0 10px 260px;
    line-height: 36px;
    height: 40px;
}
.form-item .form-label {
    display: inline;
    float: left;
    margin-left: -240px;
    width: 220px;
    height: 40px;
    line-height: 40px;
    text-align: right;
}
.form-item /deep/ .text-input {
    width: 340px;
    float: left;
    position: relative;
}
.form-item /deep/ .code-input{
    width: 220px;
}
.form-item /deep/ .verifi-code{
    width: 120px;
}
.form-item /deep/ .form-next{
    width: 180px;
}
.form-item-short {
    padding-top: 0;
    padding-bottom: 0;
}
.header-register{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.main-register-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.main-register-form-code{
    margin-left: 10%;
}
.footer-register{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.footer-register{
    margin: 0 16%;
}
</style>