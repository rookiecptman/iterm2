<template>
    <div class="reset">
        <el-container>
            <el-header class="header-reset" height="400px">
                <img src="../assets/chongzhi.png" width="20%">
            </el-header>
            <el-main class="main-reset">
                <div class="login-form">
                    <form action="#" class="main-reset-form">
                            <el-input type="text" style="width: 40%;"  v-model="email" placeholder="请输入邮箱" prefix-icon="el-icon-message"></el-input>  
                            <el-input type="text" style="width: 40%;"  placeholder="请输入密码" v-model="password" show-password prefix-icon="el-icon-key"></el-input>      
                            <el-input type="text" style="width: 40%;"  placeholder="请确认密码" v-model="password1" show-password prefix-icon="el-icon-key"></el-input>    
                            <div class="main-reset-form-code" style="width: 50%;">
                                <el-input type="text" style="width: 80%;" v-model="codeEmail" placeholder="请输入验证码" prefix-icon="el-icon-mobile-phone"></el-input>  
                                <el-button type="success" class="verifi-code" @click="getCodeEmail" v-if="!sendCode">获取验证码</el-button>
                                <el-button class="verifi-code readonly" v-if="sendCode">{{timeOut}}秒重新获取</el-button>
                            </div>
                            <el-button type="primary" class="login-btn" @click="regist">提交</el-button>
                    </form>
                </div>
            </el-main>
            <el-footer class="footer-reset">
                <div class="forgets">
                    <router-link to="/login"><el-button type="text">记起密码?登录>></el-button></router-link>
                </div>
                <div class="prompt">
                    <p>注：若未收到验证码，请查看垃圾箱</p>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import * as _ from '../util/index'
const REG_EAMIL = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
export default {
    name:'regist',
    data() {
        return {
            email: '',
            password: '',
            password1:'',
            codeEmail: '',
            sendCode: false,
            timeOut: 60
        }
    },
    computed: {
    },
    methods: {
        getCodeEmail () {
            let me = this;
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
            this.$axios.put('/api/code',JSON.stringify(data)).then(res => {
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
            if (this.password!=this.password1) {
                _.alert('密码不相同')
                return
            }
            let data = {
                "password":this.password,
                "email":this.email,
                "code":this.codeEmail
            }
            this.$axios.put('/api/user',JSON.stringify(data))
            .then(res => {
                console.log(res)
                if(res.data.msg){
                    setTimeout(function(){
                        me.$router.push('/login');//跳转到登录界面
                    },1000)
                    
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

<style >
.header-reset{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.main-reset-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.main-reset-form-code{
    margin-left: 10%;
}
.footer-reset{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.footer-reset{
    margin: 0 16%;
}
</style>