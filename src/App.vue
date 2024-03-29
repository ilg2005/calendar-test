<script setup>

import Calendar from "@/components/Calendar.vue";
import AdsList from "@/components/AdsList.vue";
</script>

<template>
  <div class="container">
    <div class="flex flex-col justify-center items-center w-full py-10">
      <p class="text-xl mb-10">Выберите дату в календаре:</p>
      <Calendar class="mb-10"/>
      <AdsList/>
    </div>
  </div>
</template>

<style scoped>

</style>
