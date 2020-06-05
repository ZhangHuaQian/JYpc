<template>
  <el-row
    type="flex"
    class="row-bg NavMenu-wrapper"
    :class="{'NavMenu-wrapper-getcolor':!$route.meta.navBG}"
    :style="{'backgroundSize': '100% 100%', 'backgroundImage': 'url('+$route.meta.navBG+')'}"
    justify="space-around"
  >

    <el-col :span="15">
      <el-row>
        <el-col :span="24">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-nav"
            mode="horizontal"
            :router="true"
            text-color="#fff"
            background-color="#cce1fa"
            @select="handleSelect"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">主题官网</el-menu-item>
            <el-menu-item index="3">习总讲话</el-menu-item>
            <el-menu-item index="4">通知公告</el-menu-item>
            <el-menu-item index="5">工作进展</el-menu-item>
            <el-menu-item index="6">基层动态</el-menu-item>
            <el-menu-item index="7">学习资料</el-menu-item>
            <el-menu-item index="8">上级精神</el-menu-item>
            <el-menu-item index="9">榜样力量</el-menu-item>
            <el-menu-item index="10">学校首页</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-col>

  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      seach: ''
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
$NavMenuHoverColor: #cce1fa73;
$NavMenuItemWidth: 7.25rem;
.NavMenu-wrapper {
  &-getcolor {
    background-color: #B62B2D;
  }

  /deep/.seach-input {
    input {
      border-radius: 25px;height: 30px;line-height: 30px;
    }
  }

  .el-menu-nav {
    background-color: #ffffff00 !important;
    border-bottom: 0px;
    .el-menu-item{
      text-align: center;
      min-width: $NavMenuItemWidth;
      background-color: #ffffff00 !important;
      &:hover{
        background-color: $NavMenuHoverColor !important;
      }
    }
    .is-active {
      height: 3.75rem;
      border-bottom: 0px;
      border-top: 4px solid #EEA200;
      line-height: 3.125rem;
      background-color: #CCE1FA !important;
      color: #184499 !important;
      /deep/ .el-submenu__title {
        color: #184499 !important;
      }
    }
    /deep/.el-submenu {
      text-align: center;
      min-width: $NavMenuItemWidth;
      &:hover {
        background-color: $NavMenuHoverColor !important;
      }
      &__title {
        background-color: #ffffff00 !important;
        &:hover{
          background-color: #07519A;
        }
      }
    }
  }
  /deep/ .el-submenu.is-active {
    color: #184499 !important;
    border-bottom: 0px;
    .el-submenu__title {
      border-bottom: 0px;
      color: #184499 !important;
      height: 55px;
      line-height: 55px;
    }
  }
}
</style>
<style>
  .el-menu--horizontal .el-menu .el-menu-item.is-active, .el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title {
    background-color: #cce1fa73!important;
    color: #184499;
  }
  .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
    color: #000 !important;
  }
</style>
