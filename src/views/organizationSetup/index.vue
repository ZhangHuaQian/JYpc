<template>
  <div class="home-container">
    <el-row class="current">
      当前位置：首页>机构设置
    </el-row>
    <el-row class="list">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane class="list-title" label="党政群团机构" name="first">
          <el-row>
            <template v-for="item in list">
              <el-col v-if="item.organizationName === '党政群团机构'" :key="item.id" :span="6" class="list-title-01">
                <img src="@/assets/common/diwen.png">
                <a @click="gotoAndGetMenu('/departmentHome', item.id)">{{ item.name }}</a>
              </el-col>
            </template>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane class="list-title" label="教学机构" name="first">
          <el-row>
            <template v-for="item in list">
              <el-col v-if="item.organizationName === '教学机构'" :key="item.id" :span="6" class="list-title-01">
                <img src="@/assets/common/diwen.png">
                <a @click="gotoAndGetMenu('/collegeHome', item.id)">{{ item.name }}</a>
              </el-col>
            </template>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane class="list-title" label="教辅机构" name="first">
          <el-row>
            <template v-for="item in list">
              <el-col v-if="item.organizationName === '教辅机构'" :key="item.id" :span="6" class="list-title-01">
                <img src="@/assets/common/diwen.png">
                <a @click="gotoAndGetMenu('/departmentHome', item.id)">{{ item.name }}</a>
              </el-col>
            </template>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane class="list-title" label="科研机构" name="first">
          <el-row>
            <template v-for="item in list">
              <el-col v-if="item.organizationName === '科研机构'" :key="item.id" :span="6" class="list-title-01">
                <img src="@/assets/common/diwen.png">
                <a @click="gotoAndGetMenu('/collegeHome', item.id)">{{ item.name }}</a>
              </el-col>
            </template>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script>
import { getList } from '@/api/request.js'
export default {
  data() {
    return {
      activeName: 'first',
      list: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      const data = {
        siteId: 2
      }
      getList('site', data, '/selectAll').then(response => {
        this.list = response.data.data
      })
    },
    gotoAndGetMenu(path, id) {
      switch (path) {
        case '/departmentHome':
          this.$router.push(
            {
              path,
              query: { siteId: id }
            }
          )
          break
        case '/collegeHome':
          this.$router.push(
            {
              path,
              query: { siteId: id }
            }
          )
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
	/deep/ .el-tabs__nav{
		background: #4B93DD;
		border-radius:0 !important;
	}
	/deep/ .el-tabs__item{
		color: #fff;
	}
	.el-tabs{
		padding: 1.5rem 3rem 1.5rem 1.5rem;
	}
	.home-container{
		padding: 1.5% 10.5%;
		.current{
			margin-bottom: 1rem;
		}
		.list{
			background:rgba(255,255,255,1);
			box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.09);
			&-title{
				&-01{
					position: relative;
					margin: 10px 0;
					a{
						position: absolute;
						left: 6%;
						top: 50%;
						margin-top: -9px;
						font-size:14px;
						color: #347ADA;
					}
				}

			}
		}

	}

</style>
