<template lang="html">
  <div class="resultsContainer">
    <div class="flexContainer">
      <Result />
    </div>
  </div>
</template>

<script>
  import Result from "./Result";

  export default {
    name: "Results",
    components: {
      Result,
    }
  }
</script>

<style lang="css" scoped>
  .resultsContainer {
    width: 100%;
    height: 65%;
    position: absolute;
    bottom: 0px;
    overflow-y: scroll;
  }

  .flexContainer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: #222222;
  }
</style>
