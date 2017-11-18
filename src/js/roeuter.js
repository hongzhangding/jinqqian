import VueRouter from 'vue-router'


import home  from  '../component/nav/home.vue';
import find  from  '../component/nav/find.vue';
import infor  from  '../component/nav/infor.vue';
import my  from  '../component/nav/my.vue';

import homepage  from  '../component/home/homepage.vue';
import frontend  from  '../component/home/frontend.vue';
import product  from  '../component/home/product.vue';
import design  from  '../component/home/design.vue';
import afterend  from  '../component/home/afterend.vue';

import content from '../component/switchover/content.vue';
import search1 from '../component/switchover/search1.vue';
import boiling1 from '../component/switchover/boiling1.vue';
import my1 from '../component/switchover/my1.vue';
import my2 from '../component/switchover/my2.vue';

export default new VueRouter({
	routes:[
	    {path:'/home',component:home,
	      children: [
	        {path: '/homepage',component:homepage},
	        {path: '/frontend',component:frontend},
	        {path: '/product',component:product},
	        {path: '/design',component:design},
	        {path: '/afterend',component:afterend},
	      ]
	    },
		{path:'/find',component:find},
		{path:'/infor',component:infor},
		{path:'/my',component:my},
		{path:'/search1',component:search1},
		{path:'/boiling1',component:boiling1},
		{path:'/my1',component:my1},
		{path:'/my2',component:my2},
		{path:'/content/:title/:author/:read/',component:content},
		{path: '*', redirect: './find'}
	]

})
