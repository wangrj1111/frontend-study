function LogClass(constructor:Function){ 
    console.log(`Class ${constructor.name} is being created`)
}

//类装饰器用于修改类的行为或为类添加数据   

@LogClass
class MyClass{}