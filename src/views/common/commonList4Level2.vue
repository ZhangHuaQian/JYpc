<template>
  <div style="min-height:70vh">
    <el-row />
    <el-row :gutter="40" class="home-container">
      <el-col :xs="24" :md="6" class="content-left">
        <el-row>
          <el-row class="content-left-bangyang" style="position: relative;">
            <span>{{ $route.query.columnName||$route.query.cloumnName }}</span>
            <el-col style="font-size: 0;"><img src="../../assets/common/xx.png" alt=""></el-col>
          </el-row>
          <el-row class="content-left-list">
            <template v-for="item in menu">
              <el-row :key="item.id" :class="['content-left-list-li', {'active': activeItem.id===item.id}]" @click.native="handleMenuChecked(item)">
                <p>{{ item.name }}</p>
              </el-row>
            </template>
          </el-row>
        </el-row>
      </el-col>
      <el-col :xs="24" :md="16" class="common-right">
        <router-view :active-item="activeItem" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import merge from 'webpack-merge'
import { getList } from '@/api/request.js'
import moment from 'moment'
moment.locale('zh-cn')
export default {
  data() {
    return {
      menu: [],
      activeItem: {},
      gzzeID:'',
      tzggID:'',
      gzzd:''
    }
  },
  // watch: {
  //   'this.$route.query': {
  //     handler: function(val) {
  //       this.getChildren()
  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // },
  created() {
    this.getChildren(),
    this.getList()
    

  },

  methods: {
    getChildren() {
      console.log(this.$route.query.columnId,'11')
      const data = {
        id: this.$route.query.columnId,
        
      }
      console.log(data,'aiyigu')
      getList('column', data, '/selectChild').then(response => {
        this.menu = response.data.data
        if (this.$route.query.childId) {
          for (var i = 0; i < this.menu.length; i++) {
            if (this.menu[i].id.toString() === this.$route.query.childId) {
              this.handleMenuChecked(this.menu[i])
            }
          }
        } else {
          this.handleMenuChecked({ id: this.$route.query.columnId })
        }
      })
    },
    getMoment(date, str) {
      return moment(date).format(str)
    },
    handleMenuChecked(item) {
      this.activeItem = item
      this.$router.push({
        query: merge(this.$route.query, { 'childId': item.id })
      })
      var data = this.$route.query
      data.childId = item.id
      if (item.typeName === '单页面') {
        this.$router.replace({ path: '/common/details2', query: { ...data }})
      } else {
        this.$router.replace({ path: '/common/commonlist2/list2', query: { ...data }})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
	img {
		width: 100%;
		height: 100%;
	}

	.home-container {
		padding: 1.5% 18.5%;
		background: rgba(249, 249, 249, 1);

		.content-left {
			&-bangyang {
				font-size: 24px;
				font-weight: bold;
				color: rgba(255, 255, 255, 1);

				span {
					position: absolute;
					top: 50%;
					margin-top: -13px;
					left: 10%;
				}
			}

			&-list {
				border: 1px solid #ccc;

				&-li {
					border-top: 1px solid #ccc;

					p {
						padding-left: 2.4rem;
					}
				}

				.active {
					color: #136BB9;
					background: #F3F6F9
				}

			}
		}

		.common-right {
      background:rgba(255,255,255,1);
      box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.09);
      &-weizhi{
        background:rgba(249,249,249,1);
        box-shadow:0px -3px 0px 0px rgba(7,81,154,1);
        border-bottom: 1px solid #ccc;
        p{
            margin-left: 1.6rem;
        }
			}
			&-info{
				padding: 1.6rem 1.2rem 0 2rem;
				.el-divider--horizontal{
					margin-top: 26px;
					margin-bottom: 0px;
				}

				&-content{
					div{
						font-size:18px;
						color:rgba(51,51,51,1);
					}
					p{
						font-size:14px;
						color:rgba(80,80,80,1);
					}
					span{
						font-size:14px;
						color:rgba(153,153,153,1);
					}
				}
			}

		}
	}
</style>
