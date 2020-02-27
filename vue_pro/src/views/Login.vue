<template>
    <div>
        <img class="headerimg" src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/2019_frontend/%E5%B0%8F%E7%A8%8B%E5%BA%8F/wx_appbanner.png" alt="">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler"
        >
        </cube-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            model: {
                username: '',
                password: ''
            },
            schema: {
                fields: [
                    {
                        type: 'input',
                        modelKey: 'username',
                        label: '用户名',
                        props: {
                            placeholder: '请输入用户名'
                        },
                        rules: {
                            //校验规则
                            required: true,
                            type: 'string',
                            min: 3,
                            max: 15,
                        },
                        trigger: 'blur',
                        message: {
                            required: '用户名不能为空',
                            min: '用户名不能少于3个字符',
                            max: '用户名不能多于15个字符'
                        }
                    },
                    {
                        type: 'input',
                        modelKey: 'password',
                        label: '密码',
                        props: {
                            placeholder: '请输入密码',
                            type: 'password',
                            eye: {
                                open: false
                            }
                        },
                        rules: {
                            required: true
                        },
                        trigger: 'blur'
                    },
                    {
                        type: 'submit',
                        label: '登录'
                    }
                ]
            }
        }
    },
    methods: {
        async submitHandler(e){
            //阻止冒泡
            e.preventDefault();
            try {
                const result = await this.$http.get('/api/login',{params: this.model})
                if(result.code == '0'){
                    this.$store.commit('settoken',result.token)
                    window.localStorage.setItem('token',result.token)
                    //判断路由是否带参，带参就去到重定向参数地址，否则去首页
                    if(this.$route.query.redirect){
                        this.$router.replace({path: this.$route.query.redirect})
                    }else {
                         this.$router.replace({path: '/botnav'})
                    }
                }else {
                    alert(result.message)
                }
            } catch (error) {
                cosole.log(error)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .headerimg
        height 150px
        width 100%
</style>