<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {serverIP as ip} from '@/utils/serverIP'
export default {
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  mounted() {
    if (this._isMobile()) {
      
      alert("pc端页面，检测到是手机端，临时跳转到360");
      // this.$router.replace("/home");
      window.location.href="http://www.360.com"
    } else {

      // alert("pc端");
      // console.log(window.location)
      // this.$router.replace("/home");
      window.location.href=window.location.href;

           


    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
