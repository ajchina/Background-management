<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">
        <svg-icon icon-class="QQ" ></svg-icon>
        <!-- <svg>
          <use xlink:href="#icon-qq"></use>
        </svg> -->
        Home
      </router-link> |
      <router-link to="/about">
        <!-- <svg>
          <use xlink:href="#icon-wx"></use>
        </svg> -->
        <svg-icon icon-class="QQs"></svg-icon>
      About</router-link>
    </div>
    <!-- 插座 -->
    <router-view />
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
