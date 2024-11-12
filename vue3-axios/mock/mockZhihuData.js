import Mock from 'mockjs'

//请求接口 ：http：//api.zhihu.com/hot
//返回一个包含10条数据的数组
Mock.mock('http://api.zhihu.com/hot','get',{
    "data|10": [{
       "id|+1":1,  //自增 从1开始
       title:"@ctitle(5,10)", //随机生成5-10个汉字的标题
       excerpt:"@paragraph(2,3)", //随机生成2-3段句子的简介
       url: '@url', //随机生成url
       img:"@image(200x100, #508347,#fff,img)",
      hotIndex: '@integer(100,5000)' 
    }
    ]
})

// 添加数据
Mock.mock("http://api.zhihu.com/hot","post",{
    message: "添加成功",
    data: {
        id:"@integer(11,100)",
        title: "新的标题",   
        excerpt: "新的内容" , 
        url: '@url',  // 随机生成连接
        img: 'https://wang-oss-study.oss-cn-nanjing.aliyuncs.com/b_a4367029f3600f2e1a62a3f8dcc733dc.jpg?Expires=1730167226&OSSAccessKeyId=TMP.3KdV5JqcMY7H9e1HjsRZ4JGJwiFVzQGccpq2924UdTv2guSeYRzREQP6kfFBaE7nfx5k8pjR3WRzKK2TwYeG7VfJb9M6cz&Signature=utinuypUTQJklVOK2rm4h1QEjEc%3D',
        hotIndex: "8888",
    }
});

// 更新数据
Mock.mock(/http:\/\/api.zhihu.com\/hot\/\d+/,"put",{
    message: "更新成功",

});

Mock.mock(/http:\/\/api.zhihu.com\/hot\/\d+/,"delete",{
    message: "删除成功",

});