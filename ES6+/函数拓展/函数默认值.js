function eat(food='苹果'){
    console.log(food)
}
eat()
eat('香蕉')

const myLog=(tag,...args)=>{console.log(`${tag}:`,args)}
myLog('水果','火⻰果')// 水果: [ '火⻰果' ]
myLog('零⻝','坚果','芒果干','辣条')// 零⻝: [ '坚果', '芒果干', '辣条' ]