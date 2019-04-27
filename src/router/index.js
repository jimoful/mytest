import Vue from 'vue'
import Router from 'vue-router'
import tokenizer from '../components/wordhandler/Tokenizer.vue'
Vue.use(Router);

export default new Router({
    routes: [
        // {
        //   path: '/findMusicComponent',
        //   name: 'findMusicComponent',
        //   component: findMusicComponent,
        //   children: [
        //     {
        //       path: '/',
        //       name: 'hyComponent',
        //       component: hyComponent
        //     }
        //   ]
        // },
        {
            path: '/',
            name: 'tokenizer',
            component: tokenizer
        },
    ]
})
