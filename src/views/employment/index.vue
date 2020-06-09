<template>
  <div class="home-container">
    <el-row class="news-list" justify="space-between">
      <router-link
        :to="{path:'/common/details1', query: {itemid: newsList.length>0?newsList[0].id:'', siteId: newsList.length>0?newsList[0].siteId:''}}"
      >
        <el-col class="first-news" :md="16">
          <el-row style="font-size: 0;">
            <img :src="newsList.length>0 && newsList[0].image || ''" style="height: 573px;" />
          </el-row>
          <el-row class="first-news-title">
            <p style="text-indent: 2rem;">{{ newsList.length>0 && newsList[0].title || '' }}</p>
          </el-row>
        </el-col>
      </router-link>
      <el-col class="others-news" :md="8">
        <template v-for="item in newsList">
          <router-link
            :key="item.id"
            :to="{path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}}"
          >
            <el-row>
              <el-row class="others-news-item">
                <span>{{ item.title }}</span>
                <p class="others-news-item-date">{{ getMoment(item.modifyTime, 'YYYY-MM-DD') }}</p>
              </el-row>
              <el-divider />
            </el-row>
          </router-link>
        </template>
        <el-row class="others-news-item">
          <template v-for="item in columnList">
            <template v-if="item.name === '新闻'">
              <router-link
                :key="item.id"
                :to="{path:'/common/commonlist1', query: {columnId: 67, columnName: '招生新闻'}}"
                tag="p"
                style="text-align: right;color: #666666;cursor:pointer;"
              >更多新闻></router-link>
            </template>
          </template>
        </el-row>
      </el-col>
    </el-row>
    <!-- 招生信息  更多入口 -->
    <el-row class="zsxx">
      <el-row>
        <el-col :md="1" style="width: 30px;">
          <div>
            <i class="zsxx-icon1" />
          </div>
        </el-col>
        <el-col :md="2">
          <div style="text-align: left;line-height: 20px;font-size:20px;font-weight:bold;">招生信息</div>
        </el-col>
        <el-col :md="14">
          <div
            style="text-align: right;margin-right: 25px;line-height: 20px;color:rgba(102,102,102,1);"
          >
            <template v-for="item in columnList">
              <template v-if="item.name === '招生信息'">
                <router-link
                  :key="item.id"
                  :to="{path:'/common/commonlist1', query: {columnId: item.id, columnName: item.name}}"
                >更多></router-link>
              </template>
            </template>
          </div>
        </el-col>
        <el-col :md="1" style="width: 30px;">
          <div>
            <i class="zsxx-icon2" />
          </div>
        </el-col>
        <el-col :md="6">
          <a style="text-align: left;line-height: 22px;font-size:20px;font-weight:bold;">更多入口</a>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <template v-for="item in zhaoshengxinxi">
            <router-link
              :key="item.id"
              :to="{path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}}"
            >
              <el-row class="xwzx">
                <el-row class="xwzx-newsList">
                  <el-row class="xwzx-newsList-item">
                    <el-col class="xwzx-newsList-item-dataTime" :xs="8" :md="4">
                      <div class="childDiv childDiv1">
                        <span class="span1">{{ getMoment(item.modifyTime, 'DD') }}</span>
                      </div>
                      <div class="childDiv childDiv2">
                        <span class="span2">{{ getMoment(item.modifyTime, 'YYYY-MM') }}</span>
                      </div>
                    </el-col>
                    <el-col class="sszzgz-newsList-item-content" :xs="16" :md="20">
                      <h3>{{ item.title }}</h3>
                      <p>{{ item.subTitle }}</p>
                    </el-col>
                  </el-row>
                </el-row>
              </el-row>
            </router-link>
          </template>
        </el-col>
        <el-col :span="8">
          <template v-for="item in gengduorukou">
            <router-link
              :key="item.id"
              :to="{path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}}"
            >
              <el-row style="padding-right: 0;">
                <img :src="item.image" />
              </el-row>
            </router-link>
          </template>
          <el-col :span="24">
            <a href="https://account.chsi.com.cn/passport/login?service=https://gagx.ncss.org.cn/student/connect/chsi&entrytype=stu">
              <img src="@/assets/home/zhaos.png" alt />
            </a>
          </el-col>
          <el-col :span="24">
            <a href="https://cy.ncss.org.cn/cyzs/index.shtml"><img src="@/assets/home/cy.png" alt></a>
          </el-col>
          <el-col :span="24">
            <a href="http://byqx.gxbys.com/student/default.aspx"><img src="@/assets/home/chaxun.png" alt></a>
          </el-col>
        </el-col>
      </el-row>
    </el-row>

    <!-- 图片 -->
    <el-row>
      <img src="../../assets/secondaryHome/hengt.png" />
    </el-row>
    <!-- 就业政策   就业辅导 -->
    <el-row class="jy">
      <el-col class="jy-left" :xs="6" :md="12">
        <el-row
          style="height: 40px; border-bottom: 2px solid rgba(210,210,210,1);line-height: 40px;"
        >
          <div
            style="height: 40px; border-bottom: 2px solid rgba(210,210,210,1);line-height: 40px;position: relative;"
          >
            <div
              style="display: inline-block;width: 119px;height: 40px;border-bottom: 2px solid rgba(19,107,185,1);line-height: 40px;"
            >
              <span style="position: absolute;top: 3px;">
                <i style="display: inline-block;height: 22px;" class="jy-left-icon1" />
              </span>
              <span class="jys" style="height: 40px;line-height: 40px;margin-left: 30px;">就业政策</span>
            </div>
            <a style="position: absolute;right: 22px;">
              <template v-for="item in columnList">
                <template v-if="item.name === '就业政策'">
                  <router-link
                    :key="item.id"
                    :to="{path:'/common/commonlist1', query: {columnId: item.id, columnName: item.name}}"
                  >更多></router-link>
                </template>
              </template>
            </a>
          </div>

          <!--  要改成响应式的 -->
          <!-- <el-col :xs="8" :md="8" style="display: inline-block;height: 40px;border-bottom: 2px solid rgba(19,107,185,1);line-height: 40px;">
            <el-col :xs="2" :md="4">
              <div><i style="display: inline-block;height: 22px;" class="jy-left-icon1" /></div>
            </el-col>
            <el-col :xs="22" :md="20">
              <div class="jys" style="height: 40px;line-height: 40px;margin-left:10px;">就业政策</div>
            </el-col>
          </el-col>
          <el-col :xs="16" :md="16">
            <div style="display: inline-block;">更多></div>
          </el-col>-->
        </el-row>

        <el-row class="wrapper">
          <div class="list">
            <el-row v-for="item in jiuyezhengce" :key="item.id" class="list-item">
              <router-link
                :to="{path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}}"
              >
                <el-col style="width: 18px;height: 18px;margin-right: 4px;" :span="1">
                  <i class="list-item-point">
                    <img src="../../assets/secondaryHome/t.png" />
                  </i>
                </el-col>
                <el-col :span="18">
                  <p>{{ item.title }}</p>
                </el-col>
                <el-col :span="4" :offset="1">
                  <p>{{ getMoment(item.modifyTime, 'YYYY-MM-DD') }}</p>
                </el-col>
              </router-link>
            </el-row>
          </div>
        </el-row>
      </el-col>
      <el-col class="jy-right" :xs="6" :md="12">
        <el-row>
          <div
            style="height: 40px; border-bottom: 2px solid rgba(210,210,210,1);line-height: 40px;position: relative;"
          >
            <div
              style="display: inline-block;width: 119px;height: 40px;border-bottom: 2px solid rgba(19,107,185,1);line-height: 40px;"
            >
              <span style="position: absolute;top: 3px;">
                <i style="display: inline-block;height: 22px;" class="jy-right-icon2" />
              </span>
              <span class="jys" style="height: 40px;line-height: 40px;margin-left: 30px;">就业辅导</span>
            </div>
            <a style="position: absolute;right: 0px;">
              <template v-for="item in columnList">
                <template v-if="item.name === '就业辅导'">
                  <router-link
                    :key="item.id"
                    :to="{path:'/common/commonlist1', query: {columnId: item.id, columnName: item.name}}"
                  >更多></router-link>
                </template>
              </template>
            </a>
          </div>
        </el-row>
        <el-row class="wrapper">
          <div class="list">
            <el-row v-for="item in jiuyefudao" :key="item.id" class="list-item">
              <router-link
                :to="{path:'/common/details1', query: {itemid: item.id, siteId: item.siteId}}"
              >
                <el-col style="width: 18px;height: 18px;margin-right: 4px;" :span="1">
                  <i class="list-item-point">
                    <img src="../../assets/secondaryHome/t.png" />
                  </i>
                </el-col>
                <el-col :span="18">
                  <p>{{ item.title }}</p>
                </el-col>
                <el-col :span="4" :offset="1" style="text-align: right;">
                  <p>{{ getMoment(item.modifyTime, 'YYYY-MM-DD') }}</p>
                </el-col>
              </router-link>
            </el-row>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getList } from "@/api/request.js";
import moment from "moment";
moment.locale("zh-cn");
export default {
  data() {
    return {
      banner: {},
      columnList: [],
      newsList: [],
      zhaoshengxinxi: [],
      gengduorukou: [],
      jiuyezhengce: [],
      jiuyefudao: []
    };
  },
  created() {
    this.getColumnList(40);
  },
  methods: {
    getColumnList(id) {
      const data = {
        id
      };
      getList("column", data, "/selectChild").then(response => {
        this.columnList = response.data.data;
        if (this.columnList.length > 0) {
          for (var i = 0; i < this.columnList.length; i++) {
            switch (this.columnList[i].name) {
              case "新闻":
                this.getNewsList(this.columnList[i].id, 5).then(results => {
                  this.newsList = results;
                });
                break;
              case "招生信息":
                this.getNewsList(this.columnList[i].id, 3).then(results => {
                  this.zhaoshengxinxi = results;
                });
                break;
              case "更多入口":
                this.getNewsList(this.columnList[i].id, 3).then(results => {
                  this.gengduorukou = results;
                });
                break;
              case "就业政策":
                this.getNewsList(this.columnList[i].id).then(results => {
                  this.jiuyezhengce = results;
                });
                break;
              case "就业辅导":
                this.getNewsList(this.columnList[i].id).then(results => {
                  this.jiuyefudao = results;
                });
                break;
            }
          }
        }
      });
    },
    getNewsList(id, pageSize = 10) {
      const data = {
        columnId: id,
        pageNum: 1,
        pageSize
      };
      return new Promise((resolve, reject) => {
        getList("news", data)
          .then(response => {
            resolve(response.data.data.data);
          })
          .catch(e => {
            reject(e);
          });
      });
    },
    getMoment(date, str) {
      return moment(date).format(str);
    }
  }
};
</script>

<style lang="scss" scoped>
%box-list {
  padding: 0.5rem 0;
  height: 100%;
}
%icon {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  background-size: 100% 100%;
  // margin: 1.15rem auto;
}
img {
  width: 100%;
  height: 100%;
}
.home-container {
  padding: 1.5% 18.5%;
  .news-list {
    .first-news {
      padding-right: 15px;
      background: rgba(255, 255, 255, 1);
      &-title {
        background: rgba(249, 249, 249, 1);
        line-height: 1.4rem;
      }
      p {
        font-size: 18px;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
    }
    .others-news {
      padding-top: 22px !important;
      background: rgba(249, 249, 249, 1);
      padding: 0rem 1.25rem;

      &-item {
        a {
          color: rgba(51, 51, 51, 1);
          font-weight: 400;
        }
        &-date {
          color: rgba(153, 153, 153, 1);
          margin-bottom: 0px;
        }
      }
    }
  }

  // 招生信息   更多入口
  .zsxx {
    margin: 1.5% 0;
    &-icon1 {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/zhaos.png);
    }
    &-icon2 {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/gengd.png);
    }
  }
}

.xwzx {
  &-newsList {
    &-item {
      &-dataTime {
        // width:120px;
        // height:100px;
        width: 8rem;
        height: 7rem;
        margin-top: 0.8rem;
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
        p {
        }
        span {
          color: #666666;
        }
      }
    }
  }
}
.sszzgz-newsList-item-content {
  padding-left: 10px;
}
.jy {
  margin-top: 20px;
  &-left {
    &-icon1 {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/jiuye.png);
    }
    .jys {
      font-size: 20px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .wrapper {
      @extend %box-list;
      .list {
        margin-top: 1rem;
        &-item {
          margin: 2rem 0rem;

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
  &-right {
    padding-left: 15px;
    &-icon2 {
      @extend %icon;
      background-image: url(../../assets/secondaryHome/jiuyefd.png);
    }
    .jys {
      font-size: 20px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .wrapper {
      @extend %box-list;
      .list {
        margin-top: 1rem;
        &-item {
          margin: 2rem 0rem;

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
}
</style>
