<template>
  <div>
    <el-row
      type="flex"
      class="row-bg NavMenu-wrapper"
      :class="{'NavMenu-wrapper-getcolor':!$route.meta.navBG}"
      :style="{'backgroundSize': '100% 100%', 'backgroundImage': 'url('+$route.meta.navBG+')'}"
      justify="space-around"
    >
    <el-col :span="4"></el-col>
      <el-col :span="10">
        <el-row>
          <el-menu
            :default-active="`${$route.path}?columnId=${$route.query.columnId}&columnName=${$route.query.columnName}${$route.query.childId?'&childId='+$route.query.childId:''}`"
            class="el-menu-nav"
            mode="horizontal"
            :router="true"
            text-color="#fff"
            background-color="#cce1fa"
          >
            <!-- <el-col v-for="item in menu" :key="item.id"> -->
              <el-menu-item v-for="item in menu" :key="item.id" :index="`${item.url}`">{{item.name}}</el-menu-item>
              <!-- <el-menu-item :index="`${item.url}`">{{item.name}}111</el-menu-item> -->
            <!-- </el-col> -->
          </el-menu>
        </el-row>
      </el-col>
       <el-col :span="4" style="line-height: 3.8rem;">
          <el-input
            v-model="seach"
            class="seach-input"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
          />
        </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getList } from "@/api/request.js";

export default {
  data() {
    return {
      seach: "",
      bumendongtai: [],
      tongzhigonggao: [],
      guizhangzhidu: [],
      gongzuozhize: [],
      bumenfengcai: []
    };
  },
  computed: {
    ...mapGetters(["menu"])
  },
  watch: {
    $route(to, from) {
      this.$router.go(0);
    }
  },
  created() {
    console.log(this.menu, "dh");

    if (this.menu.length > 0) {
      for (var i = 0; i < this.menu.length; i++) {
        if (this.menu[i].name === "首页") {
          this.getColumnList(this.menu[i].id);
          console.log(this.menu[i].id, "111");
        }
      }
    }
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
              case "部门动态":
                this.getNewsList(this.columnList[i].id, 5).then(results => {
                  this.bumendongtai = results;
                  console.log(results, "5858");
                });
                break;
              case "通知公告":
                this.getNewsList(this.columnList[i].id).then(results => {
                  this.tongzhigonggao = results;
                });
                break;
              case "规章制度":
                this.getNewsList(this.columnList[i].id).then(results => {
                  this.guizhangzhidu = results;
                  console.log(results[0].columnId, "规章制度");
                });
                break;
              case "工作职责":
                this.getNewsList(this.columnList[i].id).then(results => {
                  this.gongzuozhize = results;
                  // console.log(results,'44444')
                  this.gzzeID = results;
                  console.log(this.gongzuozhize[0].columnId, "工作职责");
                });
                break;
              case "部门风采":
                this.getNewsList(this.columnList[i].id).then(results => {
                  this.bumenfengcai = results;
                  console.log(results, "部门风采");
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
            const results = response.data.data.data;
            for (var i = 0; i < results.length; i++) {
              results[i].columnId = id;
            }
            resolve(results);
          })
          .catch(e => {
            reject(e);
          });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$NavMenuHoverColor: #cce1fa73;
$NavMenuItemWidth: 7.25rem;

.NavMenu-wrapper {
  &-getcolor {
    background-color: #07519a;
  }

  /deep/.seach-input {
    input {
      border-radius: 25px;
      height: 30px;
      line-height: 30px;
    }
  }

  .el-menu-nav {
    background-color: #ffffff00 !important;
    border-bottom: 0px;

    .el-menu-item {
      text-align: center;
      min-width: $NavMenuItemWidth;
      background-color: #ffffff00 !important;

      &:hover {
        background-color: $NavMenuHoverColor !important;
      }
    }

    .is-active {
      height: 3.75rem;
      border-bottom: 0px;
      border-top: 4px solid #eea200;
      line-height: 3.125rem;
      background-color: #cce1fa !important;
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

        &:hover {
          background-color: #07519a;
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
.el-menu--horizontal .el-menu .el-menu-item.is-active,
.el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {
  background-color: #cce1fa73 !important;
  color: #184499;
}

.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  color: #000 !important;
}
</style>
