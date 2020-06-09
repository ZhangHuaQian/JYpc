<template>
  <el-row :gutter="40">
    <el-row class="common-right-weizhi">
      <!--      <p>当前位置：</p> -->
    </el-row>
    <el-row class="common-right-info">
      <el-row class="title">
        <h4>{{ form && form.title || '' }}</h4>
        <p>发布日期：{{ form && form.modifyTime || '' }}</p>
      </el-row>
      <el-divider />
      <el-row style="padding: 0px 15px;">
        <div v-html="form && form.content || ''" />
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import { select } from '@/api/request.js'
import moment from 'moment'
moment.locale('zh-cn')
export default {
  data() {
    return {
      form: {}
    }
  },
  watch: {
    '$route.query': {
      handler: function(val) {
        if (val && val.childId) {
          this.handleInfoPageSelect(val.childId)
        }
        if (val && val.newId && val.siteId) {
          this.handleNewsSelect(val.newId, val.siteId)
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleInfoPageSelect(id, siteId) {
      const data = {
        columnId: id
      }
      select('infoPage', data).then(response => {
        const results = response.data
        this.form = results.data
      })
    },
    handleNewsSelect(id, siteId) {
      const data = {
        id,
        siteId
      }
      select('news', data).then(response => {
        const results = response.data
        this.form = results.data
      })
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
  }
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
          left: 54%;
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
        .title{
          text-align: center;
          p{
            font-size:14px;
            color: #999999;
          }

        }
      }

    }
  }
</style>
