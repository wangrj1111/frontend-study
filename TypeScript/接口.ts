interface StudentType{
    id:number
    name:string
    desc?:string
}

const student:StudentType ={
    id:1,
    name:'小明',
    desc:'三好学生',
}
//  student 赋值时必须遵循StudentTyp 类型的规定，不规范的一律报错

//多层嵌套
interface BeseTyper{
    value:number
    label:string
}

interface ListType{
    tag:string
    list:BeseTyper[]
}

const citys:ListType={
    tag:'搞笑',
    list:[
        {
            value:1,
            label:'清华大学',
        },
        {
            value:2,
            label:'南京工业职业技术大学',
        }
    ]
}
console.log(citys)