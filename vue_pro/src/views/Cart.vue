<template>
    <div id="cart">
        <div class="goods" v-for="(list,index) in cartlist" :key="index">
            {{list.title}}
            <div class="goodsright">
                <i class="cubeic-remove" @click="removeCart(index)"></i>
                <span>{{list.cartCount}}</span>
                <i class="cubeic-add" @click="addCart(index)"></i>
            </div>
        </div>
        <cube-button style="margin: 10px 0;">下单</cube-button>
        <cube-button @click="clearCart">清空购物车</cube-button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            // cartlist: []
        }
    },
    computed:{
        ...mapState({
            cartlist: state=>state.cartlist
        })
    },
    methods:{
        //减少商品数量
        removeCart(index) {
            this.$store.commit('removeCart',index)
        },
        //增加商品数量
        addCart(index) {
            this.$store.commit('addCart',index)
        },
        //清空购物车
        clearCart() {
            this.$store.commit('clearCart') 
        }
    }
}
</script>

<style lang="stylus" scoped>
    .goods 
        padding 10px
        text-align left 
        .goodsright
            float right
            i
                font-size 18px
</style>