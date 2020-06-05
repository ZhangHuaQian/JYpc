<template>
  <div class="home-container">
    <el-row :gutter="20" class="news-list">
      <el-col :md="16" class="news-list-left">
        <el-row style="font-size: 0;">
          <img src="../../assets/secondaryHome/zsjyt1.png">
        </el-row>
        <el-row class="content">
          <p class="content-title">张军检查2019年公安普通高等院校招生工作</p>
          <p class="content-info">
            6月29日上午，公安厅党委副书记、常务副厅长唐斌，厅党委委员、政治部主任宾正迎到我校长湖校区
            检查指导广西2019年公安院校公安专业招相关工作。唐斌、宾正迎详细了解考生报到、引导、面试
          </p>
        </el-row>
      </el-col>
      <el-col :md="8" class="news-list-right">
        <el-row class="img">
          <img src="../../assets/secondaryHome/zsjyt2.png">
        </el-row>
        <el-row class="img">
          <img src="../../assets/secondaryHome/zsjyt3.png">
        </el-row>
        <el-row class="img">
          <img src="../../assets/secondaryHome/zsjyt4.png">
        </el-row>
      </el-col>
    </el-row>

    <!--  招生信息 -->
    <el-row class="zsxx">
      <el-row>
        <el-col :xs="1" :md="1" style="width: 30px;"><div><i class="zsxx-icon1" /></div></el-col>
        <el-col :xs="16" :md="2"><div style="text-align: left;line-height: 20px;font-size:20px;font-weight:bold;">招生信息</div></el-col>
        <el-col :xs="6" :md="21" style="width: 89%;">
          <div style="text-align: right;">
            <i style="display: inline-block; margin-right: 14px;" class="zsxx-icon2" />
            <i style="display: inline-block;" class="zsxx-icon3" />
          </div>
        </el-col>
      </el-row>
      <el-row style="margin:0.6rem 0;">
        <el-col style="padding-left: 0;">
          <el-row class="xwzx">
            <el-row class="xwzx-newsList">
              <el-row class="xwzx-newsList-item">
                <el-col class="xwzx-newsList-item-dataTime" :xs="8" :md="4">
                  <div class="childDiv childDiv1">
                    <span class="span1">26</span>
                  </div>
                  <div class="childDiv childDiv2">
                    <span class="span2">2020-02</span>
                  </div>
                </el-col>
                <el-col class="sszzgz-newsList-item-content" :xs="16" :md="20">
                  <h3>新时代讲习所五】学校组织参加全国高校思想政治理论课教师</h3>
                  <p>4月26日下午，学校组织宣传部、学工处、校团委等部门主要负责人，各党总支书记和副书记，思政课教师和辅导员（学管队长、班主任）等在长湖校区教学楼视频会议室收看了“周末理论大讲堂”第三讲活动直播。</p>
                </el-col>
              </el-row>

            </el-row>
          </el-row>
        </el-col>
      </el-row>
      <el-divider />
      <el-row style="margin:0.6rem 0;">
        <el-col :md="24" style="padding-left: 0;">
          <el-row class="xwzx">
            <el-row class="xwzx-newsList">
              <el-row class="xwzx-newsList-item">
                <el-col class="xwzx-newsList-item-dataTime" :xs="8" :md="4">
                  <div class="childDiv childDiv1">
                    <span class="span1">26</span>
                  </div>
                  <div class="childDiv childDiv2">
                    <span class="span2">2020-02</span>
                  </div>
                </el-col>
                <el-col class="sszzgz-newsList-item-content" :xs="16" :md="20">
                  <h3>新时代讲习所五】学校组织参加全国高校思想政治理论课教师</h3>
                  <p>4月26日下午，学校组织宣传部、学工处、校团委等部门主要负责人，各党总支书记和副书记，思政课教师和辅导员（学管队长、班主任）等在长湖校区教学楼视频会议室收看了“周末理论大讲堂”第三讲活动直播。</p>
                </el-col>
              </el-row>

            </el-row>
          </el-row>
        </el-col>
      </el-row>
      <el-divider />
      <el-row style="margin:0.6rem 0;">
        <el-col :md="24" style="padding-left: 0;">
          <el-row class="xwzx">
            <el-row class="xwzx-newsList">
              <el-row class="xwzx-newsList-item">
                <el-col class="xwzx-newsList-item-dataTime" :xs="8" :md="4">
                  <div class="childDiv childDiv1">
                    <span class="span1">26</span>
                  </div>
                  <div class="childDiv childDiv2">
                    <span class="span2">2020-02</span>
                  </div>
                </el-col>
                <el-col class="sszzgz-newsList-item-content" :xs="16" :md="20">
                  <h3>新时代讲习所五】学校组织参加全国高校思想政治理论课教师</h3>
                  <p>4月26日下午，学校组织宣传部、学工处、校团委等部门主要负责人，各党总支书记和副书记，思政课教师和辅导员（学管队长、班主任）等在长湖校区教学楼视频会议室收看了“周末理论大讲堂”第三讲活动直播。</p>
                </el-col>
              </el-row>

            </el-row>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
  %icon {
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    background-size: 100% 100%;
    // margin: 1.15rem auto;
  }
  .home-container{
    padding: 1.5% 18.5%;
    .news-list{
      &-left{
        padding-right: 0 !important;
        .content{
          background:rgba(249,249,249,1);
          &-title{
            margin-left: 1.5rem;
            font-size:18px;
            font-weight:bold;
          }
          &-info{
            margin-left: 1.5rem;
          }
        }
      }
      &-right{
        .img{
          font-size: 0;
          line-height: 1.07rem;
        }
      }
    }

    // 招生信息
    .zsxx{
      margin: 1.5% 0;
      &-icon1{
        @extend %icon;
        background-image: url(../../assets/secondaryHome/zhaos.png);
      }
      &-icon2{
        @extend %icon;
        background-image: url(../../assets/secondaryHome/z-nor.png);
      }
      &-icon3{
        @extend %icon;
        background-image: url(../../assets/secondaryHome/you_nor.png);
      }
    }

    .xwzx {

      &-newsList {
        &-item {
          &-dataTime {
         width:10%;
         height:100px;
         margin-top: 0.8rem;
         border:1px solid rgba(19,107,185,1);
         padding-left: 0 !important;
         padding-right: 0 !important;
         .childDiv{
           width: 100%;
           height: 50%;
         }
         .childDiv1{
           background:rgba(19,107,185,1);
           position: relative;
           .span1{
             position: absolute;
             left: 50%;
             top: 50%;
             margin-left: -20px;
             margin-top: -12px;
             font-size:36px;
             font-weight:bold;
             color:rgba(255,255,255,1);
             line-height:24px;
           }
         }
         .childDiv2{
           position: relative;
           .span2{
             position: absolute;
             left: 50%;
             top: 50%;
             margin-left: -33px;
             margin-top: -12px;
             font-size:18px;
             font-weight:400;
             color:rgba(102,102,102,1);
             line-height:24px;
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
    .sszzgz-newsList-item-content{
      padding-left: 10px;
      width: 90%;
    }
  }
</style>
