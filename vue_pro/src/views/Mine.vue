<template>
    <div id="mine">
        <img class="headerimg" src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/2019_frontend/%E5%B0%8F%E7%A8%8B%E5%BA%8F/wx_appbanner.png" alt="">
        <ul>
           <li v-for="item in infoList" :key="item.label" @click="itemclick(item)" class="info-item">
                <span class="item-label">{{item.label}}</span>
                <i class="cubeic-arrow"></i>   
            </li> 
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            infoList: [
                {label: '商品收藏'},
                {label: '我的足迹'},
                {label: '店铺收藏'},
                {label: '我的订单'},
                {label: '退出登录',type:'exit'},
            ]
        }
    },
    methods:{
        itemclick(item) {
            if(item.type == 'exit'){
                this.$store.commit('settoken','')
                window.localStorage.removeItem('token')
                this.$router.replace({path:'/login'})
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .headerimg
        height 150px
        width 100%
    .info-item
        font-size 14px
        text-align left 
        height 50px
        line-height 50px
        padding-left 5%
        border-bottom 1px solid #eee
        .item-label
            display inline-block
            width 90%

</style>