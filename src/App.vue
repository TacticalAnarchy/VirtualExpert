<template>
  <h1>Hello World</h1>
  <Search />
</template>

<script>

const color = '#333333';

import Search from './components/Search'

export default {
  name: 'App',
  components: {
    Search,
  },
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>
