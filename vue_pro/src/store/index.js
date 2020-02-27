import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

 let store = new Vuex.Store({
  state: {
    token: '',
    cartlist: JSON.parse(localStorage.getItem('cartlist')) || []          
  },
  //相当于vue的计算属性
  getters: {
    //添加至购物车商品总数量
    countsum: state=>{
      let num = 0
      state.cartlist.forEach(v=>{
        num+=v.cartCount
      })
      return num
    }
  },
  mutations: {
    //设置vuex的token
    settoken(state,token){
      state.token = token
    },

    //添加商品至购物车
    tocart(state,tag) {
      const goods = state.cartlist.find(v=>v.title == tag.label)
      if(goods) {
        goods.cartCount+=1
      }else {
        state.cartlist.push({title: tag.label, cartCount: 1})
      }
    },

    //商品数量加一
    addCart(state,index) {
      state.cartlist[index].cartCount++
    },

    //商品数量减一
    removeCart(state,index) {
      if(state.cartlist[index].cartCount > 1) {
        state.cartlist[index].cartCount--
      }else {
        if(window.confirm('确定从购物车中删除该商品吗?')){
          state.cartlist.splice(index,1)
        }
      }
    },

    //清空购物车
    clearCart(state) {
      state.cartlist = []
    }
  },
  
  actions: {

  },

  modules: {

  }
  
})
//监听 store 里的mutations, 每次调用mutations，都会进入该方法，可以做一些相应的处理
store.subscribe((mutations,state) =>{
  window.localStorage.setItem('cartlist',JSON.stringify(state.cartlist))
})
export default store
