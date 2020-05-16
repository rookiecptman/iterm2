<template>
    <div class="login">
        <div class="login-header">
            <div class="login-logo">
                <img src="../assets/fzu.png">
            </div>
        </div>
        <div id="login-content">
            <div class="login-newbg"></div>
            <div class="content-layout">
                <div class="login-box-warp">
                    <div class="login-box loading">
                        <div id="login" class="width-vertical">
                            <div class="login-content nc-outer-box">
                                <div class="login-password">
                                    <div class="login-blocks login-switch-tab">
                                        <div>密码登录</div>
                                    </div>
                                    <form action="#" class="main-login-form">
                                        <div class="fm-field">
                                            <el-input type="text" name="email" v-model="email" placeholder="请输入邮箱" prefix-icon="el-icon-message"></el-input>
                                        </div>
                                        <div class="fm-field">
                                            <el-input type="text" name="password" placeholder="请输入密码" v-model="password" show-password prefix-icon="el-icon-key"></el-input>
                                        </div>
                                        <div class="fm-btn">
                                            <el-button type="primary" class="login-btn" @click="_login" style="width: 100%; height: 48px">登录</el-button>
                                        </div>
                                        <div class="login-blocks sns-login-links"></div>
                                        <div class="login-blocks login-links">
                                            <a href="/reset">忘记密码</a>
                                            <a href="/regist">免费注册</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as _ from '../util/index'
const REG_EAMIL = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
export default {
    name:'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        // 用户登录
        _login() {
            console.log(this)
            var data = {
                "email":this.email,
                "password":this.password
            }
            if(!data.email || !data.password){
                _.alert('请填写完整')
                return;
            }
            if(!REG_EAMIL.test(data.email)){
                _.alert('邮箱格式错误')
            }
            this.$axios.post('/api/login',JSON.stringify(data))
            .then(res => {
                if(res.status===200){
                    setTimeout(()=>{
                        this.$router.push('/');//跳转到主页界面
                    },1000)
                    _.loginInfo({
                        state:true,
                        token:res.data.data.token,
                        user:data.email
                    })
                    this.$cookie.set("state",true,"1d")
                    this.$cookie.set("token",res.data.data.token,"1d")
                    this.$cookie.set("user",data.email,"1d")
                    console.log(res)
                }else{
                    
                    _.alert(res.data.msg);
                }
            })
            .catch(err => {
                 _.alert('系统错误')
            })
            
        }
    }
}
</script>

<style >
.login-header {
    padding: 22px 0;
    height: 88px;
}
.login-logo {
    
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.login-logo img{
    display: block;
    float: left;
    width: 110px;
    height: 88px;
}
#login-content {
    width: 100%;
    position: relative;
}
.login-newbg {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    background-image: url(https://gtms01.alicdn.com/tps/i1/TB1GTCYLXXXXXcHXpXXcoeQ2VXX-2500-600.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    width: 100%;
    height: 600px;
}
.content-layout {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    height: 600px;
    z-index: 2;
}
.login-box-warp {
    position: absolute;
    top: 120px;
    right: 60px;
    width: 350px;
}
.login-box-warp .login-box {
    background-color: hsla(0,0%,100%,.9);
    position: relative;
}
.login-box {
    width: 350px;
    min-height: 350px;
    padding: 25px 25px 23px;
    color: #6c6c6c;
    background: #fff;
    position: relative;
    margin: 0 auto;
}
#login.width-vertical {
    margin-bottom: 0;
}.width-vertical {
    width: 100%;
}
.width-vertical .login-content {
    width: 100%;
    margin: 0 auto;
}
.nc-outer-box {
    padding-top: 2px;
}
.login-password .login-switch-tab{
    text-align: left;
    margin-bottom: 20px;
    margin-top: 4px;
}
.login-blocks {
    margin: 8px 0;
    text-align: right;
}
.login-switch-tab div{
    height: 18px;
    line-height: 5px;
    font-size: 16px;
    color: #3c3c3c;
    margin: 9px 10px 0 0;
    font-weight: 700;
    border-bottom: 2px solid #000;
}
.fm-field {
    position: relative;
    margin-bottom: 20px;
    font-size: 14px;
}
.fm-field /deep/ .el-input{
    height: 48px;
}
.fm-btn /deep/ .el-button{
    font-size: 16px;
}
.el-input /deep/ .el-input__inner{
    height: 48px;
}
.width-auto .fm-btn{
    width: 100%;
}
.sns-login-links {
    margin-top: 16px;
    margin-bottom: 0;
    height: 24px;
}
.login-links{
    margin-top: 16px;
    margin-bottom: 0;
}
.login-box a {
    color: #6c6c6c;
    font-size: 12px;
}
.login-blocks a {
    display: inline-block;
    margin-left: 10px;
}
</style>