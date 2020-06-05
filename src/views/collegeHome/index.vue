<template>
  <div class="home-container">
    <div class="box1" style="position: relative;">
      <a style="position: absolute;right: 18.5%;top: 7.5%;z-index: 3;">
        <template v-for="item in columnList">
          <template v-if="item.name === '学院动态'">
            <router-link :key="item.id" :to="{path:'/common/commonlist2', query: {siteId: $route.query.siteId, columnId: item.id, columnName: item.name}}">更多></router-link>
          </template>
        </template>
      </a>
      <i class="icon" />
      <el-tabs v-model="activeName">
        <el-tab-pane label="学院动态" name="first">
          <el-row :gutter="10">
            <el-col :xs="24" :md="15">
              <el-row class="banner">
                <swiper class="swiper" :options="swiperOption" style="width: 100%;">
                  <template v-for="item in xueyuandongtai">
                    <swiper-slide :key="item.id" style="text-align: right;position: relative;">
                      <router-link :to="{path:'/common/details2', query: {siteId: $route.query.siteId, columnId: item.columnId, columnName: '学院动态', newId: item.id, siteId: item.siteId}}">
                        <img :src="item.image" style="width: 100%;height: 415px;">
                        <p class="banner-title">{{ item.title }}</p>
                      </router-link>
                    </swiper-slide>
                  </template>
                  <div slot="pagination" class="swiper-pagination" />
                </swiper>
              </el-row>
            </el-col>
            <el-col :xs="24" :md="9">
              <div class="wrapper-list">
                <template v-for="item in xueyuandongtai">
                  <router-link :key="item.id" :to="{path:'/common/details2', query: {siteId: $route.query.siteId, columnId: item.columnId, columnName: '学院动态', newId: item.id, siteId: item.siteId}}">
                    <el-row class="wrapper-list-item">
                      <el-col :span="2" class="date">{{ getMoment(item.modifyTime, 'MM.DD') }}</el-col>
                      <el-col :span="1"><el-divider class="divider" direction="vertical" /></el-col>
                      <el-col :span="21" class="content">
                        <span>{{ item.title }}</span>
                      </el-col>
                    </el-row>
                  </router-link>
                </template>
              </div>
            </el-col>
            <!-- <el-col :xs="12" :md="9">
						<el-row class="yanjiu-item" v-for="item in 5" :key="item">
							<el-row>
								<el-col class="yanjiu-item-dataTime" :xs="4" :md="2">
									<div class="childDiv childDiv1">
										<span class="span1">08</span>
									</div>
									<div class="childDiv childDiv2">
										<span class="span2">2020-04</span>
									</div>
								</el-col>
								<el-col class="yanjiu-item-content" :xs="20" :md="20">
									<div>办公室党支部前往田阳县桥马村开展扶贫走访工作(图文)</div>
									<span>根据学校工作安排，办公室党支部唐魁彪、傅亮彩、陈东娥办公室党支</span>
								</el-col>
							</el-row>
							<el-divider />
						</el-row>
					</el-col> -->
          </el-row>
        </el-tab-pane>
      </el-tabs>

    </div>
    <div class="box2">
      <el-row :gutter="40">
        <el-col :xs="24" :md="8" class="gzzd">
          <el-row>
            <el-col :xs="2" :md="2" style="text-align: right;line-height: 2.5rem;"><i class="gzzd-icon" /></el-col>
            <el-col :xs="16" :md="17">
              <h4>课程建设</h4>
            </el-col>
            <el-col :xs="6" :md="5">
              <p class="gengduo">
                <template v-for="item in columnList">
                  <template v-if="item.name === '课程建设'">
                    <router-link :key="item.id" :to="{path:'/common/commonlist2', query: {siteId: $route.query.siteId, columnId: item.id, columnName: item.name}}">更多></router-link>
                  </template>
                </template>
              </p>
            </el-col>
          </el-row>
          <el-row class="gzzd-list">
            <el-row v-for="item in kechengsheji" :key="item.id" class="gzzd-list-item">
              <router-link :to="{path:'/common/details2', query: {siteId: $route.query.siteId, columnId: item.columnId, columnName: '课程建设', newId: item.id, siteId: item.siteId}}">
                <el-col :span="2">
                  <div class="gzzd-list-item-HX" />
                </el-col>
                <el-col :span="22" class="gzzd-list-item-content">
                  <el-row class="gzzd-list-item-content-title">{{ item.title }}</el-row>
                </el-col>
              </router-link>
            </el-row>
          </el-row>
        </el-col>
        <el-col :xs="24" :md="8" class="gzzd">
          <el-row>
            <el-col :xs="2" :md="2" style="text-align: right;line-height: 2.5rem;"><i class="gzzd-icon" /></el-col>
            <el-col :xs="16" :md="17">
              <h4>教学科研</h4>
            </el-col>
            <el-col :xs="6" :md="5">
              <p class="gengduo">
                <template v-for="item in columnList">
                  <template v-if="item.name === '教学科研'">
                    <router-link :key="item.id" :to="{path:'/common/commonlist2', query: {siteId: $route.query.siteId, columnId: item.id, columnName: item.name}}">更多></router-link>
                  </template>
                </template>
              </p>
            </el-col>
          </el-row>
          <el-row class="gzzd-list">
            <el-row v-for="item in jiaoxuekeyan" :key="item.id" class="gzzd-list-item">
              <router-link :to="{path:'/common/details2', query: {siteId: $route.query.siteId, columnId: item.columnId, columnName: '教学科研', newId: item.id, siteId: item.siteId}}">
                <el-col :span="2">
                  <div class="gzzd-list-item-HX" />
                </el-col>
                <el-col :span="22" class="gzzd-list-item-content">
                  <el-row class="gzzd-list-item-content-title">{{ item.title }}</el-row>
                </el-col>
              </router-link>
            </el-row>
          </el-row>
        </el-col>
        <el-col :xs="24" :md="8" class="gzzz">
          <el-row>
            <el-col :xs="2" :md="2" style="text-align: right;line-height: 2.5rem;"><i class="gzzz-icon" /></el-col>
            <el-col :xs="16" :md="19">
              <h4>通知公告</h4>
            </el-col>
            <el-col :xs="6" :md="3">
              <p class="gengduo">
                <template v-for="item in columnList">
                  <template v-if="item.name === '通知公告'">
                    <router-link :key="item.id" :to="{path:'/common/commonlist2', query: {siteId: $route.query.siteId, columnId: item.id, columnName: item.name}}">更多></router-link>
                  </template>
                </template>
              </p>
            </el-col>
          </el-row>
          <el-row v-for="item in tongzhigonggao" :key="item.id" class="yanjiu-item">
            <router-link :to="{path:'/common/details2', query: {siteId: $route.query.siteId, columnId: item.columnId, columnName: '通知公告', newId: item.id, siteId: item.siteId}}">
              <el-row>
                <el-col class="yanjiu-item-dataTime" :xs="12" :md="2">
                  <div class="childDiv childDiv1">
                    <span class="span1">{{ getMoment(item.modifyTime, 'DD') }}</span>
                  </div>
                  <div class="childDiv childDiv2">
                    <span class="span2">{{ getMoment(item.modifyTime, 'YYYY-MM') }}</span>
                  </div>
                </el-col>
                <el-col class="yanjiu-item-content" :xs="12" :md="20">
                  <div>{{ item.title }}</div>
                  <span>{{ item.subTitle }}</span>
                </el-col>
              </el-row>
              <el-divider />
            </router-link>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="box3">
      <el-row class="bmfc">
        <el-row>
          <el-col :xs="1" :md="1" style="text-align: right;line-height: 2.5rem;"><i class="bmfc-icon" /></el-col>
          <el-col :xs="16" :md="21">
            <h4>学院风采</h4>
          </el-col>
          <el-col :xs="7" :md="2">
            <p class="gengduo">
              <template v-for="item in columnList">
                <template v-if="item.name === '学院风采'">
                  <router-link :key="item.id" :to="{path:'/common/commonlist2', query: {siteId: $route.query.siteId, columnId: item.id, columnName: item.name}}">更多></router-link>
                </template>
              </template>
            </p>
          </el-col>
        </el-row>
        <el-row class="bmfc-images" :gutter="20">
          <el-col v-for="item in xueyuanfengcai" :key="item.id" class="bmfc-images-item" :xs="24" :md="6">
            <router-link :to="{path:'/common/details2', query: {siteId: $route.query.siteId, columnId: item.columnId, columnName: '学院风采', newId: item.id, siteId: item.siteId}}">
              <img :src="item.image" style="width: 100%;height: 150px;">
              <h4 class="bmfc-images-item-title">{{ item.title }}</h4>
            </router-link>
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)

import { mapGetters } from 'vuex'
import { getList } from '@/api/request.js'
import moment from 'moment'
moment.locale('zh-cn')
export default {
  data() {
    return {
      activeName: 'first',
      columnList: [],
      xueyuandongtai: [],
      kechengsheji: [],
      jiaoxuekeyan: [],
      tongzhigonggao: [],
      xueyuanfengcai: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 30000
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'menu'
    ])
  },
  created() {
    if (this.menu.length > 0) {
      for (var i = 0; i < this.menu.length; i++) {
        if (this.menu[i].name === '首页') {
          this.getColumnList(this.menu[i].id)
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
              case '学院动态':
                this.getNewsList(this.columnList[i].id, 6).then(results => {
                  this.xueyuandongtai = results
                })
                break
              case '课程建设':
                this.getNewsList(this.columnList[i].id, 8).then(results => {
                  this.kechengsheji = results
                })
                break
              case '教学科研':
                this.getNewsList(this.columnList[i].id, 8).then(results => {
                  this.jiaoxuekeyan = results
                })
                break
              case '通知公告':
                this.getNewsList(this.columnList[i].id, 5).then(results => {
                  this.tongzhigonggao = results
                })
                break
              case '学院风采':
                this.getNewsList(this.columnList[i].id, 4).then(results => {
                  this.xueyuanfengcai = results
                })
                break
            }
          }
        }
      })
    },
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
    getMoment(date, str) {
      return moment(date).format(str)
    }
  }
}
</script>

<style lang="scss" scoped>
	/deep/ .swiper-pagination-bullet {
		background: #FFFFFF;
	}

	/deep/ .swiper-pagination-bullet-active {
		background: #CDA24F;
	}

	/deep/ .el-tabs__item {
		font-size: 18px;
		font-weight: bold;
	}

	/deep/ .el-tabs__active-bar {
		width: 80px;
		transform: translateX(0) !important;
	}

	%icon {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		background-size: 100% 100%;
		margin: 1.15rem auto;
	}

	%box {
		padding: 1.5% 18.5%;
	}

	p {
		&.gengduo {
			line-height: 2rem;
			font-size: 14px;
			color: #999999;
			text-align: right;
		}
	}

	img {
		width: 100%;
		height: 100%;
	}

	.home-container {
		.box1 {
			min-height: 20rem;
			@extend %box;

			.icon {
				@extend %icon;
				position: absolute;
				margin: 0.7rem 0;
				background-image: url(../../assets/departmentHome/bmdt.png)
			}

			/deep/ .el-tabs__item {
				padding-left: 1.8rem;
			}

			.banner {
				.swiper {
					font-size: 0;

					&-pagination {
						padding-right: 2.5%;
						text-align: right;
					}
				}

				&-title {
					margin: 0;
					font-size: 1rem;
					width: 98%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					text-align: left;
					line-height: 2rem;
					padding: 0.625rem;
					background-color: #0000005a;
					color: white;
					position: absolute;
					bottom: 0;
				}
			}
			.wrapper-list{
				&-item{
					border-bottom: 1px solid #ccc;
          padding: 2.5px 0px;
					.date{
						padding: 1.4rem 0;
						text-align: center;
					}
					.divider{
						padding: 1.2rem 0;
						margin-top: 0.75rem;
					}
					.content{
						padding: 0.88rem 0;
					}
				}
			}

		}

		.box2 {
			@extend %box;
			padding-top: 0;
			min-height: 32rem;

			//课程建设

			//教学科研
			.gzzd {
				color: #005BAC;

				&-icon {
					@extend %icon;
					background-image: url(../../assets/departmentHome/gzzd.png)
				}

				.gengduo {
					@extend .gengduo;
					font-weight: 600;
					color: #005BAC !important;
				}

				&-list {
					background-color: #FAFAFA;
					padding: 0 15px;

					&-item {
						&-HX {
							background-color: #005BAC;
							border-radius: 5px;
							width: 50%;
							height: 0.3rem;
							margin: 1rem auto;
							margin-top: 1.6rem;
							margin-left: 0.2rem;
						}

						&-content {
							&-title {
								color: #333333;
								margin: 1.3rem 0rem;
								width: 100%;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
						}
					}
				}
			}

			//通知公告
			.gzzz {
				color: #005BAC;

				&-icon {
					@extend %icon;
					background-image: url(../../assets/departmentHome/gzzz.png)
				}

				.gengduo {
					@extend .gengduo;
					font-weight: 600;
					color: #005BAC !important;
				}

				.yanjiu-item {
					.el-divider--horizontal {
						margin: 20px 0;
					}
					background-color: #FAFAFA;
					padding: 11px 15px 0 15px;

					&-dataTime {
						width: 52px;
						height: 52px;
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
								margin-left: -10px;
								margin-top: -12px;
								font-size: 18px;
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
								margin-left: -22px;
								margin-top: -12px;
								font-size: 12px;
								color: rgba(102, 102, 102, 1);
								line-height: 24px;
							}
						}
					}

					&-content {
						padding-left: 0.5rem;
						position: relative;

						div {
							color: rgba(51, 51, 51, 1);
							line-height: 24px;
							font-size: 18px;
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						span {
							position: absolute;
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							line-height: 24px;
							font-size: 14px;
							color: rgba(153, 153, 153, 1);
						}
					}
				}
			}
		}

		.box3 {
			@extend %box;
			min-height: 20rem;

			.bmfc {
				&-icon {
					@extend %icon;
					background-image: url(../../assets/departmentHome/bmgk.png);
				}

				&-images {
					&-item {
						&-title {
							margin: 0;
							font-size: 14px;
							padding: 0.625rem 0rem;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}
		}

		.hengxian {
			margin: 0.5rem 0rem;
		}

		.shuxian {
			height: 2rem;
		}
	}
</style>
