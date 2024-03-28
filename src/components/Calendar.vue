<script setup>
import { useCalendarStore } from '../stores/calendarStore';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { computed } from 'vue';

const calendarStore = useCalendarStore();

const weekDates = computed(() => calendarStore.weekDates.map(date => format(date, 'eee, MMM d', { locale: ru })));
</script>

<template>
  <div class="flex items-center space-x-2">
    <button @click="calendarStore.toPrevWeek()" class="btn-calendar">&lt;</button>
    <div class="flex overflow-x-auto">
      <div v-for="(date, index) in weekDates" :key="index" class="px-4 py-2">
        {{ date }}
      </div>
    </div>
    <button @click="calendarStore.toNextWeek()" class="btn-calendar">&gt;</button>
  </div>
</template>

<style scoped>
</style>
