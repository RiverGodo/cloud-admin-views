<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.img-item{
  width: 80px;
  height: 100px;
}
.clearfix::after{
  content: "";
  display: block;
  clear: both;
  width: 0;
  height: 0;

}
</style>
