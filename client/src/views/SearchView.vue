<script setup>
import PoetryService from '@/services/PoetryService';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const searchTerm = ref(null)
const searchInput = ref('author')
const authors = ref([])
const poems = ref([])

const submitSearch = () => {
    PoetryService.search(searchInput.value, searchTerm.value)
    .then(response => {
        poems.value = response.data
        authors.value = response.data.reduce((acc, poem) => {
            if (!acc.includes(poem.author)) {
                acc.push(poem.author)
            }
            return acc
        }, [])
    })
    .catch(error => console.log(error))
}
</script>

<template>
    <div class="mt-32 w-[75%] mx-auto mb-5">
        <form @submit.prevent="submitSearch">
            <input type="text" v-model="searchTerm" />
            <select v-model="searchInput">
                <option value="author">Poet</option>
                <option value="poem">Poem</option>
            </select>
            <button type="submit">Search</button>
        </form>
        <div>
            <div v-if="authors.length > 0">
                <div>Poets</div>
                <div>
                    <div v-for="poet in authors">
                        <RouterLink :to="{name: 'author', params: {name: poet}}">{{ poet }}</RouterLink>
                    </div>
                </div>
            </div>
            <div v-if="poems.length > 0">
                <div>Poems</div>
                <div>
                    <div v-for="poem in poems">
                        <span>
                            <RouterLink :to="{name: 'poem', params: {name: poem.author, title: poem.title}}">{{ poem.title }}</RouterLink>
                        </span>
                        <span> ({{ poem.author }})</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>