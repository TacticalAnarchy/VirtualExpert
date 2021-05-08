<template>
  <router-view></router-view>
</template>

<script>


  export default {
    name: 'App',
    components: {
    },
  }
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  border: none;
  box-sizing: border-box;
}
body {
  background: #333333;
  color: white;
}

#app {
  position: absolute;
  border: 2px solid black;
  height: 90%;
  width: 60%;
  left: 20%;
  bottom: 5%;
  display: flex;
  flex-direction: column;
}
</style>
