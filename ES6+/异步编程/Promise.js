// promise 包裹了一个异步请求 
 const myRequest = new Request();
const promise =new Promise((resolve,reject)=>{
    myRequest({
        url:'http://xxx.com',
        conSuccess(data){
            resolve(data)
        },
        onError(err){
            reject(err)
        }
    })
})

//使用promise
promise.then((data)=>{
    console.log(data)
}) 
  .catch((err)=>{
    console.log(err)
  })
  .finally(()=>{
    console.log('完成')
  })