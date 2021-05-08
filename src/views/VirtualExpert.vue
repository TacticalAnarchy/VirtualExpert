<template lang="html">
  <Input />
  <div class="welcomeText">
    <h1>Virtual Expert</h1>
    <p>The Virtual Expert is an online tool to assist you when serving a customer</p>
  </div>
  <router-link to="/">to Search</router-link>

  <div class="question">
    <h2>To get started, please select a Department:</h2>
  </div>
</template>

<script>
  import Input from '../components/Input'
  export default {
    components: {
      Input,
    }
  }
</script>

<style lang="css" scoped>
  * {
    font-family: "Mukta";
  }

  .welcomeText {
    text-align: center;
  }

  h1 {
    font-size: 60px;
  }

  p {
    font-size: 20px;
  }

  .question {
    padding: 20px;
    background: #222222;
    margin: 30px auto;
    border-radius: 25px;
    border: 4px solid white;
  }
</style>
