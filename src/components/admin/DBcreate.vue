<template>
  <div>
    <span>Admin Page</span>
    <div class="flex">
      <input type="text" placeholder="Title">
      <div class="resize">
        <input class="resize" type="text" placeholder="desc">
      </div>
      <input type="text" placeholder="key">
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  div{
    font-family: "Mukta";
    span {
      display: flex;
      width: 100%;
      justify-content: center;
      font-size: 2.5em;
      margin: 20px 0px;
    }
  }
  .flex{
    display: flex;
    flex-wrap: wrap;
    width:100%;
    justify-content: center;
    
    input{
      font-size: 1em;
      box-shadow: 5px 5px 7px #212121;
      height: 1em;
      padding: 15px 10px;
      border-radius: 10px;
      margin: 0 20px;
    }

    div.resize{
      background-color: #212121;
      resize: vertical;
      overflow: auto;

      input{
        margin: 0;
        height:100%;
        width: 100%;
      }
    }
  }
</style>