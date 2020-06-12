<template>
  <div class="home-container">
    <!--    <el-row>
      <div style="color:rgba(102,102,102,1);margin-bottom: 20px;">当前位置：5343434</div>
    </el-row> -->
    <el-row class="news-list">
      <el-col class="first-news" :md="16" style="padding: 0px 20px;">
        <el-row class="first-news-title">
          <p style="font-size:30px;font-weight:bold;line-height:36px;color:rgba(51,51,51,1);">
            {{ form.title }}
          </p>
          <p style="font-weight:400;color:rgba(153,153,153,1);line-height:36px;">发布日期：{{ getMoment(form.modifyTime, 'YYYY-MM-DD') }}</p>
        </el-row>
        <el-row>
          <div v-html="form.content" />
        </el-row>
        <el-divider />
        <el-row style="padding-bottom: 12px;color:rgba(80,80,80,1);font-size:16px;">
          <!-- ,query:{itemid:item.id,siteId:item.siteId,columnId:item.columnId} -->
          <router-link  :to="{path:'/common/details1',query:{itemid:prefix.id,siteId:prefix.siteId,columnId:prefix.columnId}}" style="line-height:30px;" v-if="prefix.title"><a> 上一篇：{{prefix.title}}</a> </router-link >
          <br>
          <router-link :to="{path:'/common/details1',query:{itemid:suffix.id,siteId:suffix.siteId,columnId:suffix.columnId}}" style="line-height:30px;" v-if="suffix.title"><a>下一篇：{{suffix.title}}</a> </router-link >
        </el-row>
      </el-col>
      <el-col class="others-news" :md="8">
        <el-row style="background:rgba(255,255,255,1);padding:10px;">
          <el-row class="others-news-item">
            <div style="position: relative;">
              <span style="width:4px;height: 18px;background:rgba(1,111,188,1);border-radius:2px;display:inline-block;position: absolute;top: 9px;" />
              <span style="font-size:18px;color:rgba(51,51,51,1);line-height:36px;font-weight:bold;margin-left: 10px;">相关资讯</span>
			  <div v-for="item in xiangList" :key="item.id" style="margin-bottom: 1rem;" @click="toDetail(item.id,item.siteId)">
				  <div style="border: 1px solid #c1c1c1;height: 200px;">
					  <img style="width: 100%;" :src="item.image">  
				  </div>
            
              <div style="color:rgba(51,51,51,1);font-weight:bold;line-height:36px;">{{item.title}}</div>
              <span style="color:rgba(80,80,80,1);font-weight:400;
			   text-overflow: -o-ellipsis-lastline;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-line-clamp: 3;
			    line-clamp: 3;
			    -webkit-box-orient: vertical;
			  ">{{item.subTitle}}</span>
			  </div>

			  
            </div>
          </el-row>
          <el-divider />
<!--          <el-row class="others-news-item">
            <div style="position: relative;">
              <span style="width:4px;height: 18px;background:rgba(1,111,188,1);border-radius:2px;display:inline-block;position: absolute;top: 9px;" />
              <span style="font-size:18px;color:rgba(51,51,51,1);line-height:36px;font-weight:bold;margin-left: 10px;">相关资讯</span>
              <img style="width: 80%;" src="@/assets/secondaryHome/bd.png">
              <div style="color:rgba(51,51,51,1);font-weight:bold;line-height:36px;">校新型冠状病毒感染的肺炎疫情防</div>
              <span style="color:rgba(80,80,80,1);font-weight:400;">根据学校新型冠状病毒感染的肺炎疫情防控工作领导小组的统一部署，2月24日上午</span>
            </div>
          </el-row> -->
        </el-row>
        <el-row style="margin-top: 12px;">
          <div style="background:rgba(255,255,255,1);padding-bottom: 2px;">
            <div style="position: relative;padding: 0 0 0 10px;">
              <span style="width:4px;height: 18px;background:rgba(1,111,188,1);border-radius:2px;display:inline-block;position: absolute;top: 9px;" />
              <span style="font-size:18px;color:rgba(51,51,51,1);line-height:36px;font-weight:bold;margin-left: 10px;">阅读推荐</span>
            </div>
            <ul style="padding-right:20px">
              <li v-for="(item,index) in list" :key="index" @click="toDetail(item.id,item.siteId)">
                <p style="color:rgba(80,80,80,1);">{{item.title}}</p>
                <span style="color:rgba(153,153,153,1);">{{item.modifyTime}}</span>
              </li>
              <el-divider />
            </ul>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { select } from '@/api/request.js'
import {serverip as ip} from '@/utils/serverIP'
import moment from 'moment'
moment.locale('zh-cn')
export default {
  data() {
    return {
      form: {},
	  list:[],
	  listSec:'',
    xiangList:[],
    lanID:'',
    prefix:'',
    suffix:'',
    }
  },
  created() {
    if (this.$route.query.itemid && this.$route.query.siteId) {
      this.handleSelect(this.$route.query.itemid, this.$route.query.siteId)
    }
  },
  mounted(){
	  this.getHotNews()
    this.getXiangNews(),
    this.getPrefixSuffix()
  },
  methods: {
	  //相关资讯跳转
	  toDetail(id,siteId){
		  this.$router.push({
		            path:'/common/details1',
		            query: {
		            itemid: id,
		  			siteId:siteId
		            }
		          }).then(()=>{
					 location. reload()
				  })
				  
	  },
	  //阅读推荐
	  getHotNews(){
		  this.axios.post(ip+'/news/selectHotNews',
		    {siteId:this.$route.query.siteId}
		  ).then((res)=>{
		   this.list=res.data.data
		  console.log('阅读推荐：',res)
		  })
	  },
	  //相关资讯
	  // getXiangNews(){
	  // 		//   this.axios.post(ip+'/news/select',
	  // 		//     {id:73,siteId:this.$route.query.siteId}
	  // 		//   ).then((res)=>{
	  // 		//    this.listSec=res.data.data
		// 	  //  this.getXianGuanNews()
	  // 		//   console.log('这是什么78',this.listSec)
    //     //   })
    //     this.axios.post(ip+'/unauth/news/selectRelatedNews',{
    //       id:this.form.id,siteId:this.$route.query.siteId,columnId: this.$route.query.columnId
    //     }).then((res)=>{
    //       this.listSec=res.data.data
		// 	   this.getXianGuanNews()
	  // 		  console.log('相关资讯55',res)
    //     })
	  // },
	  //相关资讯2
	  // getXianGuanNews(){
		//   // this.xiangList = this.listSec.relateList
		//   console.log('相关资讯：',this.xiangList)
	  // },
    handleSelect(id, siteId) {
      const data = {
        id,
        siteId
      }
      select('news', data).then(response => {
        this.form = response.data.data
        console.log(this.form,'form')
      })
    },

    //相关资讯
	  getXiangNews(){
	  		//   this.axios.post(ip+'/news/select',
	  		//     {id:73,siteId:this.$route.query.siteId}
	  		//   ).then((res)=>{
	  		//    this.listSec=res.data.data
			  //  this.getXianGuanNews()
	  		//   console.log('这是什么78',this.listSec)
        //   })
        // 获取资讯ID

        
        
        
      // this.handleSelect(id, siteId)
      console.log(this.form,'lanmuID')
        this.axios.post(ip+'news/selectRelatedNews',{
          id:this.$route.query.itemid,siteId:this.$route.query.siteId,columnId:this.$route.query.columnId
        }).then((res)=>{
          this.listSec=res.data.data
           this.xiangList = this.listSec
            console.log('相关资讯：',this.xiangList)
			  //  this.getXianGuanNews()
	  		  console.log('相关资讯55',res)
        })
	  },
	  //相关资讯2
	  getXianGuanNews(){
		  this.xiangList = this.listSec.relateList
		 
    },
    getPrefixSuffix(){
      const data={
        id:this.$route.query.itemid,siteId:this.$route.query.siteId,columnId:this.$route.query.columnId
      }
      this.axios.post(ip+'news/selectPrefixSuffix',{...data}).then((res)=>{
        console.log(res,'xiayitiao')
        this.prefix=res.data.data.prefix
        this.suffix=res.data.data.suffix
        console.log(this.prefix,'prefix',this.suffix)
      })

    },
    getMoment(date, str) {
      return moment(date).format(str)
    }
  }
}
</script>

<style lang="scss" scoped>
	img{
		width: 100%;
		height: 100%;
	}
	%icon {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		background-size: 100% 100%;
		margin: 1.15rem auto;
	}

	.home-container {
		padding: 1.5% 18.5%;
		background:rgba(249,249,249,1);

  .news-list {
    .first-news {
      background:rgba(255,255,255,1);
      &-title {
        line-height: 3.3rem;
      }
    }

    .others-news {
      // background:rgba(255,255,255,1);
      padding: 0rem 1.25rem;
    }
  }
}
</style>
