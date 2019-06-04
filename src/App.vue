<template>
  <a-layout id="app">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo" />
        <a-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['home']" :selectedKeys="[current]" :style="{ lineHeight: '64px' }">
            <a-menu-item key="home">
                <router-link to="/">Dashboard</router-link>
            </a-menu-item>
            <a-menu-item key="list">
                <router-link to="/list">會員列表</router-link>
            </a-menu-item>
            <a-menu-item key="advanced">
                <router-link to="/advanced">會員操作</router-link>
            </a-menu-item>
        </a-menu>
    </a-layout-header>
    <router-view/>
  </a-layout>
</template>
<script>
export default {
  data(){
    return {
      current:""
    }
  },
  mounted(){
    this.current=this.$route.name
  },
  watch:{
    $route(to,from){
      this.current=to.name
    }
  }
}
</script>

<style lang="scss">
.logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, .2);
    margin: 16px 24px 16px 0;
    float: left;
  }
</style>
