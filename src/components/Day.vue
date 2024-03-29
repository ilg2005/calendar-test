<script setup>
import {format, isSameDay} from 'date-fns';
import {ru} from 'date-fns/locale';
import {computed} from "vue";
import {useCalendarStore} from "@/stores/calendarStore.js";


const props = defineProps({
  date: {
    type: Date,
    required: true,
  }
});

const calendarStore = useCalendarStore();

const isToday = computed(() => isSameDay(props.date, new Date()));

const setSelectedDate = () => calendarStore.setSelectedDate(props.date);
const isSelected = computed(() => isSameDay(props.date, calendarStore.selectedDate));


const weekDayNumber = props.date.getDay();
const weekDayShortNames = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const weekDay = weekDayShortNames[weekDayNumber];

const monthDay = format(props.date, 'd', {locale: ru});

const month = format(props.date, 'LLL', {locale: ru});
</script>

<template>
  <div :class="{ 'bg-gray-200': isToday, 'calendar-day-selected': isSelected }"
       class="calendar-day flex flex-col items-center"
       @click="setSelectedDate"
  >
    <div class="text-blue-600 font-bold">{{ weekDay }}</div>
    <div class="text-green-600 font-bold">{{ monthDay }}</div>
    <div class="text-orange-700 text-xs">{{ month }}</div>
  </div>
</template>

