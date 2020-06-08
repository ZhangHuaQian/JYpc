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
      
      alert("即将跳转至手机端");
      // this.$router.replace("/home");
      window.location.href="http://www.360.com"
    } else {

      alert("即将跳转到pc端");
      // console.log(window.location)
      this.$router.replace("/home");

           


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
