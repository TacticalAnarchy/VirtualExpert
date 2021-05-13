<template lang="html">
  <div class="container">
    <div class="welcomeText">
      <h1>Virtual Expert</h1>
      <p>The Virtual Expert is an online tool to assist you when serving a customer</p>
    </div>

    <div class="question">
      <h2>To get started, please select a Department:</h2>
    </div>
  </div>
</template>

<script>

  export default {
    components: {
    }
  }
</script>

<style lang="css" scoped>
  * {
    font-family: "Mukta";
  }

  .container {
    display: flex;
    flex-direction: column;
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
