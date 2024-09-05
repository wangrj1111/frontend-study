//定义一个具有泛型约束的接口
interface Lengthwise{
    length:number;
}

//泛型函数，要求T 必须有length 属性
function logLength<T extends Lengthwise>(arg:T):T{
    console.log(arg.length);
    return arg;
}

// 使用泛型函数
logLength("Hello TypeScript!");// 输出: 16
logLength([1,2,3]);// 输出: 3
logLength({length:10,value:42});// 输出: 10