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
                        label: '注册'
                    }
                ]
            }
        }
    },
    methods: {
        submitHandler(e){
            //阻止冒泡
            e.preventDefault();
            this.$http.get('/api/register',{params: this.model}).then(res =>{
                console.log(res.data.success)
            }).catch(err =>{
                console.log(err)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    .headerimg
        height 150px
        width 100%
</style>