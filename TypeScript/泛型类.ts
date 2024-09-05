//定义一个泛型类
class GenericNumber<T>{
    zeroValue:T;
    //声明变量
    add:(x:T,y:T)=>T;

    constructor(zeroValue:T,addFn:(x:T,y:T)=>T){
        this.zeroValue=zeroValue;
        this.add=addFn;
    }
}

//使用泛型类

let myGenericNumber=new GenericNumber<number>(0,(x,y)=>x+y);
console.log(myGenericNumber.add(5,10));

let myGenericString=new GenericNumber<string>("",(x,y)=>x+y);
console.log(myGenericString.add("hello,","world!"));
