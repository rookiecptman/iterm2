import store from '../store'


export function alert(str) {
    store.dispatch('showAlert', true)
    store.dispatch('alertMsg', str)
    setTimeout(() => {
        store.dispatch('showAlert', false); 
    },3000);
}

export function loginInfo(obj) {
    store.dispatch('loginInfo', obj);
}

export function merchant(state){
    store.dispatch('merchant',state)
}
var  ws = null;
export function initWebSocket(uid) {
    console.log(uid)
    var url="ws://58.87.77.5:8080/websocket/"+uid
    console.log(url)
    ws = new WebSocket(url);
    // 连接成功发送用户信息给后端
    ws.onopen = function() {
        console.log()
    };
    // 收到消息保存到vuex
    ws.onmessage = function(event) {
        store.commit("COM_SET_MESSAGE", event.data);
        console.log(event);
    };
    // 断开连接后进行重连
    ws.onclose = function(event) {
        console.log(event);
        setTimeout(() => {
            initWebSocket(uid);
        },5000);
        
    };
}
export function webSocketSend(data) {
    console.log(data)
    ws.send(data);  
}