<template>
  <div>
    <h6>home page</h6>
    <!--    <router-view></router-view>-->
    <ui class="box">
      <li class="left">
        <router-view name="a"></router-view>
      </li>
      <li class="right">
        <router-view name="b"></router-view>
      </li>
    </ui>
  </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style scoped>
  h6 {
    background: red;

    border-top-style: solid;

    padding: 40px;
  }

  .box li {
    list-style-type:none;
    float: left;
  }

  .left {

    width: 20%;
    height: 800px;
    background: yellow;
  }

  .right {
    width: 80%;
    height: 800px;
    background: #688db9;
  }
</style>
