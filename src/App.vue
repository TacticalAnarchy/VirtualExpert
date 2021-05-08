<template>
  <Welcome />
  <Search />
  <Results />
</template>

<script>

import Search from './components/Search'
import Welcome from './components/Welcome'
import Results from './components/Results'


export default {
  name: 'App',
  components: {
    Search,
    Welcome,
    Results,
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
  height: 80%;
  width: 60%;
  left: 20%;
  bottom: 5%;
  display: flex;
  flex-direction: column;
}
</style>
