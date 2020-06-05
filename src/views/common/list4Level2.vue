<template>
  <el-row :gutter="40">
    <el-row class="common-right-weizhi">
      <!--      <p>当前位置：<span>123</span>>><span>456</span></p> -->
    </el-row>
    <el-row v-for="item in list" :key="item.id" class="common-right-info">
      <router-link :to="{ path: '/common/details2', query: { ...$route.query, newId: item.id, siteId: item.siteId }}">
        <el-row>
          <el-col :xs="6" :md="6"><img :src="item.image" style="width: 180px;height: 120px;"></el-col>
          <el-col :xs="18" :md="18" class="common-right-info-content">
            <div>{{ item.title }}</div>
            <p>{{ item.subTitle }}</p>
            <span>{{ getMoment(item.modifyTime, 'YYYY.MM.DD') }}</span>
          </el-col>
        </el-row>
        <el-divider />
      </router-link>
    </el-row>
    <el-row class="pagination" style="text-align: center;margin:2rem 0">
      <el-pagination
        :current-page.sync="currentPage"
        layout="prev, pager, next, jumper"
        :total="total"
        @current-change="handleCurrentChange"
      />
    </el-row>
  </el-row>
</template>

<script>
import { getList } from '@/api/request.js'
import moment from 'moment'
moment.locale('zh-cn')
export default {
  props: {
    activeItem: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      list: [],
      currentPage: 1,
      total: 0
    }
  },
  computed: {
    activeItemId() {
      return this.activeItem.id
    }
  },
  watch: {
    activeItemId: {
      handler: function(value) {
        if (value) {
          this.getList(value)
        }
      },
      immediate: true
    }
  },
  methods: {
    getList(id) {
      const data = {
        columnId: id,
        pageNum: this.currentPage,
        pageSize: 10
      }
      getList('news', data).then(response => {
        const results = response.data.data
        this.list = results.data
        this.total = results.count
        if (!this.banner) {
          this.banner = this.list[0]
        }
      })
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getList(this.activeItem.id)
    },
    getMoment(date, str) {
      return moment(date).format(str)
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
					right: 54%;
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

