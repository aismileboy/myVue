<template>
    <div>
        <img class="headerimg" src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/55272/36/15053/100956/5dc008ffEb536b65b/f5024dad21f5eb9e.jpg!cr_1125x445_0_171!q70.jpg.dpg" alt="">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
        </cube-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            model: {
                username: '',
                password: ''
            },
            schema: {
                fields: [
                    //用户名配置
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
                            max: 15
                        },
                        trigger: 'blur',
                        messages: {
                            required: '用户名不能为空',
                            min: '用户名不能少于3个字符',
                            max: '用户名不能多于15个字符'
                        }
                    },
                    
                    //密码配置
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
                            required: 'true'
                        },
                        trigger: 'blur',
                        messages: {
                            required: '密码不能为空'
                        }
                    },

                    //提交配置
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
            e.preventDefault();             //阻止事件冒泡
            try {
                let result = await this.$http.get('/api/login',{params:this.model})
                if(result.code = '0'){
                    this.$store.commit('settoken',result.token)                    //将token 存入 vuex
                    window.localStorage.setItem('token',result.token)
                    //跳转到首页
                    this.$router.replace({path:'/botnav/index'})
                }else{
                    alert(result.message)
                }
            } catch (error) {
                console.log(error)
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