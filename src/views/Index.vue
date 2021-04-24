<template>
  <div class="index">
    <img class="img" alt="wjt logo" src="../assets/logo.png">
    <p>权限控制</p>
    <button v-display-key="1">权限一</button>
    <button v-display-key="2">权限二</button>
    <button v-display-key="3">权限三</button>
    <button v-display-key="4">权限四</button>
    <button v-display-key="5">权限五</button>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Index',
  components: {

  }
}
</script>

<style>
  .img{
    /*width: 150px;*/
    /*height: 100px;*/
  }
</style>
