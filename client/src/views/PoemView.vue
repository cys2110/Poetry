<script setup>
import PoetryService from '@/services/PoetryService';
import { onMounted, ref } from 'vue';

const props = defineProps(['name', 'title'])
const poem = ref(null)

onMounted(() => {
    PoetryService.getPoem(props.name, props.title)
    .then(response => poem.value = response.data[0])
    .catch(error => console.log(error))
})
</script>

<template>
    <main class="mt-32 w-[75%] mx-auto mb-5">
        <div v-if="poem">
            <div class="text-2xl text-center">{{ poem.title }}</div>
            <div class="text-lg text-center">{{ poem.author }}</div>
            <div class="text-center">
                <div v-for="line in poem.lines" :key="line">{{ line }}</div>
            </div>
        </div>
        <div v-else>Loading...</div>
    </main>
</template>