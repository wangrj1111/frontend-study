let obj={
    name:'李小龙',
    position:'香港',
    skill:'中国武术',
}

Object.defineProperty(obj,'skill',{enumerable:false,})     //此时skill不能被打印
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))