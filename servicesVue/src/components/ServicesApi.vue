<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(elm, index) in list" :key="index">
              <td>{{ elm.userId }}</td>
              <td>{{ elm.id }}</td>
              <td>{{ elm.title }}</td>
              <td>{{ elm.body }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {getPosts} from '@/services/Post.services.js';

let list = ref([]);

onMounted(async () => {
    getPosts().then(Response=>Response.data).then(data=> list.value = data)
})

</script>

<style scoped></style>
