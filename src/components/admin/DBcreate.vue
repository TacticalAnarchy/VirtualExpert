<template>
  <div>
    <span>Edit Product</span>
    <form action="POST">
      <!-- Input Fields -->
      <div class="flex">
        <div class="inputCont">
          <label>Title:</label>
          <input type="text" placeholder="Visible Title">
        </div>
        <!-- Larger Input Fields -->
        <div class="inputCont">
          <label>Key:</label>
          <input type="text" placeholder="Keywords">
        </div>
        <div class="resize inputCont">
          <label>Desc:</label>
          <input class="resize" placeholder="Description of the product" type="text">
        </div>
      </div>
      <button @submit.prevent="handleUpdateForm">Update</button>
    </form>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  // Colors
  $label-background: #212121;
  $input-radius: 7px;

  // TODO: Add all the required Fields
  // Title
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

  .inputCont{
    border-radius: 10px;
    padding: 0;
    margin: 10px 20px;
    background-color: $label-background;
    box-shadow: 5px 5px 7px #212121;
    input{
      border-radius: $input-radius;
      &::-webkit-input-placeholder{
        color: rgba(0, 0, 0, 0.267);
        font-weight: bold;
      }
    }
    label{
      margin: 0 15px;
    }

  }

  //Input Fields Structure 
  .flex{
    display: flex;
    flex-wrap: wrap;
    width:100%;
    justify-content: center;
    
    // Common Input Fields
    input{
      font-size: 1em;
      height: 1em;
      padding: 15px 10px;
    }

    //Expandable input (For Larger Inputs)
    div.resize{
      resize: vertical;
      overflow: auto;
      width: 70%;
      height: 4em;
      min-height: 2em;

      input{
        margin: 0;
        height:100%;
        width: calc(100% - 65.5px);
      }
    }
  }

  button{
    padding: 10px 20px;
    border-radius: $input-radius;
    margin-top: 20px;
    margin-left: 50%;
    transform: translate(-50%);
    border: 0;
    animation-duration: .3s;
    animation-fill-mode: both;
    &:hover{
      cursor: pointer;
      background-color: #77dd77;
      border-color: white;
      animation-duration: .5s;
      animation-fill-mode: both;
      animation-name: buttonFadeIn;
    }
  }
  @keyframes buttonFadeIn {
    0%    {background-color:white;}
    100%  {background-color: #77dd77;}
  }

</style>