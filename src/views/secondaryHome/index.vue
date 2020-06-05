<template>
  <div class="home-container">
    <el-row class="news-list" :gutter="40">
      <el-col class="first-news" :md="16">
        <router-link :to="{path:'/common/details1', query: {itemid: tuijianxinwen.length>0?tuijianxinwen[0].id:'', siteId: tuijianxinwen.length>0?tuijianxinwen[0].siteId:''}}">
          <el-row style="font-size: 0;">
            <img :src="tuijianxinwen.length>0?tuijianxinwen[0].image:''" style="width: 785px;height: 440px;">
          </el-row>
          <el-row class="first-news-title">
            <p style="text-indent: 2rem;height: 50px;">{{ tuijianxinwen.length>0?tuijianxinwen[0].title:'' }}</p>
            <!--          <h2 style="position: absolute;bottom: 0;right: 0;margin: 0;width: 15%;text-align: center;background-color: #DFDFDF;line-height: 2.8rem;">
              03
            </h2> -->
          </el-row>
        </router-link>
      </el-col>
      <el-col class="others-news" :md="8" style="height: 525px;">
        <template v-for="item in tuijianxinwen">
          <router-link :key="item.id" :to="{path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}}">
            <el-row class="others-news-item">
              <span>{{ item.title }}</span>
              <p class="others-news-item-date">{{ getMoment(item.modifyTime, 'YYYY-MM-DD') }}</p>
            </el-row>
            <el-divider />
          </router-link>
        </template>
        <el-row class="others-news-item">
          <router-link :to="{path:'/common/commonlist1', query: {columnId: 72, columnName: '推荐新闻'}}" tag="p" style="text-align: right;color: #666666;cursor:pointer;">更多新闻></router-link>
        </el-row>
      </el-col>
    </el-row>
    <!--    <el-row class="xsyj">
      <el-row>
        <el-col :xs="2" :md="1" style="text-align: right;line-height: 2.5rem;"><i class="xsyj-icon" /></el-col>
        <el-col :xs="16" :md="22"><h4>学术研究</h4></el-col>
        <el-col :xs="6" :md="1">
          <p style="margin: 1.25rem 0rem;">更多></p>
        </el-col>
      </el-row>
      <el-row class="xsyj-images" :gutter="20">
        <el-col class="xsyj-images-item" :xs="24" :md="8">
          <img src="../../assets/secondaryHome/xwt2.png">
          <el-row class="xsyj-images-item-title">
            <p>关于参加第二届中国警察法学青年论坛征文活动</p>
          </el-row>
        </el-col>
        <el-col class="xsyj-images-item" :xs="24" :md="8">
          <img src="../../assets/secondaryHome/xwt3.png">
          <el-row class="xsyj-images-item-title">
            <p>关于参加第二届中国警察法学青年论坛征文活动</p>
          </el-row>
        </el-col>
        <el-col class="xsyj-images-item" :xs="24" :md="8">
          <img src="../../assets/secondaryHome/xwt4.png">
          <el-row class="xsyj-images-item-title">
            <p>关于参加第二届中国警察法学青年论坛征文活动</p>
          </el-row>
        </el-col>
      </el-row>
    </el-row> -->
    <el-row class="sszzgz">
      <el-row>
        <el-col :xs="2" :md="1" style="text-align: right;line-height: 2.5rem;"><i class="sszzgz-icon" /></el-col>
        <el-col :xs="16" :md="22"><h4>思想政治工作</h4></el-col>
        <el-col :xs="6" :md="1">
          <p style="margin: 1.25rem 0rem;">
            <router-link :to="{path:'/common/commonlist1', query: {columnId: 73, columnName: '思想政治工作'}}">
              更多>
            </router-link>
          </p>
        </el-col>
      </el-row>
      <el-row class="sszzgz-newsList">
        <template v-for="item in sixiangzhengzhi">
          <router-link :key="item.id" :to="{path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}}">
            <el-row class="sszzgz-newsList-item" :gutter="20">
              <el-col class="sszzgz-newsList-item-image" :xs="8" :md="4">
                <img :src="item.image" style="width: 100%;height: 120px;">
              </el-col>
              <el-col class="sszzgz-newsList-item-content" :xs="16" :md="20">
                <h3>{{ item.title }}</h3>
                <p>{{ item.subTitle }}</p>
                <span>{{ getMoment(item.modifyTime, 'YYYY.MM.DD') }}</span>
              </el-col>
            </el-row>
            <el-divider />
          </router-link>
        </template>
      </el-row>
    </el-row>
    <!--    <el-row class="tzgg">
      <el-row>
        <el-col :xs="2" :md="1" style="text-align: right;line-height: 2.5rem;"><i class="tzgg-icon" /></el-col>
        <el-col :xs="16" :md="22"><h4>通知公告</h4></el-col>
        <el-col :xs="6" :md="1">
          <p style="margin: 1.25rem 0rem;">更多></p>
        </el-col>
      </el-row>
      <el-row class="tzgg-images" :gutter="20">
        <el-col class="tzgg-images-item" :xs="24" :md="8">
          <img src="../../assets/secondaryHome/xwt9.png">
          <el-row class="tzgg-images-item-content">
            <h4 class="tzgg-images-item-content-title">仙葫校区总平面规划调整设计项目询价公</h4>
            <p class="tzgg-images-item-content-introduction">根据广西壮族自治区财政厅文件（桂财采〔2019〕72号）的文件精神，我校仙葫校区总平面规划调整设计项目</p>
          </el-row>
        </el-col>
        <el-col class="tzgg-images-item" :xs="24" :md="8">
          <img src="../../assets/secondaryHome/xwt10.png">
          <el-row class="tzgg-images-item-content">
            <h4 class="tzgg-images-item-content-title">仙葫校区公安技术实验中心大楼和教工...</h4>
            <p class="tzgg-images-item-content-introduction">根据广西壮族自治区财政厅文件（桂财采〔2019〕72号）的文件精神，我校仙葫校区公安技术实验中心大楼和教工公寓楼...</p>
          </el-row>
        </el-col>
        <el-col class="tzgg-images-item" :xs="24" :md="8">
          <img src="../../assets/secondaryHome/xwt11.png">
          <el-row class="tzgg-images-item-content">
            <h4 class="tzgg-images-item-content-title">仙葫校区教学综合楼备用电源施工工程...</h4>
            <p class="tzgg-images-item-content-introduction">根据广西壮族自治区财政厅文件（桂财采〔2019〕72号）的文件精神，我校仙葫校区教学综合楼备用电源施工工程预算控制价为...</p>
          </el-row>
        </el-col>
      </el-row>
    </el-row> -->
    <el-row class="jyyx">
      <el-row>
        <el-col :xs="2" :md="1" style="text-align: right;line-height: 2.5rem;"><i class="jyyx-icon" /></el-col>
        <el-col :xs="16" :md="22"><h4>警院影相</h4></el-col>
        <el-col :xs="6" :md="1">
          <p style="margin: 1.25rem 0rem;">
            <router-link :to="{path:'/common/commonlist1', query: {columnId: 74, columnName: '警院影相'}}">
              更多>
            </router-link>
          </p>
        </el-col>
      </el-row>
      <el-row class="jyyx-images" :gutter="20">
        <template v-for="item in jingyuanyingxiang">
          <router-link :key="item.id" :to="{path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}}">
            <el-col class="jyyx-images-item" :xs="24" :md="12">
              <img :src="item.image" style="width: 100%;height: 340px;">
              <h4 class="jyyx-images-item-title">{{ item.title }}</h4>
            </el-col>
          </router-link>
        </template>
      </el-row>
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
      activeIndex: '1',
      tuijianxinwen: [],
      sixiangzhengzhi: [],
      jingyuanyingxiang: []
    }
  },
  created() {
    this.getTJXW()
    this.getSXZZ()
    this.getJYYX()
  },
  methods: {
    getTJXW() {
      const data = {
        columnId: 72,
        pageNum: 1,
        pageSize: 5
      }
      getList('news', data).then(response => {
        this.sixiangzhengzhi = response.data.data.data
      })
    },
    getSXZZ() {
      const data = {
        columnId: 73,
        pageNum: 1,
        pageSize: 3
      }
      getList('news', data).then(response => {
        this.sixiangzhengzhi = response.data.data.data
      })
    },
    getJYYX() {
      const data = {
        columnId: 74,
        pageNum: 1,
        pageSize: 2
      }
      getList('news', data).then(response => {
        this.jingyuanyingxiang = response.data.data.data
      })
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
  }
  .home-container {
    padding: 1.5% 18.5%;

    .news-list {
      .first-news {

        &-title {
          background-color: #F9F9F9;
          line-height: 3.3rem;
        }
      }

      .others-news {
        background-color: #FAFAFA;
        padding: 0rem 1.25rem;

        &-item {
          &-date {
            margin-bottom: 0px;
          }
        }
      }
    }

    .xsyj {
      margin-top: 3rem;

      &-icon {
        @extend %icon;
        background-image: url(../../assets/secondaryHome/xueshu.png);
      }

      &-images {
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
              white-space:nowrap;
              padding: 0.5rem 1rem;
              min-height: 1rem;
              background-color: #00000052;
              position: absolute;
              bottom: 0;
              color: white;
            }
          }
        }
      }
    }

    .sszzgz {
      margin-top: 3rem;

      &-icon {
        @extend %icon;
        background-image: url(../../assets/secondaryHome/six.png);
      }

      &-newsList {
        &-item {
          padding: 0.625rem 0rem;
          &-image {
            font-size: 0;
          }
          &-content {
            h3 {
              margin-top: 0.5rem;
            }
            p {
              color: #666666;
            }
            span {
              color: #999999;
            }
          }
        }
      }
    }

    .tzgg {
      @extend .xsyj;

      &-icon {
        @extend %icon;
        background-image: url(../../assets/secondaryHome/tz.png);
      }
      &-images {
        &-item {
          @extend .xsyj-images-item;
          &-content {
            font-size: 1rem;
            background-color: #F5F5F5;
            padding: 0.625rem;
            &-title {
              margin: 0.625rem 0rem;
              color: #333333;
            }
            &-introduction {
              color: #666666;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:3;
            }
          }
        }
      }
    }

    .jyyx {
      @extend .xsyj;

      &-icon {
        @extend %icon;
        background-image: url(../../assets/secondaryHome/yyua.png);
      }

      &-images {
        &-item {
          @extend .xsyj-images-item;
          &-title {
            font-size: 1rem;
            padding: 0.625rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap;
          }
        }
      }
    }
  }
</style>
