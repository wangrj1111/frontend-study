//定义一个具有默认泛型类型的函数
function createArray<T =string>(length:number,value:T):T[]{
    return Array(length).fill(value);
}

//使用泛型函数
let stringArray=createArray(3,"hello")
let numberArray=createArray<number>(3,42);

console.log(stringArray)  // 输出: ["Hello", "Hello", "Hello"]
console.log(numberArray)// 输出: [42, 42, 42]