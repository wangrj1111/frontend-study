const path= require('path')
console.log(path.resolve(__filename))

//REPL 模式 

 const argv =process.argv
//  console.log('参数',argv)
console.log(argv.slice(2))