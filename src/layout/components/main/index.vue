<template>
  <div>
    <el-row>
           <NavMenuZhuanti v-if="$route.path.indexOf('/collegeHome')>-1" />
           <NavMenuZhuanti v-if="$route.path.indexOf('/departmentHome')>-1" />
      <NavMenu class="NavMenu" v-if="$route.path.indexOf('/home')>-1"  />
      <NavMenu class="NavMenu" v-if="$route.path.indexOf('/organizationSetup/index')>-1"  />
      <NavMenu class="NavMenu" v-if="$route.path.indexOf('/common/details2')>-1"  />
      <NavMenu class="NavMenu" v-if="$route.path.indexOf('/common/commonlist2')>-1"  />
      <NavMenu class="NavMenu" v-if="$route.path.indexOf('/employment/index')>-1"  />
      <NavMenu class="NavMenu" v-if="$route.path.indexOf('/secondaryHome/index')>-1"  />
      <NavMenu class="NavMenu" v-if="$route.path.indexOf('/employment/index')>-1"  />
      <NavMenu class="NavMenu" v-if="$route.path.indexOf('/employment/index')>-1"  />
      <NavMenu class="NavMenu" v-if="$route.path.indexOf('/employment/index')>-1"  />

      <!--      <NavMenu v-if="$route.path.indexOf('/secondaryHome')>-1" class="NavMenu" />
      <NavMenu v-if="$route.path.indexOf('/departmentHome')>-1" class="NavMenu" />
      <NavMenu v-if="$route.path.indexOf('/organizationSetup')>-1" class="NavMenu" />
      <NavMenu v-if="$route.path.indexOf('/common')>-1" class="NavMenu" />
      <NavMenu v-if="$route.path.indexOf('/rAcademy')>-1" class="NavMenu" /> -->
    </el-row>
    <router-view />
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'
import NavMenuZhuanti from './components/NavMenuZhuanti'
export default {
  components: {
    NavMenu,
    NavMenuZhuanti
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.NavMenu{
	margin-top: -60px;
}
</style>
