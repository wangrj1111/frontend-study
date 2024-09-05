function identity<T>(arg:T):T{
    return arg;
}

//使用泛型函数
let output1=identity<string>("Hello TypeScript!"); 

let output2=identity<number>(42);

console.log(output1)
console.log(output2)