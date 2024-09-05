interface Pair<T,U>{
    first:T;
    second:U;
}

//使用泛型接口
let pair1:Pair<string,number>={first:"one",second:1}
let pair2:Pair<boolean,string>={first:true,second:"True"}

console.log(pair1);
console.log(pair2);
