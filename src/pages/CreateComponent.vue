<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Добавить студента</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Имя</label>
          <input type="text" class="form-control" v-model="student.name" required>
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="student.email" required>
        </div>

        <div class="form-group">
          <label>Телефон</label>
          <input type="text" class="form-control" v-model="student.phone" required>
        </div>

        <div class="form-group mt-4">
          <button class="btn btn-primary btn-block w-100">Добавить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { STUDENT } from '../models/student'
import axios from "axios";

export default {
  data() {
    return {
      student: null
    }
  },

  created() {
    this.student = STUDENT
  },

  methods: {
    handleSubmitForm() {
      let apiURL = 'http://localhost:4000/api/create-student';

      axios.post(apiURL, this.student).then(() => {
        this.$router.push('/view')
        this.student = STUDENT
      }).catch(err => {
        console.log(err)
      });
    }
  }
}
</script>