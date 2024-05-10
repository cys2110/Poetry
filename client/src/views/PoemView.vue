<script setup>
import PoetryService from '@/services/PoetryService';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps(['name', 'title'])
const poem = ref(null)

onMounted(() => {
    PoetryService.getPoem(props.name, props.title)
    .then(response => poem.value = response.data[0])
    .catch(error => console.log(error))
})
</script>

<template>
    <main class="mt-28 w-[75%] mx-auto mb-5 flex-1">
        <div v-if="poem">
            <div class="text-2xl text-center text-violet-500 mb-1">{{ poem.title }}</div>
            <div class="text-lg text-center mb-5">
                <RouterLink :to="{name: 'author'}" class="text-violet-200 no-underline hover:underline">{{ poem.author }}</RouterLink>
            </div>
            <div class="text-center">
                <div v-for="line in poem.lines" :key="line">{{ line }}</div>
            </div>
        </div>
        <div v-else>Loading...</div>
    </main>
</template>