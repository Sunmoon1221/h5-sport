import Vue from 'vue'
import VueRouter from 'vue-router'
const Social = () => import('../views/social/Social')
const Sport = () => import('../views/sport/Sport')
const Lesson = () => import('../views/sport/childViews/Lesson')
const MyClass = () => import('../views/sport/childViews/MyClass')
const Shop = () => import('../views/shop/Shop')
const Equipment = () => import('../views/shop/childViews/equipment/Equipment')
const Profile = () => import('../views/profile/Profile')
const SportData = () => import('../views/profile/childViews/SportData')
const Login = () => import('../views/login/Login')
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/social',
		name: 'Social',
		component: Social
	},
	{
		path: '/sport',
		name: 'Sport',
		component: Sport
	},
	{
		path: '/sport/lesson',
		name: 'Lesson',
		component: Lesson
	},
	{
		path: '/sport/myclass',
		name: 'MyClass',
		component: MyClass
	},
	{
		path: '/shop',
		name: 'Shop',
		component: Shop,
	},
	{
		path: '/shop/equipment',
		name: 'Equipment',
		component: Equipment
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile
	},
	{
		path: '/profile/sportdata',
		name: 'SportData',
		component: SportData
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	if (to.fullPath === '/login') next()
	if (to.fullPath !== '/login' && !window.sessionStorage.getItem('token')) {
		next('/login')
	}
	next()
})
export default router
