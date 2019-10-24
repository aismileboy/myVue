var Test = {
    template: `
        <div>我是Test组件 - {{ msg }}
        <button @click="msg+='1'">msg+1</button>
        </div>
    `,
    data() {
        return {
            msg: 'Hello Vue!'
        }
    },

    //组件创建前
    beforeCreate() {
        console.log("组件创建前") /*数据未配置*/
        console.log(this.msg)
    },

    //组件创建后
    created() {
        console.log("组件创建后") /*数据配置完毕,可获取*/
        console.log(this.msg)
    },

    //DOM挂载前
    beforeMount() {
        console.log("DOM挂载前") /*坑位未填充*/
        console.log(document.body.innerHTML)
    },

    //DOM挂载后
    mounted() {
        console.log("DOM挂载后") /*坑位已填充*/
        console.log(document.body.innerHTML)
    },

    //数据更新前
    beforeUpdate() {
        console.log("数据更新前")
        console.log(document.body.innerHTML)
    },

    //数据更新后
    updated() {
        console.log("数据更新后")
        console.log(document.body.innerHTML)
    },

    //组件销毁前
    beforeDestroy() {
        console.log("组件销毁前")
    },

    //组件销毁后
    destroyed() {
        console.log("组件销毁后")
    },

    //组件激活
    activated() {
        console.log("组件激活")
    },

    //组件停用
    deactivated() {
        console.log("组件停用")
    },

}
new Vue({
    el: '#app',
    template: `
        <div>
            <keep-alive><test v-if="testShow"></test></keep-alive><br> 
            <button @click="destroy">销毁组件</button>
        </div>
    `,
    components: {
        Test
    },
    data() {
        return {
            testShow: true
        }
    },
    methods: {
        destroy() {
            this.testShow = !this.testShow
        }
    },
})

/*

   组件的创建与销毁 往往很影响性能, 尤其是对于功能复杂的组件.
   在实际工作中,对于频繁需要创建与销毁组件的场景下,一般 采用 组件缓存的方式 来解决,从而对性能进行优化,即
   生命周期中的 activated(激活) 和 deactivated(停用) 两个钩子函数
   
   这样 通过 v-if方式 对组件进行显示与隐藏(实际上是 创建与销毁,基于v-if的工作原理,是通过 append 和 remove 来实现的),
   在该组件 用 <keep-alive> </keep-alive> 标签 包裹, 则组件隐藏即对应于 deactivated 状态, 将该组件放于组件缓存中,
   组件显示即 对应于 activated 状态,从组件缓存中去获取,不用重新创建


*/