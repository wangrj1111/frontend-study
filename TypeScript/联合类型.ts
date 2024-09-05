var val1:string|number
var val2:object|null=null
var val3:string|number=123
console.log(val3.toString())
//如果联合类型中不存在共有属性时就会报错
// console.log(val3.length())

//类型断言
let val4:unknown='this is a string'
let steLength:number=(val4 as string).length

