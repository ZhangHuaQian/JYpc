<template>
  <div>
    <el-row
      type="flex"
      class="row-bg NavMenu-wrapper"
      :class="{'NavMenu-wrapper-getcolor':!$route.meta.navBG}"
      :style="{'backgroundSize': '100% 100%', 'backgroundImage': 'url('+$route.meta.navBG+')'}"
      justify="space-around"
    >
      <el-row>
        <el-col :span="20">
          <el-menu
            :default-active="`${$route.path}?columnId=${$route.query.columnId}&columnName=${$route.query.columnName}${$route.query.childId?'&childId='+$route.query.childId:''}`"
            class="el-menu-nav"
            mode="horizontal"
            :router="true"
            text-color="#fff"
            background-color="#cce1fa"
          >

            <template v-for="item in menu">
              
              <el-menu-item v-if="item.name==='部门概况'&&item.name!=='工作职责'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`/common/commonlist2/list2?siteId=${$route.query.siteId}&columnId=${item.id}&columnName=${item.name}`">{{ item.name }}</el-menu-item>
              
              
             
              
              
              <el-menu-item v-if="item.name==='规章制度'&&item.name!=='工作职责'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`/common/commonlist2/list2?siteId=${$route.query.siteId}&columnId=${guizhangzhidu[0].columnId}&columnName=${item.name}`">{{ item.name }}</el-menu-item>
               
               
               
              
             
             
             
               <el-menu-item v-if="item.name==='学院概况'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`${item.url}`">{{ item.name }}</el-menu-item>
               <el-menu-item v-if="item.name==='课程建设'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`${item.url}`">{{ item.name }}</el-menu-item>
               <el-menu-item v-if="item.name==='师资队伍'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`${item.url}`">{{ item.name }}</el-menu-item>
               <el-menu-item v-if="item.name==='教学科研'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`${item.url}`">{{ item.name }}</el-menu-item> 


             
              
              <el-submenu v-if="item.child && item.child.length>0" :key="item.id" :index="`${item.url}?columnId=${item.id}&columnName=${item.name}`">
                <template slot="title">{{ item.name }}</template>
                
                <el-menu-item v-if="item.child[0].id==54" :key="item.child[0].id" :index="`/departmentHome?siteId=45`">图书馆</el-menu-item>
                
                <el-menu-item v-if="item.child[1].id==55" :key="item.child[1].id" :index="`/departmentHome?siteId=49`">档案馆</el-menu-item>
                
                <el-menu-item v-else v-for="childItem in item.child" :key="childItem.id" :index="`${item.url}?columnId=${item.id}&columnName=${item.name}&childId=${childItem.id}`">{{ childItem.name }}</el-menu-item>
              </el-submenu>
             
              
              <el-menu-item v-if="item.name!=='师资队伍'&&item.name!=='学院概况'&&item.name!=='课程建设'&&item.name!=='教学科研'&&item.name!=='工作职责'&&item.name!=='部门概况'&&item.name!=='规章制度'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`${item.url}?columnId=${item.id}&columnName=${item.name}`">{{ item.name }}</el-menu-item>
              

            </template>
            <!--              <template v-if="$route.meta.navBG">
                <el-menu-item index="/secondaryHome/index">首页</el-menu-item>
                <el-menu-item index="/secondaryHome/newsList">新闻资讯</el-menu-item>
                <el-menu-item index="/secondaryHome/politicalList">思想政治工作</el-menu-item>
                <el-menu-item index="/secondaryHome/videoList">警院影像</el-menu-item>
                <el-menu-item index="/home/index">学校首页</el-menu-item>
              </template>
              <template v-if="!$route.meta.navBG">
                <el-menu-item index="/home/index">首页</el-menu-item>
                <el-submenu>
                  <template slot="title">学校概况</template>
                  <el-menu-item index="/common/commonlist">学校简介</el-menu-item>
                  <el-menu-item index="/common/commonlist">学校沿革</el-menu-item>
                  <el-menu-item index="/common/commonlist">现任领导</el-menu-item>
                  <el-menu-item index="/common/commonlist">历任领导</el-menu-item>
                  <el-menu-item index="/common/commonlist">学校标识</el-menu-item>
                  <el-menu-item index="/common/commonlist">校园景观</el-menu-item>
                </el-submenu>
                <el-menu-item index="/organizationSetup/index">机构设置</el-menu-item>
                <el-menu-item index="/common/commonlistTwo">学科专业</el-menu-item>
                <el-submenu>
                  <template slot="title">学术研究</template>
                  <el-menu-item index="/common/commonlistTwo">科研管理</el-menu-item>
                  <el-menu-item index="/common/commonlistTwo">科研机构</el-menu-item>
                  <el-menu-item index="/common/commonlistTwo">学报</el-menu-item>
                </el-submenu>
                <el-menu-item index="/employment/index">招生就业</el-menu-item>
                <el-submenu>
                  <template slot="title">队伍建设</template>
                  <el-menu-item index="/common/commonlistTwo">人才招聘</el-menu-item>
                  <el-menu-item index="/common/commonlistTwo">师资队伍</el-menu-item>
                </el-submenu>
                <el-submenu>
                  <template slot="title">公共服务</template>
                  <el-menu-item index="/departmentHome/index">图书馆</el-menu-item>
                  <el-menu-item index="/departmentHome/index">档案馆</el-menu-item>
                </el-submenu>
                <el-menu-item index="/common/commonlistTwo">校园文化</el-menu-item>
              </template> -->
          </el-menu>
        </el-col>
        <el-col :span="4" style="line-height: 3.8rem;">
          <el-input v-model="seach" class="seach-input" placeholder="请输入内容" suffix-icon="el-icon-search" />
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getList } from '@/api/request.js'

export default {
  data() {
    return {
      seach: '',
      bumendongtai: [],
      tongzhigonggao: [],
      guizhangzhidu: [],
      gongzuozhize: [],
      bumenfengcai: [],
    }
  },
  computed: {
    ...mapGetters([
      'menu'
    ])
  },
   watch: {
      '$route'(to, from) {
        this.$router.go(0);
      }
    },
  created() {
    console.log(this.menu,'dh')

    if (this.menu.length > 0) {
      for (var i = 0; i < this.menu.length; i++) {
        if (this.menu[i].name === '首页') {
          this.getColumnList(this.menu[i].id)
          console.log(this.menu[i].id,'111')
        }
      }
    }

    
  },
 
  methods: {

    getColumnList(id) {
      const data = {
        id
      }
      getList('column', data, '/selectChild').then(response => {
        this.columnList = response.data.data
        if (this.columnList.length > 0) {
          for (var i = 0; i < this.columnList.length; i++) {
            switch (this.columnList[i].name) {
              case '部门动态':
                this.getNewsList(this.columnList[i].id, 5).then(results => {
                  this.bumendongtai = results
                  console.log(results,'5858')
                })
                break
              case '通知公告':
                this.getNewsList(this.columnList[i].id).then(results => {
                  this.tongzhigonggao = results
                })
                break
              case '规章制度':
                this.getNewsList(this.columnList[i].id).then(results => {
                  this.guizhangzhidu = results
                  console.log(results[0].columnId,'规章制度')
                  
                })
                break
              case '工作职责':
                this.getNewsList(this.columnList[i].id).then(results => {
                  this.gongzuozhize = results
                  // console.log(results,'44444')
                  this.gzzeID=results
                  console.log(this.gongzuozhize[0].columnId,'工作职责')
                })
                break
              case '部门风采':
                this.getNewsList(this.columnList[i].id).then(results => {
                  this.bumenfengcai = results
                  console.log(results,'部门风采')
                })
                break
            }
          }
        }
      })
    },

//  getColumnList(id) {
//       const data = {
//         id
//       };
//       getList("column", data, "/selectChild").then(response => {
//         this.columnList = response.data.data;
//         if (this.columnList.length > 0) {
//           for (var i = 0; i < this.columnList.length; i++) {
//             switch (this.columnList[i].name) {
//               case "新闻":
//                 this.getNewsList(this.columnList[i].id, 5).then(results => {
//                   this.newsList = results;
//                 });
//                 break;
//               case "招生信息":
//                 this.getNewsList(this.columnList[i].id, 3).then(results => {
//                   this.zhaoshengxinxi = results;
//                 });
//                 break;
//               case "更多入口":
//                 this.getNewsList(this.columnList[i].id, 3).then(results => {
//                   this.gengduorukou = results;
//                 });
//                 break;
//               case "就业政策":
//                 this.getNewsList(this.columnList[i].id).then(results => {
//                   this.jiuyezhengce = results;
//                 });
//                 break;
//               case "就业辅导":
//                 this.getNewsList(this.columnList[i].id).then(results => {
//                   this.jiuyefudao = results;
//                 });
//                 break;
//             }
//           }
//         }
//       });
//     },
    // getNewsList(id, pageSize = 10) {
    //   const data = {
    //     columnId: id,
    //     pageNum: 1,
    //     pageSize
    //   };
    //   return new Promise((resolve, reject) => {
    //     getList("news", data)
    //       .then(response => {
    //         resolve(response.data.data.data);
    //       })
    //       .catch(e => {
    //         reject(e);
    //       });
    //   });
    // },

    getNewsList(id, pageSize = 10) {
      const data = {
        columnId: id,
        pageNum: 1,
        pageSize
      }
      return new Promise((resolve, reject) => {
        getList('news', data).then(response => {
          const results = response.data.data.data
          for (var i = 0; i < results.length; i++) {
            results[i].columnId = id
          }
          resolve(results)
        }).catch(e => {
          reject(e)
        })
      })
    },

  }
}
</script>

<style lang="scss" scoped>
	$NavMenuHoverColor: #cce1fa73;
	$NavMenuItemWidth: 7.25rem;

	.NavMenu-wrapper {
		&-getcolor {
			background-color: #07519A;
		}

		/deep/.seach-input {
			input {
				border-radius: 25px;
				height: 30px;
				line-height: 30px;
			}
		}

		.el-menu-nav {
			background-color: #ffffff00 !important;
			border-bottom: 0px;

			.el-menu-item {
				text-align: center;
				min-width: $NavMenuItemWidth;
				background-color: #ffffff00 !important;

				&:hover {
					background-color: $NavMenuHoverColor !important;
				}
			}

			.is-active {
				height: 3.75rem;
				border-bottom: 0px;
				border-top: 4px solid #EEA200;
				line-height: 3.125rem;
				background-color: #CCE1FA !important;
				color: #184499 !important;

				/deep/ .el-submenu__title {
					color: #184499 !important;
				}
			}

			/deep/.el-submenu {
				text-align: center;
				min-width: $NavMenuItemWidth;

				&:hover {
					background-color: $NavMenuHoverColor !important;
				}

				&__title {
					background-color: #ffffff00 !important;

					&:hover {
						background-color: #07519A;
					}
				}
			}
		}

		/deep/ .el-submenu.is-active {
			color: #184499 !important;
			border-bottom: 0px;

			.el-submenu__title {
				border-bottom: 0px;
				color: #184499 !important;
				height: 55px;
				line-height: 55px;
			}
		}
	}
</style>
<style>
	.el-menu--horizontal .el-menu .el-menu-item.is-active,
	.el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title {
		background-color: #cce1fa73 !important;
		color: #184499;
	}

	.el-menu--horizontal .el-menu .el-menu-item,
	.el-menu--horizontal .el-menu .el-submenu__title {
		color: #000 !important;
	}
</style>
