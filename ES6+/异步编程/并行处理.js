var promise1,promise2 =new Promise()
// promise.all 触发所有的then方法
//promise.race 最快的一个请求完成触发then 方法
Promise.all({
    promise1,
    promise2,
}).then(([res1,res2]) => {
    console.log(res1,res2)
})

Promise.race({
    promise1,
    promise2,
}).then((res)=>{
    console.log(res)
})

const getRes =async()=>{
    try{
        let res =await fetch('http://xxx.json')
        console.log(res)
    } catch(error){
        console.log(error)
    }
}