<template>
  <div class="home-container">
    <el-row class="news" @click.native="$router.push({path:'/common/details1', query: {itemid: banner.id, siteId: item.siteId}})">
      <el-col :xs="24" :md="17">
        <el-row style="font-size: 0;">
          <img :src="banner && banner.image" style="width: 850px;height: 480px;">
        </el-row>
      </el-col>
      <el-col class="news-content" :xs="24" :md="7">
        <el-row class="news-content-item" style="height: 478px;">
          <h4 class="title">{{ banner && banner.title }}</h4>
          <p>
            {{ banner && banner.subTitle }}
          </p>
          <span>{{ banner && getMoment(banner.modifyTime, 'MM/DD') }}</span>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="xwzx">
      <el-row>
        <el-col :xs="2" :md="1" class="xwzx-ico"><i class="xwzx-icon" /></el-col>
        <el-col :xs="10" :md="11" class="xwzx-title">
          <h4>列表</h4>
        </el-col>
        <!--        <el-col :xs="12" :md="12" class="xwzx-icons">
          <i style="display: inline-block;margin-right: 1rem;" class="xwzx-icon1" :disabled="currentPage===1" @click="handleCurrentChange(currentPage-1)" />
          <i style="display: inline-block;" class="xwzx-icon2" @click="handleCurrentChange(currentPage+1)" />
        </el-col> -->
      </el-row>
      <el-row class="xwzx-newsList">
        <el-row v-for="item in list" :key="item.id" class="xwzx-newsList-item" @click.native="$router.push({path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}})">
          <el-row>
            <el-col class="xwzx-newsList-item-dataTime" :xs="4" :md="4">
              <div class="childDiv childDiv1">
                <span class="span1">{{ getMoment(item.modifyTime, 'DD') }}</span>
              </div>
              <div class="childDiv childDiv2">
                <span class="span2">{{ getMoment(item.modifyTime, 'YYYY-MM') }}</span>
              </div>
            </el-col>
            <el-col class="xwzx-newsList-item-content" :xs="20" :md="20">
              <div>{{ item.title }}</div>
              <p>{{ item.subTitle }}</p>
              <span>查看详情></span>
            </el-col>
          </el-row>
          <el-divider />
        </el-row>
      </el-row>
      <el-pagination
        :total="total"
        :current-page.sync="currentPage"
        :page-size="100"
        layout="prev, pager, next, jumper"
        @current-change="handleCurrentChange"
      />
    </el-row>
  </div>
</template>

<script>
import { getList } from '@/api/request.js'
import moment from 'moment'
moment.locale('zh-cn')
export default {
  data() {
    return {
      banner: {},
      list: [],
      currentPage: 1,
      total: 0
    }
  },
  watch: {
    '$route.query': {
      handler: function(val) {
        if (val.childId) {
          this.getNewsList(val.childId)
        } else if (val.columnId) {
          this.getNewsList(val.columnId)
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    getNewsList(id) {
      const data = {
        columnId: id,
        pageNum: this.currentPage,
        pageSize: 10
      }
      getList('news', data).then(response => {
        const results = response.data.data
        this.list = results.data
        this.total = results.count
        if (!this.banner || !this.banner.id) {
          this.banner = this.list[0]
        }
      })
    },
    handleCurrentChange(val) {
      this.currentPage = val
      if (this.$route.query.childId) {
        this.getNewsList(this.$route.query.childId)
      } else if (this.$route.query.columnId) {
        this.getNewsList(this.$route.query.columnId)
      }
    },
    getMoment(date, str) {
      return moment(date).format(str)
    }
  }
}
</script>

<style lang="scss" scoped>
	%icon {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		background-size: 100% 100%;
		margin: 1.15rem auto;
	}

	img {
		width: 100%;
		height: 100%;

	}

	.home-container {
		padding: 1.5% 18.5%;

		.news {
			margin-bottom: 2rem;

			&-content {
				background: rgba(250, 250, 250, 1);
				box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.35);

				&-item {
					padding: 20px 20px 22px 19px;

					h4 {
						font-size: 18px;
					}

					p {
						line-height: 1.9rem;
					}

					span {
						font-size: 24px;
						color: rgba(51, 51, 51, 1);
						line-height: 31px;
						font-weight: bold;
						margin-left: 80%;
					}
				}
			}
		}

		.xwzx {
			&-ico {
				text-align: left;
				line-height: 2.5rem;
				width: 2.16667%;
				margin-top: 2px;
			}

			&-title {
				width: 47.83333%;
			}

			&-icons {
				width: 50%;
				text-align: right;
			}

			&-icon {
				@extend %icon;
				background-image: url(../../assets/secondaryHome/zixun.png);
			}

			&-icon1 {
				@extend %icon;
				background-image: url(../../assets/secondaryHome/z-nor.png);
			}

			&-icon2 {
				@extend %icon;
				background-image: url(../../assets/secondaryHome/you_nor.png);
			}

			&-newsList {
				&-item {
					&-dataTime {
						width: 8rem;
						height: 7rem;
						border: 1px solid rgba(19, 107, 185, 1);
						padding-left: 0 !important;
						padding-right: 0 !important;

						.childDiv {
							width: 100%;
							height: 50%;
						}

						.childDiv1 {
							background: rgba(19, 107, 185, 1);
							position: relative;

							.span1 {
								position: absolute;
								left: 50%;
								top: 50%;
								margin-left: -20px;
								margin-top: -12px;
								font-size: 36px;
								font-weight: bold;
								color: rgba(255, 255, 255, 1);
								line-height: 24px;
							}
						}

						.childDiv2 {
							position: relative;

							.span2 {
								position: absolute;
								left: 50%;
								top: 50%;
								margin-left: -33px;
								margin-top: -12px;
								font-size: 18px;
								font-weight: 400;
								color: rgba(102, 102, 102, 1);
								line-height: 24px;
							}
						}
					}

					&-content {
						width: 89%;
						padding-left: 1rem;
						div {
							font-size: 18px;
							color: rgba(51, 51, 51, 1);
							font-weight: bold;
						}

						p {
							color: rgba(102, 102, 102, 1);
						}

						span {
							color: rgba(153, 153, 153, 1);
						}
					}
				}
			}
		}

	}
</style>
