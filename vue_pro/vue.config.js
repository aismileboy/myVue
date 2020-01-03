// 每次更改配置文件,都需要重启项目才能生效
module.exports = {
    configureWebpack: {
        devServer: {
            port: 8089,     //端口号
            open: true,     //启动后自动打开页面

            //Mock接口编写的地方
            before(app){
              // app.get('请求地址',(req,res) => {
              //   res.json({

              //   })
              // })

              //用户池
              let userpool = [
                {username: 'sunfan',password: '123'},
                {username: 'lcs',password: '123'}
              ]
              //注册接口
              app.get('/api/register',(req,res) =>{
                const {username,password} = req.query                 //获取请求参数
                const userLength = userpool.filter(v => v.username == username).length
                if(userLength > 0){
                  res.json({
                    success: false,
                    message: '用户名已存在！'
                  })
                }else{
                  res.json({
                    success: true,
                    message: '注册成功！'
                  })
                }
              })

              //登录接口
              let tokenKey = 'xdclass'
              app.get('/api/login',(req,res) => {
                const {username,password} = req.query
                const userLength = userpool.filter(v => v.username == username && v.password == password).length
                if(userLength > 0){
                  res.json({
                    code: 0,
                    message: '登录成功',
                    token: tokenKey+'-'+'username'+'-'+(new Date().getTime()+60*60*1000)
                  })
                }else{
                  res.json({
                    code: 1,
                    message: '用户名或密码错误'
                  })
                }
              })

              //首页轮播图数据接口
              app.get('/api/banner',(req,res) => {
                res.json({
                  data: [{
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png'
                  },{
                    url: 'https://m.xdclass.net',
                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                  },{
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png'
                  }]
                })
              })

              //滚动分类接口
              app.get('/api/rollinglist',(req,res) => {
                res.json({
                  data: [
                    [      
                      {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                       {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                       {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                       {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                       {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                       {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                       {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                       {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                       {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                       {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    }],
                    [{
                      url: 'https://m.xdclass.net',
                      image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                      label:'分类二'
                  },
                   {
                      url: 'https://m.xdclass.net',
                      image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                      label:'分类二'
                  },
                  {
                      url: 'https://m.xdclass.net',
                      image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                      label:'分类二'
                  },
                  {
                      url: 'https://m.xdclass.net',
                      image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                      label:'分类二'
                  },
                  {
                      url: 'https://m.xdclass.net',
                      image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                      label:'分类二'
                  },
                  {
                      url: 'https://m.xdclass.net',
                      image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                      label:'分类二'
                  },
                  {
                      url: 'https://m.xdclass.net',
                      image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                      label:'分类二'
                  },
                  {
                      url: 'https://m.xdclass.net',
                      image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                      label:'分类二'
                  },
                  {
                      url: 'https://m.xdclass.net',
                      image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                      label:'分类二'
                  },
                  {
                      url: 'https://m.xdclass.net',
                      image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                      label:'分类二'
                  }]
                ]
                })
              })

              //获取分类页的分类接口
              app.get('/api/classify',(req,res)=>{
                switch(req.query.type){
                    case '0':
                    res.json({
                        data:[
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                              {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                              {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                              {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                              {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                              {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                              {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                              {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                              {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                              {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                              {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                              {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                              {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                              {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                              {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                              {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            
                        ]
                    });
                    break;
                    case '1':
                    res.json({
                        data: [
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                        ]
                    });
                    break;
                    case '2':
                    res.json({
                        data: [
                            {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                            {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                            {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            },
                            {
                                image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                label:'华为'
                            }
                        ]
                    });
                    break;
                    case '3':
                    res.json({
                        data: [
                            {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                            {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                            {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                            {
                                image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                label:'荣耀'
                            },
                        ]
                    });
                    break;
                    case '4':
                    res.json({
                        data: [
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                        ]
                    });
                    break;
                    case '5':
                    res.json({
                        data: [
                            {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                            {
                                image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                label:'雪梨手机'
                            },
                        ]
                    });
                    break;
                    case '6':
                    res.json({
                        data: [
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                            {
                                image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                label:'小米'
                            },
                        ]
                    });
                    break;
                }
              })
            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
