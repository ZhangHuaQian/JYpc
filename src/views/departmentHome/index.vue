<template>
  <div class="home-container">
    <div class="box1" style="position: relative;">
      <a style="position: absolute;right: 18.5%;top: 7.5%;z-index: 3;">
        <template v-for="item in columnList">
          <template v-if="item.name === '部门动态'">
            <router-link :key="item.id" :to="{path:'/common/commonlist2', query: {siteId: $route.query.siteId, columnId: item.id, columnName: item.name}}">更多></router-link>
          </template>
        </template>
      </a>
      <i class="icon" />
      <el-tabs v-model="activeName">
        <el-tab-pane label="部门动态" name="first">
          <el-row :gutter="20">
            <el-col :xs="12" :md="15">
              <el-row class="banner">
                <swiper class="swiper" :options="swiperOption" style="width: 100%;">
                  <template v-for="item in bumendongtai">
                    <swiper-slide :key="item.id" style="text-align: right;position: relative;">
                      <router-link :to="{path:'/common/details2', query: {siteId: $route.query.siteId, columnId: item.columnId, columnName: '部门动态', newId: item.id, siteId: item.siteId}}">
                        <img :src="item.image" style="width: 100%;height: 390px;">
                        <p class="banner-title">{{ item.title }}</p>
                      </router-link>
                    </swiper-slide>
                  </template>
                  <div slot="pagination" class="swiper-pagination" />
                </swiper>
              </el-row>
            </el-col>
            <el-col :xs="12" :md="9">
              <el-row v-for="item in bumendongtai" :key="item.id" class="yanjiu-item">
                <router-link :to="{path:'/common/details2', query: {siteId: $route.query.siteId, columnId: item.columnId, columnName: '部门动态', newId: item.id, siteId: item.siteId}}">
                  <el-row>
                    <el-col class="yanjiu-item-dataTime" :xs="4" :md="2">
                      <div class="childDiv childDiv1">
                        <span class="span1">{{ getMoment(item.modifyTime, 'DD') }}</span>
                      </div>
                      <div class="childDiv childDiv2">
                        <span class="span2">{{ getMoment(item.modifyTime, 'YYYY-MM') }}</span>
                      </div>
                    </el-col>
                    <el-col class="yanjiu-item-content" :xs="20" :md="20">
                      <div>{{ item.title }}</div>
                      <span>{{ item.subTitle }}</span>
                    </el-col>
                  </el-row>
                  <el-divider />
                </router-link>
              </el-row>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>

    </div>
    <div class="box2">
      <el-row :gutter="40">
        <el-col :xs="24" :md="8" class="gzgg">
          <el-row>
            <el-col :xs="2" :md="2" style="text-align: right;line-height: 2.5rem;"><i class="gzgg-icon" /></el-col>
            <el-col :xs="16" :md="19"><h4>通知公告</h4></el-col>
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
          <el-row class="gzgg-list">
            <el-row v-for="item in tongzhigonggao" :key="item.id" class="gzgg-list-item">
              <router-link :to="{path:'/common/details2', query: {siteId: $route.query.siteId, columnId: item.columnId, columnName: '通知公告', newId: item.id, siteId: item.siteId}}">
                <el-col :span="4" class="gzgg-list-item-date">
                  <el-row class="gzgg-list-item-date-day">{{ getMoment(item.modifyTime, 'DD') }}</el-row>
                  <el-row class="gzgg-list-item-date-year">{{ getMoment(item.modifyTime, 'YYYY.MM') }}</el-row>
                </el-col>
                <el-col :span="2" style="text-align: center;line-height: 3.5rem;">
                  <el-divider direction="vertical" class="shuxian" />
                </el-col>
                <el-col :span="18" class="gzgg-list-item-content">
                  <el-row class="gzgg-list-item-content-introduction">{{ item.title }}</el-row>
                </el-col>
              </router-link>
            </el-row>
          </el-row>
        </el-col>
        <el-col :xs="24" :md="8" class="gzzd">
          <el-row>
            <el-col :xs="2" :md="2" style="text-align: right;line-height: 2.5rem;"><i class="gzzd-icon" /></el-col>
            <el-col :xs="16" :md="17"><h4>规章制度</h4></el-col>
            <el-col :xs="6" :md="5">
              <p class="gengduo">
                <template v-for="item in columnList">
                  <template v-if="item.name === '规章制度'">
                    <router-link :key="item.id" :to="{path:'/common/commonlist2', query: {siteId: $route.query.siteId, columnId: item.id, columnName: item.name}}">更多></router-link>
                  </template>
                </template>
              </p>
            </el-col>
          </el-row>
          <el-row class="gzzd-list">
            <el-row v-for="item in guizhangzhidu" :key="item.id" class="gzzd-list-item">
              <router-link :to="{path:'/common/details2', query: {siteId: $route.query.siteId, columnId: item.columnId, columnName: '规章制度', newId: item.id, siteId: item.siteId}}">
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
            <el-col :xs="16" :md="19"><h4>工作职责</h4></el-col>
            <el-col :xs="6" :md="3">
              <p class="gengduo">
                <template v-for="item in columnList">
                  <template v-if="item.name === '工作职责'">
                    <router-link :key="item.id" :to="{path:'/common/commonlist2', query: {siteId: $route.query.siteId, columnId: item.id, columnName: item.name}}">更多></router-link>
                  </template>
                </template>
              </p>
            </el-col>
          </el-row>
          <el-row class="gzzz-list">
            <el-row v-for="item in gongzuozhize" :key="item.id" class="gzzz-list-item">
              <router-link :to="{path:'/common/details2', query: {siteId: $route.query.siteId, columnId: item.columnId, columnName: '工作职责', newId: item.id, siteId: item.siteId}}">
                <el-col :span="2">
                  <div class="gzzz-list-item-HX" />
                </el-col>
                <el-col :span="18" class="gzzz-list-item-content">
                  <el-row class="gzzz-list-item-content-title">{{ item.title }}</el-row>
                </el-col>
              </router-link>
            </el-row>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="box3">
      <el-row class="bmfc">
        <el-row>
          <el-col :xs="1" :md="1" style="text-align: right;line-height: 2.5rem;"><i class="bmfc-icon" /></el-col>
          <el-col :xs="16" :md="21"><h4>部门风采</h4></el-col>
          <el-col :xs="7" :md="2">
            <p class="gengduo">
              <template v-for="item in columnList">
                <template v-if="item.name === '部门风采'">
                  <router-link :key="item.id" :to="{path:'/common/commonlist2', query: {siteId: $route.query.siteId, columnId: item.id, columnName: item.name}}">更多></router-link>
                </template>
              </template>
            </p>
          </el-col>
        </el-row>
        <el-row class="bmfc-images" :gutter="20">
          <template v-for="item in bumenfengcai">
            <router-link :key="item.id" :to="{path:'/common/details2', query: {siteId: $route.query.siteId, columnId: item.columnId, columnName: '部门风采', newId: item.id, siteId: item.siteId}}">
              <el-col class="bmfc-images-item" :xs="24" :md="6">
                <img :src="item.image" style="width: 100%;height: 150px;">
                <h4 class="bmfc-images-item-title">{{ item.title }}</h4>
              </el-col>
            </router-link>
          </template>
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
      bumendongtai: [],
      tongzhigonggao: [],
      guizhangzhidu: [],
      gongzuozhize: [],
      bumenfengcai: [],
      gzzeID:'',
      tzggID:'',
      gzzdID:'',
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
   watch: {
      '$route'(to, from) {
        this.$router.go(0);
      }
    },
  created() {
    console.log(this.gzzeID,'444441')
    
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
                  console.log(results,'规章制度')
                  
                })
                break
              case '工作职责':
                this.getNewsList(this.columnList[i].id).then(results => {
                  this.gongzuozhize = results
                  // console.log(results,'44444')
                  this.gzzeID=results
                  console.log(results,'工作职责')
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
  /deep/ .swiper-pagination-bullet{
    background: #FFFFFF;
  }
  /deep/ .swiper-pagination-bullet-active{
    background: #CDA24F;
  }
  /deep/ .el-tabs__item{
    font-size: 18px;
    font-weight: bold;
  }
  /deep/ .el-tabs__active-bar{
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

    .icon{
      @extend %icon;
      position: absolute;
      margin: 0.7rem 0;
      background-image: url(../../assets/departmentHome/bmdt.png)
    }
    /deep/ .el-tabs__item{
      padding-left: 1.8rem;
    }
      .banner{
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
          white-space:nowrap;
          text-align: left;
          line-height: 2rem;
          padding: 0.625rem;
          background-color: #0000005a;
          color: white;
          position: absolute;
          bottom: 0;
        }
      }

    .yanjiu-item{
      .el-divider--horizontal{
        margin: 14px 0;
      }
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
        &-content{
          width: 88%;
          padding-left: 0.5rem;
          position: relative;
          div{
            color:rgba(51,51,51,1);
            line-height:24px;
          font-size:18px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          }
          span{
            position: absolute;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height:24px;
          font-size: 14px;
            color:rgba(153,153,153,1);
          }
        }
    }
    }
    .box2 {
      @extend %box;
      padding-top: 0;
      min-height: 32rem;
      background-color: #C4DDFB;
    //通知公告
      .gzgg {
        margin-top: 1.25rem;
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
          &-item {
            margin: 0.75rem 0px;
            background-color: white;
            border-left: 4px solid #EEA200;
            min-height: 4rem;
            border-radius:5px;
            padding: 0.5rem 1rem;
            &-date {
              padding: 0.75rem 0rem;
              &-day {
        color: #666666;
        font-size: 18px;
                text-align: center;
        margin-right: 0.6rem;
              }
              &-year {
        color: #666666;
        font-size: 14px;
              }
            }
            &-content {
        margin: 0.6rem 0;
              &-introduction {
                color: #666666;
                width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
              }
            }
          }
        }
      }
    //规章制度
      .gzzd {
        margin-top: 1.25rem;
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
          &-item {
            margin: 0.75rem 0px;
            background-color: white;
            border-left: 4px solid #EEA200;
            min-height: 4rem;
            border-radius:5px;
            padding: 0.5rem 1rem;
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
                white-space:nowrap;
              }
            }
          }
        }
      }
    //工作职责
      .gzzz {
        margin-top: 1.25rem;
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

        &-list {
          &-item {
            margin: 0.75rem 0px;
            background-color: white;
            border-left: 4px solid #EEA200;
            min-height: 4rem;
            border-radius:5px;
            padding: 0.5rem 1rem;
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
                white-space:nowrap;
              }
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
              white-space:nowrap;
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
