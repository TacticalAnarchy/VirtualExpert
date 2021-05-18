<template>
  <div>
    <form @submit.prevent="handleUpdateForm">
      <div>
        <label>title</label>
        <input type="text" v-model="Products.title" />
      </div>

      <div>
        <label>desc</label>
        <input type="test" v-model="Products.desc" />
      </div>

      <div>
        <label>key</label>
        <input type="text" v-model="Products.key" />
      </div>

      <div>
        <button>Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Products: {},
    };
  },
  created() {
    //let apiURL = `http://localhost:4000/api`;

    axios.get().then((res) => {
      console.log(res);
      this.Products = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-product/${this.$route.params.id}`;

      axios
        .post(apiURL, this.Products)
        .then((res) => {
          console.log(res);
          this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
