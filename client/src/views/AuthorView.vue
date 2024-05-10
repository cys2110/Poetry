<script setup>
import PoetryService from '@/services/PoetryService';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps(['name'])
const poems = ref([])

onMounted(() => {
    PoetryService.getPoemsByAuthor(props.name)
    .then(response => poems.value = response.data)
    .catch(error => console.log(error))
})
</script>

<template>
    <main class="mt-32 w-[60%] mx-auto">
        <div class="text-center text-2xl">{{ name }}</div>
        <div class="text-center mt-3">
            <div v-if="poems.length > 0" v-for="poem in poems" :key="poem.title">
                <RouterLink :to="{name: 'poem', params: {title: poem.title}}">{{ poem.title }}</RouterLink>
            </div>
            <div v-else>Loading...</div>
        </div>
    </main>
</template>