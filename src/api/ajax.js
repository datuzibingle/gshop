/*
ajax请求函数模块
返回值：promise对象(异步返回的数据是：response.data)
* */
import axios from 'axios'
export default function ajax(url,data={},type='GET'){

  return  new Promise(function (resolve,reject){

    let promise
    if(type === 'GET'){
      //  准备url query参数数据
      let dataStr = ''  //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if(dataStr !== ''){
        //从字符串中截取指定内容,第一个是起始索引，第十个是结束索引(不包括)
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    }else {
      promise = axios.post(url,data)
    }

    promise.then(function (response){
      resolve(response.data)
    }).catch(function (error){
      reject(error)
    })

  })
  let promise
  if(type === 'GET'){
    //  准备url query参数数据
    let dataStr = ''  //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })
    if(dataStr !== ''){
      //从字符串中截取指定内容,第一个是起始索引，第十个是结束索引(不包括)
      dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
    //发送get请求
    promise = axios.get(url)
  }else {
    promise = axios.post(url,data)
  }
}


