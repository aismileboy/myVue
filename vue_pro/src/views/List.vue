<template>
    <div class="panelsbox">
        <cube-scroll class="leftpanels">
            <ul>
                <li v-for="(list,index) in tabslabel" :class="list.active? 'active': ''" :key="index" @click="select(index)">
                    {{list.label}}
                </li>
            </ul>
        </cube-scroll>

         <cube-scroll class="rightpanels">

        </cube-scroll>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tabslabel: [
                {
                    label: '热门推荐',
                    active: true
                },
                {
                    label: '京东超市',
                    active: false
                },
                {
                    label: '国际名牌',
                    active: false
                },
                {
                    label: '奢饰品',
                    active: false
                },
                {
                    label: '京东国际',
                    active: false
                },
                {
                    label: '唯品会',
                    active: false
                },
                {
                    label: '男装',
                    active: false
                },
                {
                    label: '女装',
                    active: false
                },
                {
                    label: '男鞋',
                    active: false
                },
                {
                    label: '女鞋',
                    active: false
                },
                {
                    label: '内衣配饰',
                    active: false
                },
                {
                    label: '箱包手袋',
                    active: false
                },
                {
                    label: '奢饰品',
                    active: false
                },
                {
                    label: '京东国际',
                    active: false
                },
                {
                    label: '唯品会',
                    active: false
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .panelsbox
        display flex
        .leftpanels
            width 30%
            li
                height 50px
                line-height 50px
                border-bottom 1px solid #fff
                color #333
                background #f8f8f8
                font-size  14px
            .active
                background #fff
                color #e93b3d
        .rightpanels
            width 70%
            ul
                display flex
                flex-wrap  wrap
                li
                    width 50%
                    justify-content center
                    align-items center
                    font-size 15px
                    img 
                        width 80px
                        height  80px
</style>