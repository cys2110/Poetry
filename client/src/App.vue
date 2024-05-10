<script setup>
import { RouterView } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'vue-router';

const router = useRouter()

const goToHome = () => {
  router.push({name: 'home'})
}

const goToSearch = () => {
  router.push({name: 'search'})
}
</script>

<template>
  <div class="flex flex-col min-h-lvh">
    <div id="header" class="fixed bg-violet-700 h-16 top-0 flex justify-between p-5 items-center min-w-full">
      <div>
        <div class="text-3xl" @click="goToHome">DPS</div>
      </div>
      <div>
        <FontAwesomeIcon :icon="faMagnifyingGlass" class="text-lg cursor-pointer" @click="goToSearch" />
      </div>
    </div>
    <RouterView />
    <div id="footer" class="mt-3 py-5 text-center bg-violet-700">
      <div>Created by <a href="https://claire-sheridan.com/" class="text-white" target="_blank">Claire Sheridan</a> using Vuejs and Tailwind CSS</div>
    </div>
  </div>
</template>