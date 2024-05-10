<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div id="header" class="fixed bg-violet-700 w-[100vw] h-16 top-0">
      <div>DPS</div>
    </div>
    <RouterView />
    <!-- <div id="footer">
      <div class="absolute bottom-0 left-0">Created using Vuejs and Tailwind CSS</div>
    </div> -->
  </div>
</template>