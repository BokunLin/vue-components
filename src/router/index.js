import Vue from 'vue';
import Router from 'vue-router';


import noviceGuidance from '../components/noviceGuidance/demo'
import dropLoad from '../components/dropLoad/demo'
import dropDown from '../components/dropDown/demo'

Vue.use(Router);

const routers = new Router({
  routes: [
    {
      path: '/noviceGuidance',
      component: noviceGuidance,
    },
    {
      path: '/dropLoad',
      component: dropLoad,
    },
    {
      path: '/dropDown',
      component: dropDown,
    },
  ],
})

export default routers;
