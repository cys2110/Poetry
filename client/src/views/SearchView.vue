<script setup>
import PoetryService from '@/services/PoetryService';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
    <div class="mt-28 w-[75%] mx-auto mb-5 flex-1">
        <form @submit.prevent="submitSearch" class="text-center">
            <input type="text" v-model="searchTerm" class="mx-2 border-b-2 border-b-violet-500 outline-none bg-transparent text-violet-500" placeholder="Search" />
            <select v-model="searchInput" class="mx-2 bg-transparent">
                <option value="author">Poet</option>
                <option value="poem">Poem</option>
            </select>
            <FontAwesomeIcon :icon="faMagnifyingGlass" @click="submitSearch" class="cursor-pointer mx-2" />
        </form>
        <div class="text-center mt-5">
            <div v-if="authors.length > 0">
                <div class="text-xl text-violet-500">Poets</div>
                <div class="mt-3">
                    <div v-for="poet in authors" class="my-1">
                        <RouterLink :to="{name: 'author', params: {name: poet}}" class="text-violet-200 no-underline hover:underline">{{ poet }}</RouterLink>
                    </div>
                </div>
            </div>
            <div v-if="poems.length > 0" class="mt-5">
                <div class="text-xl text-violet-500">Poems</div>
                <div class="mt-3">
                    <div v-for="poem in poems" class="my-1">
                        <span>
                            <RouterLink :to="{name: 'poem', params: {name: poem.author, title: poem.title}}" class="text-violet-200 no-underline hover:underline">{{ poem.title }}</RouterLink>
                        </span>
                        <span> ({{ poem.author }})</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>