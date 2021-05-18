<template>
  <div>
    <span>Edit Product</span>
    <form action="POST" @submit.prevent="handleSubmitForm">
      <!-- Input Fields -->
      <div class="flex">
        <div class="inputCont">
          <label>Title:</label>
          <input type="text" placeholder="Visible Title" v-model="title" />
        </div>
        <!-- Larger Input Fields -->
        <div class="inputCont">
          <label>Key:</label>
          <input type="text" placeholder="Keywords" v-model="key" />
        </div>
        <div class="resize inputCont">
          <label>Desc:</label>
          <input
            class="resize"
            placeholder="Description of the product"
            type="text"
            v-model="desc"
          />
        </div>
      </div>
      <input id="submit" type="submit" value="Submit" placeholder="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { title: "", key: "", desc: "" };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-product";

      let output = { title: this.title, key: this.key, desc: this.desc };
      axios
        .post(apiURL, output)
        .then(() => {
          this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
// Colors
$label-background: #212121;
$input-color: #bbb;
$input-radius: 7px;

// TODO: Add all the required Fields
// Title
div {
  font-family: "Mukta";
  span {
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 2.5em;
    margin: 20px 0px;
  }
}

//Input Fields Structure
.flex {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  // Common Input Fields
  input {
    font-size: 1em;
    height: 1em;
    padding: 15px 10px;
    &:focus {
      outline: none;
      border: Solid aqua 2px;
      padding: 13px 8px;
    }
  }

  //Expandable input (For Larger Inputs)
  div.resize {
    resize: vertical;
    overflow: auto;
    width: 70%;
    height: 4em;
    min-height: 2em;

    input {
      margin: 0;
      height: 100%;
      width: calc(100% - 65.5px);
    }
  }
}

.inputCont {
  border-radius: 10px;
  padding: 0;
  margin: 10px 20px;
  background-color: $label-background;
  box-shadow: 5px 5px 7px #212121;

  input {
    background-color: $input-color;
    border-radius: $input-radius;
    &::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.4);
      font-weight: bold;
    }
  }
  label {
    margin: 0 15px;
  }
}

#submit {
  padding: 10px 20px;
  border-radius: $input-radius;
  margin-top: 20px;
  margin-left: 50%;
  transform: translate(-50%);
  border: 0;
  animation-duration: 0.3s;
  animation-fill-mode: both;
  background-color: $input-color;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background-color: aqua;
    border-color: white;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: buttonFadeIn;
  }
}
</style>
