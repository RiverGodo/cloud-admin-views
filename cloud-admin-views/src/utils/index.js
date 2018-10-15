
import axios from 'axios'
import Vue from 'vue';
import { Message } from 'element-ui';
import router from '../router/index'


const baseURL = '/api/admin'

var instance = axios.create({
    baseURL,
    timeout: 10000,
});

const xhr = {
    get(url,data,config){
        return new Promise((resolve,reject) =>{
            instance.get(url,{params:data},config).then(res=>{
                if(res.data.code == 401){
                   console.log("登录失效get")
                   Message.warning('登录状态失效，正在跳转。。。');
                   router.push('/login')
                }
                resolve(res.data)
            }).catch(err=>{
                reject('err:'+err)
            })
        })
       
    },

    post(url,data,config){
        return new Promise((resolve,reject) =>{
            instance.post(url,data,config).then(res=>{
                console.log(res.data.code == 401)
                if(res.data.code == 401){
                    console.log("登录失效post")
                    Message.warning('登录状态失效，正在跳转。。。');
                    router.push('/login')
                 }
                resolve(res.data)
            }).catch(err=>{
                reject('err:'+err)
            })
        })
    },

    fetch(url,data,config,methods){
        return new Promise((resolve,reject) =>{
            instance[methods](url,data,config).then(res=>{
                if(res.data.code == 401){
                    console.log("登录失效fetch")
                    Message.warning('登录状态失效，正在跳转。。。');
                    router.push('/login')
                 }
                resolve(res.data)
            }).catch(err=>{
                reject('err:'+err)
            })
        })
    },
    put(url,data,config){
        return this.fetch(url,data,config,'put')
    },
    delete(url,data,config){
        return this.fetch(url,data,config,'delete')
    }


}

export const $axios = xhr


