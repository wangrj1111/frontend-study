const fs=require('fs')
fs.readFile ('C:\Users\wang\OneDrive\Desktop\frontend-study\NodeJS\内置模块\text.txt',
    'utf-8',
   (err,data)=>{
    console.log('文件内容是：',data)
}
)

//同步写入文件
try{
    let content='新的文件内容'
    fs.writeFileSync(
        'C:\Users\wang\OneDrive\Desktop\frontend-study\NodeJS\内置模块\text.txt',
        content
    )
}catch(err){
    console.error(err)
}

try{
    let status=fs.statSync(
        'C:\Users\wang\OneDrive\Desktop\frontend-study\NodeJS\内置模块\text.txt',
    )
    console.log(status.isFile())
    console.log(status.isDirectory)
    console.log(status.size)
}catch(err){
    console.error(err)
}