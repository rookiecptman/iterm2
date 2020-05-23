<template>
    <div class="page lang-zh-s">
        <div class="regist-header">
            <div class="regist-logo">
                <img src="../assets/fzu.png">
                <h2 class="tsl">上传商品</h2>
            </div>
        </div>
        <div class="steps steps-4">
            <el-steps :active="active" finish-status="success">
                <el-step title="商品图片"></el-step>
                <el-step title="商品信息"></el-step>
                <el-step title="仓库信息"></el-step>
                <el-step title="上传成功"></el-step>
            </el-steps>
        </div>
        <div class="regist-content">
            <form action="#" class="main-register-form">
                <div class="form-list form-main-list" v-if="active===0">
                    <div class="form-group">
                        <div class="form-item">
                            <span class="form-label tsl">商品图片</span>
                            <el-upload
                                class="upload-demo"
                                drag
                                action="http://58.87.77.5:8080/api/upload"
                                :http-request="handleRequest"
                                list-type="picture"
                                >
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </div>
                        <div class="form-item"></div>
                        <div class="form-item"></div>
                        <div class="form-item"></div>
                        <div class="form-item"></div>
                        <div class="form-item"></div>
                    </div>
                    <div class="form-group">
                        <div class="form-item form-item-short">
                            <el-button class="form-next" @click="next" >下一步</el-button>
                        </div>
                    </div>
                </div>
                <div class="form-list form-main-list" v-if="active===1">
                    <div class="form-group">
                        <div class="form-item">
                            <span class="form-label tsl">商品名</span>
                            <el-input type="text"  class="text-input" v-model="name" placeholder="请输入商品名" prefix-icon="el-icon-s-shop"></el-input>
                        </div>
                        <div class="form-item">
                            <span class="form-label tsl">商品描述</span>
                            <el-input type="textarea" autosize class="text-input" placeholder="请输入内容" v-model="describe"></el-input>
                        </div>
                        <div class="form-item">
                            <span class="form-label tsl">价格</span>
                            <el-input type="number"  class="text-input" v-model="price" placeholder="请输入价格" step="0.01"></el-input>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-item form-item-short">
                            <el-button class="form-next" @click="next" :disabled="pass1" >下一步</el-button>
                        </div>
                        
                    </div>
                </div>
                <div class="form-list form-main-list" v-if="active===2">
                    <div class="form-group">
                        <div class="form-item">
                            <span class="form-label tsl">地址</span>
                            <el-input type="text"  class="text-input" v-model="addr" placeholder="请输入地址"></el-input>
                        </div>
                        <div class="form-item">
                            <span class="form-label tsl">邮费</span>
                            <el-input type="number"  class="text-input" v-model="deliver" placeholder="请输入邮费" step="0.01"></el-input>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-item form-item-short">
                            <el-button class="form-next" @click="regist" :disabled="pass2" >下一步</el-button>
                        </div>
                        
                    </div>
                </div>
                <div class="form-list form-main-list" v-if="active===3">
                    <div class="form-result"><h1 style="font-size:48px;">上架成功</h1></div>
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
            active:0,
            url:'',
            name:'',
            describe:'',
            price:0.00,
            addr:'',
            deliver:0.00,
        }
    },
    methods:{
        next() {
            if (this.active++ > 2) this.active = 0;
        },
        regist:function(){
            var me=this
            console.log(this.name)
            let data = {
                "price":this.$data.price,
                "deliver":this.$data.deliver,
                "name":this.$data.name,
                "describe":this.$data.describe,
                "url":this.$data.url,
                "addr":this.$data.addr
            }
            this.$axios.post('/api/good',JSON.stringify(data))
            .then(res => {
                console.log(res)
                if(res.data.code===200){
                    setTimeout(function(){
                        me.$router.push('/usermess');//跳转到登录界面
                    },4000)
                    this.next()
                }else{
                    _.alert(res.data.msg);
                }
            })
            .catch(res => {
            });
        },
        handleRequest (a) {
            console.log(a.file)
            var formdata = new FormData()
            formdata.append('file',a.file)
            let config = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
            this.$axios.post('/api/upload',formdata,config).then((res)=>{
                console.log(res)
                this.$data.url=res.data.data.name
            }).catch((err)=>{

            })
        }
    },
    computed: {
        pass1:function(){
            if(this.$data.name&&this.$data.price){
                return false
            }
            else{
                return true
            }
        },
        pass2:function(){
            if(this.$data.addr&&this.$data.deliver){
                return false
            }
            else{
                return true
            }
        },
    },
}
</script>
<style>
</style>