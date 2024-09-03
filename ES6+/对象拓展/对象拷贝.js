// //浅拷贝
// let a={name:'后端'}
// let b=a 
// b.name='前端'
// console.log(a)
// console.log(b)

//深拷贝
let obj={
  name:'电影',
  category:{
    cartoon:'',
    kunfu:'功夫',
    love:'',
  },
  platform:['腾讯视频','爱奇艺','优酷']
}
//对象的序列化和反序列化
let obj2=JSON.parse(JSON.stringify(obj))
obj2.category.kunfu='修仙'
obj2.platform[2]='哔哩哔哩'

console.log(obj.category.kunfu,obj.platform[2])
console.log(obj2.category.kunfu,obj2.platform[2])