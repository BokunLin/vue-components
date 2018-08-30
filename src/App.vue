<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/noviceGuidance">noviceGuidance</router-link>
      </li>
      <li>
        <router-link to="/dropLoad">dropLoad</router-link>
      </li>
      <li>
        <router-link to="/dropDown">dropDown (H5)</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  ul {
    border-bottom: 1px solid #eee;
    background-color: #fff;
    padding-bottom: 10px;
    margin: 0;
    position: relative;
    z-index: 100;
  }
}
</style>
