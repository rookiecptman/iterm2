<template>
    <div class="chat-wrapper" v-if="isShow">
        <div class="chat-main" draggable="true">
            <div class="chat-header">
                <i id="btn_close" class="el-icon-close" @click="closeChat"></i>
                <div class="chat-service-info">
                    <a class="chat-service-img"></a>
                    <div class="chat-service-title">
                        <p class="chat-service-name">{{merchant}}</p>
                        <p class="chat-service-detail">我是您的专属客服</p>
                    </div>
                </div>
            </div>
            <div id="chat_contain" class="chat-contain">
                <p class="chat-service-contain" v-for="(item, index) of severmessages" :key="index">
                    <span class="chat-time">{{item.date}}</span>
                    <span class="chat-text chat-service-text">{{item.message}}</span>
                </p>
                <p class="chat-you-contain" v-for="(item, index) of mymessages" :key="index">
                    <span class="chat-time">{{item.date}}</span>
                    <span class="chat-text chat-you-text">{{item.message}}</span>
                </p>
            </div>
            <div class="chat-submit">
                <p id='chatHint' class="chat-hint"><span class="chat-hint-icon">!</span><span class="chat-hint-text">发送内容不能为空</span></p>
                <textarea id="chat_input" class="chat-input-text" autofocus placeholder="请输入您想对我说的话" v-model="message"></textarea>
                <div class="chat-input-tools">
                    <button class="chat-input-button" @click="sendMess">发送</button>
                    <button class="chat-close-button" @click="closeChat">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style >
.chat-wrapper {
    font-size: 14px;
    color: #fff;

}
/* 对话框*/
.chat-main {
    position: fixed;
    /* display: none; */
    top: 100px;
    right: 0;
    width: 650px;
    height: 800px;
    border-radius: 4px; 
    box-shadow: 0 0 5px rgba(0, 0, 0, .4);
    z-index: 1000000000000000;
    background-color: #fff;
} 
 
/*对话框头部*/
.chat-header {
    position: relative;
    padding: 10px;
    height: 80px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    background-color: #cc3333;
}
.chat-header a:hover{
	cursor:pointer;
}
.chat-close {
    position: absolute;
    top: 10px;
    right: 20px;
    padding: 2px;
    font-size: 22px;
    transform: rotate(90deg);
    cursor: pointer;
}
 
.chat-service-info {
    position: relative;
    top: 50%;
    margin-top: -20px; 
    height: 40px;
}
 
.chat-service-img {
    display: inline-block;
    margin: 0 10px 0 20px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    vertical-align: middle;
    color: #000;
    border-radius: 50%;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .2);
}
 
.chat-service-title {
    display: inline-block;
    vertical-align: middle;
}
 
.chat-service-detail {
    font-size: 12px;
}
 
/*对话框内容*/
.chat-contain {
    overflow-y: auto;
    padding: 10px;
    height: 580px;
    word-wrap: break-word;
    background-color: #f9f9f9;
}
 
.chat-text {
    display: inline-block;
    position: relative;
    padding: 10px;
    max-width: 120px;
	color:black;
    white-space: pre-wrap;
    border: 1px solid #ffff7d;
    border-radius: 4px;
    background-color: #ffff7d;
    box-sizing: border-box;
	
}
.chat-time{
	color:#939393;
	font-size:12px;
}
.chat-service-contain {
    margin-bottom: 10px;
    text-align: left;
}
.chat-service-contain .chat-time{
	margin:0 0 0 37px;
} 
.chat-address{
	display:inline-block;
	max-width:100px;
	white-space:pre-wrap;
}
.chat-service-text {
    margin-left:40px;
}
.chat-service-text:before {
    content: '';
    position: absolute;
	top: 50%;
    left:-48px;
	width:35px;
	height:36px;
	border:1px solid transparent;
	border-radius:50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
}
.chat-you-contain {
    margin-bottom: 10px;
    text-align: right;
	/* float:right; */
}
.chat-you-contain .chat-time{
	margin:0 20px 0 0;
}
.chat-you-text {
    margin-right: 20px;
	text-align:left;
}
 
.chat-you-text:after {
    content: '';
    position: absolute;
    top: 50%;
    right: -10px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 10px solid #ffff7d;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
}
/*客服对话框底部与输入*/
.chat-submit {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 650px;
    padding: 10px;
    height: 100px;
    color: #000;
    word-wrap: break-word;
    border-top: 1px solid #ddd;
    box-sizing: border-box;
}
 
/*空输入提示*/
.chat-hint {
	display:none;
    position:absolute;
    top: -15px;
    left: 20px;
    padding: 2px;
    width: 140px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    line-height: 18px;
    border: 1px solid #ddd;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .4);
    background-color: #fff;
}
 
.chat-hint-icon {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 5px;
    font-size: 14px;
    font-style: italic;
    font-weight: 700;
    vertical-align: middle;
    line-height: 18px;
    color: #fff;
    border-radius: 50%;
    background-color: #5d94f3
}
 
.chat-hint-text {
    display: inline-block;
    vertical-align: middle;
}
 
/*输入框*/
.chat-input-text {
    overflow-y: auto;
    display: inline-block;
    padding: 5px 10px;
    width: 100%;
    height: 70px;
    vertical-align: middle;
    white-space: pre-wrap;
    word-wrap: break-word;
    resize: none;
    box-sizing: border-box;
}
 
.chat-input-tools {
	position:absolute;
    width: 100%;
    height:30px;
	margin:-25px 0 0 400px;
    vertical-align: middle;
}
button{
	width:62px;
	height:28px;
	border-radius:4px;
	background-color: #cc3333;
	margin:5px 0;
}
.chat-input-tools>button:hover{
	cursor:pointer;
}
</style>
<script>
import * as _ from '../util/index'
export default {
    props:['merchant','isShow'],
    name:'chat',
    data(){
        return{
            mymessages:[],
            message:'',
            severmessages:[],
            uid:'',
        }
    },
    created:function(){
        this.$axios.get(this.getUrl(this.merchant))
        .then(res => {
            console.log(res)
            this.$data.uid=res.data.data.uid
        })
        .catch(res => {
        });
    },
    watch:{
        '$store.state.message':function(){
            this.severmessages.push(this.$store.state.message)
        }
    },
    methods:{
        getUrl(item){
            var url = 'http://58.87.77.5:8080/api/merchant?merchant='+item
            return url
        },
        sendMess(){
            let date =new Date()
            let newmessage={
                "to":this.uid,
                "message":this.message,
                "date":date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
            }
            this.mymessages.push(newmessage)
            console.log(this.mymessages)
            let data={
                "to":this.uid,
                "message":this.message
            }
            this.message=''
            console.log(data)
            _.webSocketSend(data)
        },
        closeChat(){
            this.isShow=false
        }
    }
}
</script>