import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TicTacToe from '@/components/tictactoe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TicTacToe',
      component: TicTacToe
    }
  ]
})
