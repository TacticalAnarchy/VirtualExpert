<template lang="html">
  <Welcome />
  <Input />
  <router-link to="VirtualExpert">to virtual expert</router-link>
  <Results />
</template>

<script>

  import Input from '../components/Input'
  import Welcome from '../components/Welcome'
  import Results from '../components/Results'

  export default {
    components: {
      Input,
      Welcome,
      Results,
    },
  }
</script>

<style lang="css" scoped>
</style>
