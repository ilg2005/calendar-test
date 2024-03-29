<script setup>

import Calendar from "@/components/Calendar.vue";
import AdsList from "@/components/AdsList.vue";
</script>

<template>
  <div class="container">
    <div class="flex flex-col justify-center items-center w-full">
      <Calendar class="mb-10"/>
      <AdsList/>
    </div>
  </div>
</template>

<style scoped>

</style>
