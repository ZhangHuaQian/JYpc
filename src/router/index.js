import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

import Layout from '@/layout'
import topSecondaryHome from '@/assets/secondaryHome/dingb.png'
import navBG from '@/assets/secondaryHome/navBG1.png'
// import topSpecialHome from '@/assets/home/bannerZhuanti.png'
// import departmentName from '@/assets/departmentHome/办公室.png'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    children: [
      {
        name: 'Home',
        path: '/home/index',
        component: () => import ('@/views/home'),
        meta: { title: '首页' }
      }
    ]
  },

  // 专题首页
  // {
  //   path: '/zhauntiHome',
  //   component: Layout,
  //   redirect: '/zhauntiHome/index',
  //   children: [
  //     {
  //       name: 'zhauntiHome',
  //       path: '/zhauntiHome/index',
  //       component: () => import ('@/views/zhauntiHome'),
  //       meta: { title: '首页', bannerZhuanti: topSpecialHome }
  //     }
  //   ]
  // },
  // 榜样力量
  // {
  //   path: '/zhauntiHome',
  //   component: Layout,
  //   redirect: '/zhauntiHome/bangyang',
  //   children: [
  //     {
  //       name: 'bangyang',
  //       path: '/zhauntiHome/bangyang',
  //       component: () => import ('@/views/zhauntiHome/bangyang'),
  //       meta: { title: '榜样力量', bannerZhuanti: topSpecialHome }
  //     }
  //   ]
  // },

  {
    path: '/secondaryHome',
    component: Layout,
    redirect: '/secondaryHome/index',
    children: [
      {
        name: 'SecondaryHome',
        path: '/secondaryHome/index',
        component: () => import ('@/views/secondaryHome'),
        meta: { title: '二级首页', banner: topSecondaryHome, navBG: navBG }
      }
      // {
      //   name: 'Zhuanti',
      //   path: '/secondaryHome/zhuanti',
      //   component: () => import ('@/views/secondaryHome/index'),
      //   meta: { title: '更多专题', banner: topSecondaryHome, navBG: navBG }
      // },
      // {
      //   name: 'Details',
      //   path: '/secondaryHome/details',
      //   component: () => import ('@/views/secondaryHome/components/details'),
      //   meta: { title: '详情页', banner: topSecondaryHome, navBG: navBG }
      // },
      // {
      //   name: 'NewsList',
      //   path: '/secondaryHome/newsList',
      //   component: () => import ('@/views/secondaryHome/components/news'),
      //   meta: { title: '新闻资讯/更多', banner: topSecondaryHome, navBG: navBG }
      // },
      // {
      //   name: 'PoliticalList',
      //   path: '/secondaryHome/politicalList',
      //   component: () => import ('@/views/secondaryHome/components/political'),
      //   meta: { title: '思想政治工作', banner: topSecondaryHome, navBG: navBG }
      // },
      // {
      //   name: 'videoList',
      //   path: '/secondaryHome/videoList',
      //   component: () => import ('@/views/secondaryHome/components/video'),
      //   meta: { title: '警院影像', banner: topSecondaryHome, navBG: navBG }
      // }
    ]
  },
  {
    path: '/common',
    component: Layout,
    redirect: '/common/commonlist',
    children: [
      {
        name: 'commonList1',
        path: '/common/commonlist1',
        component: () => import ('@/views/common/commonList4Level1'),
        meta: { title: '通用列表——一级', banner: topSecondaryHome, navBG: navBG }
      },
      {
        name: 'details1',
        path: '/common/details1',
        component: () => import ('@/views/common/details4Level1'),
        meta: { title: '通用列表详情——一级', banner: topSecondaryHome, navBG: navBG }
      },
      {
        name: 'commonList2',
        path: '/common/commonlist2',
        component: () => import ('@/views/common/commonList4Level2'),
        meta: { title: '通用列表——二级', banner: topSecondaryHome, navBG: navBG },
        children: [
          {
            path: '/common/commonlist2/list2',
            component: () => import ('@/views/common/list4Level2'),
            meta: { title: '通用列表——二级', banner: topSecondaryHome, navBG: navBG }
          },
          {
            name: 'details2',
            path: '/common/details2',
            component: () => import ('@/views/common/details4Level2'),
            meta: { title: '通用列表详情——二级', banner: topSecondaryHome, navBG: navBG }
          }
        ]
      }
    ]
  },

  {
    path: '/employment',
    component: Layout,
    redirect: '/employment/index',
    children: [
      {
        name: 'employment',
        path: '/employment/index',
        component: () => import ('@/views/employment/index'),
        meta: { title: '招生首页', banner: topSecondaryHome, navBG: navBG, departmentName: '招生就业' }
      },
      {
        name: 'MoreInfo',
        path: '/employment/moreInfo',
        component: () => import ('@/views/employment/moreInfo'),
        meta: { title: '招生信息', banner: topSecondaryHome, navBG: navBG, departmentName: '招生就业' }
      }
    ]
  },

  {
    path: '/department',
    component: Layout,
    redirect: '/departmentHome',
    children: [
      {
        name: 'DepartmentHome',
        path: '/departmentHome',
        component: () => import ('@/views/departmentHome'),
        meta: { title: '部门首页', banner: topSecondaryHome, navBG: navBG, departmentName: '办公室' }
      }
    ]
  },

  {
    path: '/college',
    component: Layout,
    redirect: '/collegeHome',
    children: [
      {
        name: 'CollegeHome',
        path: '/collegeHome',
        component: () => import ('@/views/collegeHome'),
        meta: { title: '学院首页', banner: topSecondaryHome, navBG: navBG, collegeName: '侦查学院' }
      }
    ]
  },

  {
    path: '/organizationSetup',
    component: Layout,
    redirect: '/organizationSetup/index',
    children: [
      {
        name: 'organizationSetup',
        path: '/organizationSetup/index',
        component: () => import ('@/views/organizationSetup'),
        meta: { title: '机构设置', banner: topSecondaryHome, navBG: navBG }
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    component: () => import ('@/views/404.vue'),
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.query.siteId) {
    store.dispatch('menu/setMenu', to.query.siteId).then(() => {
      next()
    })
  } else {
    store.dispatch('menu/setMenu', 2).then(() => {
      next()
    })
  }
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

// 解决同地址跳转报错问题，push  replace
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

export default router
