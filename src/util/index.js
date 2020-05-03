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