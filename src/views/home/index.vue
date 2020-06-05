<template>
  <div class="home-container">
    <el-row class="content-list">
      <img src="@/assets/home/banner.png" style="margin-top: 10.7rem;">
      <NavMenu class="navmenu" />
      <div class="content-list-wrapper">
        <!-- 校园新闻 -->
        <el-row class="box1">
          <router-link to="/secondaryHome" style="position: absolute;top: 2%;right: 0%;z-index: 3;">更多></router-link>
          <el-tabs v-model="activeName.box1">
            <el-tab-pane label="校园新闻" name="1">
              <div class="wrapper">
                <el-row :gutter="20">
                  <el-col class="wrapper-item" :xs="24" :md="15">
                    <router-link :to="{path:'/common/details1', query: {siteId: xiaoyuanxinwen.length>0?xiaoyuanxinwen[0].siteId:'', itemid: xiaoyuanxinwen.length>0?xiaoyuanxinwen[0].id:''}}">
                      <img :src="xiaoyuanxinwen.length>0?xiaoyuanxinwen[0].image:''" style="width: 100%;height: 547px;">
                      <el-row class="wrapper-item-title">
                        <p>{{ xiaoyuanxinwen.length>0?xiaoyuanxinwen[0].title:'' }}</p>
                      </el-row>
                    </router-link>
                  </el-col>
                  <el-col :xs="24" :md="9">
                    <div class="wrapper-list">
                      <template v-for="(item, index) in xiaoyuanxinwen">
                        <router-link :key="item.id" :to="{path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}}">
                          <el-row v-if="index>0" class="wrapper-list-item">
                            <el-col :span="3" class="date">{{ getMoment(item.modifyTime, 'MM.DD') }}</el-col>
                            <el-col :span="1"><el-divider class="divider" direction="vertical" /></el-col>
                            <el-col :span="20" class="content">
                              <span>{{ item.title }}</span>
                            </el-col>
                          </el-row>
                        </router-link>
                      </template>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-row>
        <!-- 通知公告 -->
        <el-row :gutter="20">
          <el-col class="box2" :xs="24" :md="17">
            <el-tabs v-model="activeName.box2">
              <el-tab-pane label="通知公告" name="1">
                <el-row class="yanjiu">
                  <el-row v-for="item in tongzhigonggao" :key="item.id" class="yanjiu-item">
                    <router-link :to="{path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}}">
                      <el-row>
                        <el-col class="yanjiu-item-dataTime" :xs="4" :md="2">
                          <div class="childDiv childDiv1">
                            <span class="span1">{{ getMoment(item.modifyTime, 'DD') }}</span>
                          </div>
                          <div class="childDiv childDiv2">
                            <span class="span2">{{ getMoment(item.modifyTime, 'YYYY-MM') }}</span>
                          </div>
                        </el-col>
                        <el-col class="yanjiu-item-content" :xs="20" :md="22">
                          <div>{{ item.title }}</div>
                          <span>{{ item.subTitle }}</span>
                        </el-col>
                      </el-row>
                    </router-link>
                    <el-divider />
                  </el-row>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="基层动态" name="2">
                <el-row class="yanjiu">
                  <el-row v-for="item in jichengdongtai" :key="item.id" class="yanjiu-item">
                    <router-link :to="{path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}}">
                      <el-row>
                        <el-col class="yanjiu-item-dataTime" :xs="4" :md="2">
                          <div class="childDiv childDiv1">
                            <span class="span1">{{ getMoment(item.modifyTime, 'DD') }}</span>
                          </div>
                          <div class="childDiv childDiv2">
                            <span class="span2">{{ getMoment(item.modifyTime, 'YYYY-MM') }}</span>
                          </div>
                        </el-col>
                        <el-col class="yanjiu-item-content" :xs="20" :md="22">
                          <div>{{ item.title }}</div>
                          <span>{{ item.subTitle }}</span>
                        </el-col>
                      </el-row>
                    </router-link>
                    <el-divider />
                  </el-row>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="学术研究" name="3">
                <el-row class="yanjiu">
                  <el-row v-for="item in xueshuyanjiu" :key="item.id" class="yanjiu-item">
                    <router-link :to="{path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}}">
                      <el-row>
                        <el-col class="yanjiu-item-dataTime" :xs="4" :md="2">
                          <div class="childDiv childDiv1">
                            <span class="span1">{{ getMoment(item.modifyTime, 'DD') }}</span>
                          </div>
                          <div class="childDiv childDiv2">
                            <span class="span2">{{ getMoment(item.modifyTime, 'YYYY-MM') }}</span>
                          </div>
                        </el-col>
                        <el-col class="yanjiu-item-content" :xs="20" :md="22">
                          <div>{{ item.title }}</div>
                          <span>{{ item.subTitle }}</span>
                        </el-col>
                      </el-row>
                    </router-link>
                    <el-divider />
                  </el-row>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="招标公告" name="4">
                <el-row class="yanjiu">
                  <el-row v-for="item in zhaobiaogonggao" :key="item.id" class="yanjiu-item">
                    <router-link :to="{path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}}">
                      <el-row>
                        <el-col class="yanjiu-item-dataTime" :xs="4" :md="2">
                          <div class="childDiv childDiv1">
                            <span class="span1">{{ getMoment(item.modifyTime, 'DD') }}</span>
                          </div>
                          <div class="childDiv childDiv2">
                            <span class="span2">{{ getMoment(item.modifyTime, 'YYYY-MM') }}</span>
                          </div>
                        </el-col>
                        <el-col class="yanjiu-item-content" :xs="20" :md="22">
                          <div>{{ item.title }}</div>
                          <span>{{ item.subTitle }}</span>
                        </el-col>
                      </el-row>
                      <el-divider />
                    </router-link>
                  </el-row>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col class="box3" :xs="24" :md="7">
            <el-tabs v-model="activeName.box3">
              <el-tab-pane label="快速导航" name="1">
                <el-row :gutter="10">
                  <el-col :xs="12" :md="12" >
                    <a href="http://172.16.19.100:8082">
                      <img src="@/assets/home/dh1.png">
                    </a>
                  </el-col>
                  <el-col :xs="12" :md="12">
                    <a href="https://121.31.58.86">
                      <img src="@/assets/home/dh2.png">
                    </a>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :xs="12" :md="12">
                    <a href="http://113.12.192.116:83/">
                      <img src="@/assets/home/dh3.png">
                    </a>
                  </el-col>
                  <el-col :xs="12" :md="12">
                    <img src="@/assets/home/dh4.png">
                  </el-col>
                </el-row>
                <el-row>
                  <img src="@/assets/home/dh5.png">
                </el-row>
                <el-row>
                  <img src="@/assets/home/dh6.png">
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
        <!-- 专题网站 -->
        <el-row style="margin-top: 30px;">
          <el-row>
            <el-col :span="12" style="font-size: 20px;">专题网站</el-col>
            <el-col :span="12" style="text-align: right;line-height: 24px;">
              <!-- :to="{path:'/common/commonlist2', query: {columnName: '专题网站'}}" -->
              <router-link :to="{path:'/common/commonlist2', query: {columnName: '专题网站'}}">
              查看更多>
              </router-link>
              </el-col>
          </el-row>
        </el-row>
        <el-row class="zhuanti-list" :gutter="20">
          

          <el-col :xs="12" :md="6" v-for="item in ZTWY" :key="item.id">
            <a :href="item.url">
            <!-- <img src="@/assets/home/zhuant1.png"> -->
            <img :src="item.image">
             </a>
          </el-col>
         
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script>
import { getList } from '@/api/request.js'
import NavMenu from '@/layout/components/main/components/NavMenu.vue'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)
import 'babel-polyfill'
import moment from 'moment'
moment.locale('zh-cn')
export default {
  name: 'Home',
  components: {
    NavMenu
  },
  data() {
    return {
      activeName: {
        box1: '1',
        box2: '1',
        box3: '1'
      },
      activeIndex: '1',
      xiaoyuanxinwen: [],
      tongzhigonggao: [],
      jichengdongtai: [],
      zhaobiaogonggao: [],
      xueshuyanjiu: [],
      ZTWY:[]
    }
  },
  created() {
    this.getXYXW()
    this.getTZGG()
    this.getJCDT()
    this.getXSYJ()
    this.getZBGG()
    this.getzt()
  },
  methods: {
    getXYXW() {
      const data = {
        columnId: 56,
        pageNum: 1,
        pageSize: 7
      }
      getList('news', data).then(response => {
        this.xiaoyuanxinwen = response.data.data.data
      })
    },
    getTZGG() {
      const data = {
        columnId: 57,
        pageNum: 1,
        pageSize: 4
      }
      getList('news', data).then(response => {
        this.tongzhigonggao = response.data.data.data
      })
    },
    getJCDT() {
      const data = {
        columnId: 58,
        pageNum: 1,
        pageSize: 4
      }
      getList('news', data).then(response => {
        this.jichengdongtai = response.data.data.data
      })
    },
    getXSYJ() {
      const data = {
        columnId: 59,
        pageNum: 1,
        pageSize: 4
      }
      getList('news', data).then(response => {
        this.xueshuyanjiu = response.data.data.data
      })
    }
    ,
    getzt() {
      const data = {
        
        pageNum: 1,
        pageSize: 4
      }
      getList('subject', data).then(response => {
        this.ZTWY = response.data.data.data
        console.log(this.ZTWY)
      })
    },
    getZBGG() {
      const data = {
        columnId: 60,
        pageNum: 1,
        pageSize: 4
      }
      getList('news', data).then(response => {
        this.zhaobiaogonggao = response.data.data.data
      })
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

	%box-border {
		border: 0px solid #DFDFDF;
	}

	%box-list {
		padding: 0.5rem;
		height: 100%;
	}

	.home-container {
		/deep/ .swiper {
			font-size: 0;

			&-pagination-bullet {
				background-color: #ffffff;
				opacity: 1;

				&-active {
					width: 20px;
					border-radius: 5px;
					background-color: #0374ff;
					opacity: 1;
				}
			}
		}

		.content-list {
			min-height: 83rem;
			background-image: url(../../assets/home/beij.png);
			background-repeat: no-repeat;
      background-size: 100%;
			padding: 1.5% 10.5%;

			/deep/ .navmenu {
				box-shadow: 0px 1px 0px 0px rgba(7, 68, 127, 1);
				margin: 0.4rem 0 0.8rem 0;

				.el-col-15 {
					width: 100%;
				}
			}

			&-wrapper {
				width: 100%;
				height: 100%;
				background-color: white;

				.box1 {
					min-height: 33.45rem;
					position: relative;
					@extend %box-border;

					.wrapper {
						@extend %box-list;
							&-item {
								font-size: 0;

								&-title {
									position: relative;

									P {
										font-size: 1rem;
										margin: 0;
										width: 100%;
										overflow: hidden;
										text-overflow: ellipsis;
										white-space: nowrap;
										padding: 1rem 1rem;
										min-height: 1rem;
										background-color: #00000052;
										position: absolute;
										bottom: 0;
										color: white;
									}
								}
							}
							&-list{
                min-height: 530px;
								&-item{
									padding: 0.6rem 0;
									border-bottom: 1px solid #ccc;
									.date{
										padding: 1.4rem 0;
										text-align: center;
									}
									.divider{
										padding: 1.2rem 0;
										margin-top: 0.75rem;
									}
									.content{
										padding: 1rem 0;
									}
								}
							}

					}
				}

				.box2 {
					min-height: 27.55rem;
					margin-top: 20px;
					.yanjiu{
						&-item{
							&-dataTime {
								width: 56px;
								height: 56px;
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
							&-content{
								width: 94.5%;
								padding-left: 0.5rem;
								position: relative;
								div{
									color:rgba(51,51,51,1);
									line-height:24px;
								}
								span{
									position: absolute;
									width: 100%;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									line-height:24px;
									font-size:14px;
									color:rgba(153,153,153,1);
								}
							}
						}
					}

				}

				.box3 {
					margin-top: 20px;
					img{
						margin-bottom: 0.3rem;
					}
				}

				.zhuanti-list {

					img {
						margin-top: 20px;
						width: 100%;
						height: 100%;
					}
				}

				.list {

					&-item {
						margin: 1.5rem 0rem;

						&:first-child {
							margin-top: 0;
						}

						&:last-child {
							margin-bottom: 0;
						}

						&-point {
							font-size: 2rem;
							line-height: 1rem;
						}

						p {
							margin: 0;
						}
					}
				}
			}
		}
		/deep/ .el-tabs__item{
			font-size: 18px;
			font-weight: bold;
		}
	}
</style>
