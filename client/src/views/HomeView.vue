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
  <main class="mt-28 mx-auto w-[70%] flex-1">
    <div class="text-center text-3xl text-violet-500">Authors</div>
    <div class="text-center mt-5">
      <div v-if="authorList.length > 0" v-for="author in authorList" :key="author">
        <RouterLink :to="{name: 'author', params: {name: author}}" class="text-violet-200 no-underline hover:underline">{{ author }}</RouterLink>
      </div>
      <div v-else class="text-xl">Loading ...</div>
    </div>
  </main>
</template>
