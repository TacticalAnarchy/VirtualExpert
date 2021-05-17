<template>
  <div>
    <table>
      <thead class="thead-dark">
        <tr>
          <th>Title</th>
          <th>Key</th>
          <th>Desk</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in Students" :key="student._id">
          <td>{{ product.title }}</td>
          <td>{{ student.key }}</td>
          <td>{{ student.desc }}</td>
          <td>
            <router-link :to="{ name: 'edit', params: { id: student._id } }"
              >Edit</router-link
            >
            <button @click.prevent="deleteStudent(student._id)">Delete</button>
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
      sku: [],
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
  methods: {
    deleteStudent(id) {
      let apiURL = `http://localhost:4000/api/delete-student/${id}`;
      let indexOfArrayItem = this.Students.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Students.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
