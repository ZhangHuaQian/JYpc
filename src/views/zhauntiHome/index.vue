<template>
  <div class="home-container">
    <!-- 上级精神 -->
    <el-row :gutter="20">
      <el-col :xs="24" :md="11" style="font-size: 0;">
        <img src="../../assets/zhuanti/ztit.png">
      </el-col>
      <el-col :xs="24" :md="13">
        <el-row style="border-bottom: 1px solid #BF3535;line-height: 2rem;position: relative;">
          <el-col :md="12"><span style="font-size:24px;font-weight:bold;color:rgba(172,0,0,1);">上级精神</span></el-col>
          <el-col :md="12" style="text-align: right;color:rgba(153,153,153,1);">更多></el-col>
          <el-col><div style="width: 15%;height:2px;background:#AD0101;position: absolute;bottom: 0px;z-index: 1;" /></el-col>
        </el-row>

        <el-row class="content">
          <el-row class="content-right">
            <h4>习近平在“不忘初心、牢记使命”主题教育工作会议上的讲话</h4>
            <p>
              2019年5月31日，“不忘初心、牢记使命”主题教育工作会议在北京召开。中共中央总书记、国家主席、中央军委主席习近平出席会议并发表重要讲话，详情
            </p>
          </el-row>
          <el-row v-for="item in 5" :key="item">
            <el-col :xs="2" :md="1" style="margin-top: 0.3rem;">
              <div class="yuandian" />
            </el-col>
            <el-col :xs="16" :md="18" style="height: 33px;position: relative;">
              <span class="content-title">全区“不忘初心、牢记使命”主题教育第一批总结暨第二批全区“不忘初心、牢记使命批总结暨第二批</span>
            </el-col>
            <el-col :xs="6" :md="5" style="text-align: right;">
              <span>2020-04-17</span>
            </el-col>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
    <!-- 工作进展   主题官网 -->
    <el-row class="jinzhan">
      <!-- 工作进展 -->
      <el-col :md="15" class="jinzhan-title">
        <el-row style="border-bottom: 1px solid #BF3535;line-height: 2rem;position: relative;">
          <el-col :md="12"><span style="font-size:24px;font-weight:bold;color:rgba(172,0,0,1);">工作进展</span></el-col>
          <el-col :md="12" style="text-align: right;color:rgba(153,153,153,1);">更多></el-col>
          <el-col><div style="width: 12%;height:2px;background:#AD0101;position: absolute;bottom: 0px;z-index: 1;" /></el-col>
        </el-row>
        <el-row class="jinzhan-title-content">
          <el-row v-for="item in 2" :key="item">
            <el-col :md="12" style="margin-bottom:2.6rem">
              <el-col :md="10">
                <img src="../../assets/zhuanti/ztit1.png">
              </el-col>
              <el-col :md="14" class="jinzhan-title-content-1">
                <div>学校召开“不忘初心、牢记使命”主题教育总结大会</div>
                <p>月13日上午，学校在自治区公安厅礼堂召开“不忘初心、牢记使命”主题教育总结大会。全体校领导出席会议，自治区党委“不</p>
              </el-col>
            </el-col>
            <el-col :md="12">
              <el-col :md="10">
                <img src="../../assets/zhuanti/ztit1.png">
              </el-col>
              <el-col :md="14" class="jinzhan-title-content-1">
                <div>学校召开“不忘初心、牢记使命”主题教育总结大会</div>
                <p>月13日上午，学校在自治区公安厅礼堂召开“不忘初心、牢记使命”主题教育总结大会。全体校领导出席会议，自治区党委“不</p>
              </el-col>
            </el-col>
          </el-row>

        </el-row>
      </el-col>
      <!-- 主题官网 -->
      <el-col :md="9" class="jinzhan-guanwang">
        <el-row style="border:1px solid #ccc;width:90%;height:90%;margin-left:2.4rem">
          <el-row class="jinzhan-guanwang-title" style="padding:0 2rem;">
            <el-col :md="12">
              <h4>主题官网</h4>
            </el-col>
            <el-col :md="12" style="text-align: right;line-height: 3rem;">
              <span class="more">更多></span>
            </el-col>
          </el-row>
          <el-row style="text-align: center;padding-top:1.2rem;">
            <img src="../../assets/zhuanti/bwcx.png" alt="" style="width:85%;height:85%;">
          </el-row>
          <el-row style="padding:0.8rem 2.6rem">
            <span>不忘初心使命主题官网</span>
          </el-row>
        </el-row>
      </el-col>
    </el-row>

    <!-- 基层动态  通知公告 -->
    <el-row class="dongtai">
      <!-- 基层动态 -->
      <el-col :md="15" class="dongtai-title">
        <el-row style="border-bottom: 1px solid #BF3535;line-height: 2rem;position: relative;">
          <el-col :md="12"><span style="font-size:24px;font-weight:bold;color:rgba(172,0,0,1);">基层动态</span></el-col>
          <el-col :md="12" style="text-align: right;color:rgba(153,153,153,1);">更多></el-col>
          <el-col><div style="width: 15%;height:2px;background:#AD0101;position: absolute;bottom: 0px;z-index: 1;" /></el-col>
        </el-row>

        <el-row v-for="item in 3" :key="item" class="dongtai-title-item" :gutter="20">
          <el-row :gutter="20">
            <el-col class="dongtai-title-item-image" :xs="4" :md="8">
              <img src="../../assets/zhuanti/ztit5.png">
            </el-col>
            <el-col class="dongtai-title-item-content" :xs="20" :md="16">
              <h4>学校开展看望慰问离退休老同志活动</h4>
              <p>2020年新春来临之际，学校开展新春走访慰问活动，校领导覃干超、张军等在有关部门负责人的陪同下走访慰问了离退休老同志
                张军等在有关部门负责人的陪同下走访慰问了离退休老同志</p>
              <span>2020-01-17 12:02:40 </span>
            </el-col>
          </el-row>
          <el-divider />
        </el-row>
      </el-col>
      <!-- 通知公告 -->
      <el-col :md="9" class="gonggao">
        <el-row style="width:90%;height:90%;margin-left:2.4rem;background:rgba(250,250,250,1);">
          <el-row class="gonggao-title" style="padding:0 2rem;">
            <el-col :xs="12" :md="12">
              <h4>通知公告</h4>
            </el-col>
            <el-col :xs="12" :md="12" style="text-align: right;line-height: 3rem;">
              <span class="more">更多></span>
            </el-col>
          </el-row>
          <el-row v-for="item in 5" :key="item" class="gonggao-content" style="padding:0 1rem 1rem 1rem;">
            <p>关于召开学校“不忘初心、牢记使命” 主题教育工作培训会的通知</p>
            <span>20200417</span>
            <el-divider />
          </el-row>
        </el-row>
      </el-col>
    </el-row>
    <!-- 榜样力量 -->
    <el-row class="bangy">
      <el-row class="bangliliang" style="position: relative;">
        <span>榜样力量</span>
        <img src="../../assets/zhuanti/bangy.png" alt="">
      </el-row>
      <el-row class="gengduo" style="text-align: right;">
        <p class="more">更多></p>
      </el-row>
      <el-row :gutter="20">
        <el-col v-for="item in 4" :key="item" :xs="24" :md="6">
          <el-row>
            <img src="../../assets/zhuanti/01.png" alt="">
          </el-row>
          <el-row style="text-align: center;"><p>123456</p></el-row>
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
    height: 100%;
	}
	.home-container{
		padding: 1.5% 18.5%;
		.content{
			&-right{
				border-bottom: 1px dashed #ccc;
				margin-bottom: 0.6rem;
				h4{
					font-size: 18px;
				}
				p{
					text-indent: 2rem;
					line-height: 24px;
				}
			}
			.yuandian{
				width:6px;
				height:6px;
				border:1px solid rgba(191,53,53,1);
				border-radius:50%;
			}
			&-title{
				position: absolute;
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space:nowrap;
			}
		}
		// 工作进展
		.jinzhan{
			margin: 1rem 0;
			&-title{
				&-content{
					margin-top: 2rem;
					&-1{
						div{
							font-weight:400;
							color:rgba(51,51,51,1);
							padding: 0 10px 0 18px;
						}
						p{
							font-size:14px;
							color:rgba(153,153,153,1);
							height: 3rem;
							overflow: hidden;
							padding: 0 20px 0 18px;
						}

					}

				}
			}
			&-guanwang{
				&-title{
					background:rgba(250,250,250,1);
					border-bottom:1px solid #ccc;
					height:3.2rem;
					line-height: 0.1rem;
					h4{
						font-size:20px;
						font-weight:bold;
						color:rgba(172,0,0,1);
					}
					.more{
						color:rgba(153,153,153,1);
					}
				}
			}
		}
		// 动态
		.dongtai{
			&-title{
				&-item{
					.el-divider--horizontal{
						margin-top: 36px;
						margin-bottom: 0px;
					}
					// .el-divider--horizontal{
					// 	&:last-of-type{
					// 		height: 0;
					// 	}
					// }

					margin: 2rem 0;
					&-image{
						font-size: 0;
					}
					&-content{
						padding-left: 0.6rem;
						h4{
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space:nowrap;
						}
						p{
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}
						span{
							font-size:14px;
							color:rgba(153,153,153,1);
						}
					}
				}

			}
			.gonggao{
				//
				margin: 1rem 0;
				&-title{
					background:rgba(250,250,250,1);
					border-bottom:1px solid #ccc;
					height:3.2rem;
					line-height: 0.1rem;
					h4{
						font-size:20px;
						font-weight:bold;
						color:rgba(172,0,0,1);
					}
					.more{
						color:rgba(153,153,153,1);
					}
				}
				&-content{
					margin-top: 0.6rem;
					span{
						color:rgba(153,153,153,1);
					}
					.el-divider--horizontal{
						margin-top: 24px;
						margin-bottom: 0px;
					}
				}
			}
		}
		.bangy{
			.bangliliang{
				font-size:24px;
				font-weight:bold;
				color:rgba(172,0,0,1);
				span{
					position: absolute;
					left:50%;
					margin-left:-48px;
					}
				}
			}
			.gengduo{
				color:rgba(153,153,153,1);
			}

	}

</style>
