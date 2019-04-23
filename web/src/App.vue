<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Map</router-link> |
      <router-link to="/home">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
@import "./style/global.css";
#app {
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding:15px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
