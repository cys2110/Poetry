<script setup>
import PoetryService from '@/services/PoetryService';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const authorList = ref([])

onMounted(() => {
  PoetryService.getAllAuthors()
  .then(response => authorList.value = response.data.authors)
  .catch(error => console.log(error))
})
</script>

<template>
  <main class="mt-32 w-[60%] mx-auto">
    <div class="text-center text-3xl">Authors</div>
    <div class="text-center mt-5">
      <div v-if="authorList.length > 0" v-for="author in authorList" :key="author">
        <RouterLink :to="{name: 'author', params: {name: author}}">{{ author }}</RouterLink>
      </div>
      <div v-else>
        Loading ...
      </div>
    </div>
  </main>
</template>
