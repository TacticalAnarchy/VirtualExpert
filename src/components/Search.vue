<template lang="html">
  <form action="index.html" method="post">
    <div>
      <input type="text" name="searchBox" placeholder="Search here...">
      <button type="submit" name="button">🔎︎</button>
    </div>
  </form>
</template>

<script>

  export default {
    name: "Search",
    components: {
    }
  }
</script>

<style lang="css" scoped>
  form {
    width: 65%;
    max-width: 650px;
    height: 70px;
    margin: 0em auto;
    position: relative;
    overflow: hidden;
    border-radius: 25px;
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  input {
    width: calc(100% - 50px);
    height: 100%;
    background: #222222;
    line-height: 70px;
    font-size: 30px;
    padding-left: 20px;
    position: absolute;
    border-radius: 25px 0px 0px 25px;
    font-family: "Mukta";
    color: white;
    outline: none;

  }

  button {
    position: absolute;
    background: #111111;
    height: 70px;
    width: 70px;
    right: 0px;
    color: lightgray;
    transform-origin: center;
    transform: rotate(-90deg);
    font-size: 30px;
    border-radius: 0px 0px 25px 25px;
  }
</style>
