<template>
    <div class="login">
        <el-container>
            <el-header class="header-login" height="400px">
                <img src="../assets/fzu.png" width="10%"/>
            </el-header>
            <el-main class="main-login">
                <div class="login-form">
                    <form action="#" class="main-login-form">
                        <el-input type="text" name="email" style="width: 40%;" v-model="email" placeholder="请输入邮箱" prefix-icon="el-icon-message"></el-input>   
                        <el-input type="text" name="password" style="width: 40%;" placeholder="请输入密码" v-model="password" show-password prefix-icon="el-icon-key"></el-input>  
                        <el-button type="primary" class="login-btn" @click="_login" style="width: 40%;">登录</el-button>
                    </form>
                </div>
            </el-main>
            <el-footer class="footer-login">
                    <router-link to="/reset"><el-button type="text">忘记密码</el-button></router-link>
                    <router-link to="/regist"><el-button type="text">注册</el-button></router-link>
            </el-footer>
        </el-container>
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
.header-login{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.main-login-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.footer-login{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.footer-login a{
    margin: 0 8%;
}
</style>