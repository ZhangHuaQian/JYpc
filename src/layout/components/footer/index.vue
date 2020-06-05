<template>
  <div class="footer">
    <el-row class="record-info">
      <el-col :xs="24" :md="12">
        <p>
          <img src="@/assets/home/logo (1).png">
        </p>
        <p class="footer1">
          Copyright@2008-2010 广西警察学院 All Rights Reserved
        </p>
        <p class="footer2">
          <img src="@/assets/home/xx.png" class="xx">
          <span>桂公网安备 45010302000719号    网站标识码：4500000019   备案号：桂ICP备05007026号</span>
        </p>
      </el-col>
      <el-col :xs="24" :md="12" style="text-align: right;">
        <p class="footer3">
          <span style="margin-bottom: 6px;">地址：南宁市开泰路148号 &nbsp;&nbsp;&nbsp; 邮编：530028 &nbsp;&nbsp;&nbsp; 电话：0771-5616000</span>
          <span style="margin-right: 27.7%;">访问总数：1200413 站点地图</span>
        </p>
        <p class="footer4">
          <img src="@/assets/home/bz.png">
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    background-color: #4388CF;
    height: 12.5rem;
    padding: 1% 10.5%;
    color: white;
    border-top: 4px solid #2573B9;
	.footer1{
		font-size: 14px;
	}
	.footer2{
		.xx{
			margin-bottom: -4px;
		}
		span{
			line-height: 30px;
			font-size: 14px;
			padding-left:4px;
		}
	}
	.footer3{
		font-size: 14px;
		span{
			display: inline-block;
		}
	}
	.footer4{
		margin-left: 48%;
		width: 56px;
		height: 68px;
	}
  }
  .record-info {
  }
</style>
