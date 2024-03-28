<script setup>
import {useCalendarStore} from '../stores/calendarStore';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/vue/24/solid'
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';
import {computed} from 'vue';

const calendarStore = useCalendarStore();

const weekDates = computed(() => calendarStore.weekDates.map(date => format(date, 'eee, MMM d', {locale: ru})));
</script>

<template>
  <div class="flex items-center space-x-2">
    <button class="btn-calendar" @click="calendarStore.toPrevWeek()">
      <ChevronLeftIcon class="h-5 w-5 scale-150"/>
    </button>
    <div class="flex overflow-x-auto">
      <div v-for="(date, index) in weekDates" :key="index" class="px-4 py-2">
        {{ date }}
      </div>
    </div>
    <button class="btn-calendar" @click="calendarStore.toNextWeek()">
      <ChevronRightIcon class="h-5 w-5 scale-150"/>
    </button>
  </div>
</template>

<style scoped>
</style>
