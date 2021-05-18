<template>
  <div>
    <table>
      <thead class="thead-dark">
        <tr>
          <th>Title</th>
          <th>Key</th>
          <th>Description</th>
          <th>Sku</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="Products in Products" :key="Products._id">
          <td>{{ Products.title }}</td>
          <td>{{ Products.key }}</td>
          <td>{{ Products.desc }}</td>
          <td></td>
          <td>
            <button @click="edit(Products._id)">Edit</button>
            <!--button @click.prevent="deleteProduct(Products._id)">Delete</button-->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Products: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Products = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // TODO: Enable Edit and Deletion of Proudcts
  methods: {
    deleteProduct(id) {
      let apiURL = `http://localhost:4000/api/delete-student/${id}`;
      let indexOfArrayItem = this.Products.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Products.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    edit(id) {
      let editURL = "http://localhost/EditComponent?id=" + id;
      // TODO: Add router here to change component to edit component
      this.$router.push(editURL);
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  tr {
    padding: 10px;
    td {
      padding: 10px;
      border: none;
    }
  }
}
</style>
