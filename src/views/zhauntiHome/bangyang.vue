<template>
  <div class="home-container">
    <el-row :gutter="40" class="content">
      <el-col :xs="24" :md="6" class="content-left">
        <el-row>
          <el-row class="content-left-bangyang" style="position: relative;">
            <span>榜样力量</span>
            <el-col style="font-size: 0;"><img src="../../assets/common/xx.png" alt=""></el-col>
          </el-row>
          <el-row class="content-left-list">
            <el-row class="content-left-list-li"><p>主题官网</p></el-row>
            <el-row class="content-left-list-li"><p>主题官网</p></el-row>
            <el-row class="content-left-list-li"><p>主题官网</p></el-row>
            <el-row class="content-left-list-li"><p>主题官网</p></el-row>
            <el-row class="content-left-list-li"><p>主题官网</p></el-row>
            <el-row class="content-left-list-li"><p>主题官网</p></el-row>
            <el-row class="content-left-list-li"><p>主题官网</p></el-row>
            <el-row class="content-left-list-li active"><p>主题官网</p></el-row>
          </el-row>
        </el-row>
      </el-col>
      <el-col :xs="24" :md="18" class="content-right">
        <el-row :gutter="40">
          <el-row class="content-right-weizhi">
            <p>当前位置：<span>123</span>>><span>456</span></p>
          </el-row>
          <el-row :gutter="25" style="padding:1.6rem 1.6rem 0 1.6rem" class="content-right-tuppian">
            <el-col v-for="item in 8" :key="item" :span="8" style="padding-bottom:1.6rem">
              <el-row style="font-size: 0;"><img src="../../assets/common/by01.png" alt=""></el-row>
              <el-row class="content-right-tuppian-p"><p>123</p></el-row>
            </el-col>
          </el-row>
          <el-row class="pagination" style="text-align: center;margin-bottom:2rem">
            <el-pagination
              prev-text="上一页"
              next-text="下一页"
              background
              layout="prev, pager, next"
              :total="50"
            />
          </el-row>
        </el-row>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    height: 100%;
	}
	.home-container{
		padding: 1.5% 18.5%;
        background:rgba(249,249,249,1);
        .content{
            &-left{
                &-bangyang{
                    font-size:24px;
                    font-weight:bold;
                    color:rgba(255,255,255,1);
                    span{
                        position: absolute;
                        top: 50%;
                        margin-top: -13px;
                        right: 50%;
                    }
                }
                &-list{
                    border: 1px solid #ccc;

                    &-li{
                        border-top: 1px dashed #ccc;
                        p{
                            padding-left: 2.4rem;
                        }
                    }
                    .active{
                        color:rgba(173,1,1,1);
                        background:rgba(247,232,232,1);
                    }

                }
            }
            &-right{
                .pagination{
                   /deep/ .active{
                        background-color:#B62B2D !important;
                    }
                }
                    background:rgba(255,255,255,1);
                    box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.09);
                &-weizhi{
                    background:rgba(249,249,249,1);
                    box-shadow:0px -3px 0px 0px rgba(182,43,45,1);
                    border-bottom: 1px solid #ccc;
                    p{
                        margin-left: 1.6rem;
                    }

                }
                &-tuppian{
                    &-p{
                        background:rgba(243,246,249,1);
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
