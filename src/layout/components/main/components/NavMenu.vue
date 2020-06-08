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
              <el-menu-item v-if="item.name==='工作职责'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`${item.url}?siteId=${$route.query.siteId}&columnId=${item.id}&columnName=${item.name}&childId=${item.id}`">{{ item.name }}</el-menu-item>
              <el-menu-item v-if="item.name==='部门概况'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`${item.url}?itemid=${item.id}&siteId=${$route.query.siteId}`">{{ item.name }}</el-menu-item>
              <el-menu-item v-if="item.name==='规章制度'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`${item.url}?siteId=${$route.query.siteId}&columnId=${item.id}&columnName=${item.name}&childId=${item.id}`">{{ item.name }}</el-menu-item>
               <el-menu-item v-if="item.name==='学院概况'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`${item.url}?itemid=${item.id}&siteId=${$route.query.siteId}`">{{ item.name }}</el-menu-item>
               <el-menu-item v-if="item.name==='课程建设'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`${item.url}?siteId=${$route.query.siteId}&columnId=${item.id}&columnName=${item.name}&childId=${item.id}`">{{ item.name }}</el-menu-item>
               <el-menu-item v-if="item.name==='师资队伍'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`${item.url}?siteId=${$route.query.siteId}&columnId=${item.id}&columnName=${item.name}&childId=${item.id}`">{{ item.name }}</el-menu-item>
               <el-menu-item v-if="item.name==='教学科研'&&item.name!=='学校概况'&&item.name!=='学术研究'&&item.name!=='队伍建设'&&item.name!=='公共服务'&&item.name!=='校园文化'" :key="item.id" :index="`${item.url}?siteId=${$route.query.siteId}&columnId=${item.id}&columnName=${item.name}&childId=${item.id}`">{{ item.name }}</el-menu-item>
               <!-- <el-menu-item v-if="item.name==''" :key="item.id" :index="`${item.url}?siteId=$route.query.siteId&columnId=${item.id}&columnName=${item.name}&childId=${item.id}`">{{ item.name }}</el-menu-item> -->
              <el-submenu v-if="item.child && item.child.length>0" :key="item.id" :index="`${item.url}?columnId=${item.id}&columnName=${item.name}`">
                <template slot="title">{{ item.name }}</template>
                <!-- <el-menu-item v-if="item.name=='工作职责'" :key="item.id" :index="`${item.url}?siteId=$route.query.siteId&columnId=${item.id}&columnName=${item.name}&childId=${item.id}`">{{ item.name }}</el-menu-item> -->
                <el-menu-item v-if="item.child[0].id==54" :key="item.child[0].id" :index="`/departmentHome?siteId=45`">图书馆</el-menu-item>
                
                <el-menu-item v-if="item.child[1].id==55" :key="item.child[1].id" :index="`/common/commonlist1?columnId=42&columnName=%E5%85%AC%E5%85%B1%E6%9C%8D%E5%8A%A1&childId=55`">档案馆</el-menu-item>
                
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
export default {
  data() {
    return {
      seach: ''
    }
  },
  computed: {
    ...mapGetters([
      'menu'
    ])
  },
  created() {
    console.log(this.menu,'dh')
  },
  methods: {

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
