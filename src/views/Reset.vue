<template>
    <div class="page lang-zh-s">
        <div class="regist-header">
            <div class="regist-logo">
                <img src="../assets/fzu.png">
                <h2 class="tsl">重置密码</h2>
            </div>
        </div>
        <div class="steps steps-4">
            <el-steps :active="active" finish-status="success">
                <el-step title="验证邮箱"></el-step>
                <el-step title="重置密码"></el-step>
                <el-step title="重置成功"></el-step>
            </el-steps>
        </div>
        <div class="regist-content">
            <form action="#" class="main-register-form">
                <div class="form-list form-main-list" v-if="active===0">
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
                            <el-button class="form-next" @click="next" :disabled="pass1">下一步</el-button>
                        </div>
                        
                    </div>
                </div>
                <div class="form-list form-main-list" v-if="active===1">
                    <div class="form-group">
                        <div class="form-item">
                            <span class="form-label tsl">密码</span>
                            <el-input type="text"  class="text-input" placeholder="请输入密码" v-model="password" show-password prefix-icon="el-icon-key"></el-input>
                        </div>
                        <div class="form-item">
                            <span class="form-label tsl">确认密码</span>
                            <el-input type="text" class="text-input" placeholder="请确认密码" v-model="password1" show-password prefix-icon="el-icon-key"></el-input>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-item form-item-short">
                            <el-button class="form-next" @click="regist" :disabled="pass2" >下一步</el-button>
                        </div>
                        
                    </div>
                </div>
                <div class="form-list form-main-list" v-if="active===2">
                    
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
            email: '',
            password: '',
            password1:'',
            codeEmail: '',
            sendCode: false,
            timeOut: 60,
            active: 0,
        }
    },
    computed: {
        pass1:function(){
            if(this.$data.email&&this.$data.codeEmail){
                return false
            }
            else{
                return true
            }
        },
        pass2:function(){
            if(this.$data.password&&this.$data.password1){
                return false
            }
            else{
                return true
            }
        }
    },
    methods: {
        next() {
        if (this.active++ > 2) this.active = 0;
        },
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
                    },4000)
                    
                }else{
                    _.alert(res.data.msg);
                }
            })
            .catch(res => {
                 _.alert('邮件发送失败')
            });
            this.next()
        }
    }
}
</script>

<style >
</style>