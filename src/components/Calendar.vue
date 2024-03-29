<script setup>
import {useCalendarStore} from '@/stores/calendarStore';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/vue/24/solid'
import {computed} from 'vue';
import Day from "@/components/Day.vue";

const calendarStore = useCalendarStore();

const weekDates = computed(() => calendarStore.weekDates);
</script>

<template>
  <div class="flex justify-center items-center space-x-2 w-3/4">

    <button class="btn-calendar" @click="calendarStore.toPrevWeek()">
      <ChevronLeftIcon class="h-5 w-5 scale-150"/>
    </button>
    <div class="flex justify-between w-full px-4">
      <Day v-for="date in weekDates" :key="date.toISOString()" :date="date"/>
    </div>
    <button class="btn-calendar" @click="calendarStore.toNextWeek()">
      <ChevronRightIcon class="h-5 w-5 scale-150"/>
    </button>
  </div>
</template>

