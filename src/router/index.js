import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const fullPath = () =>
    import ('@/components/demo2.vue')


const changePath = (path) =>
    import ('@/components/demo2.vue')
console.log(fullPath)
    // console.log(getUrl('@/components/demo3.vue'))
export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/demo1',
            name: 'demo1',
            component: () =>
                import ('@/components/demo1.vue')
        }, {
            path: '/demo2',
            name: 'demo2',
            component: fullPath
        },
        {
            path: '/demo3',
            name: 'demo3',
            component: changePath('@/components/demo3.vue')
        }
    ]
})