<script setup>
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const props = defineProps({
    date: {
        type: Date,
        required: true,
    }
});

const weekDay = format(props.date, 'eee', { locale: ru });
const monthDay = format(props.date, 'd', { locale: ru });
const month = format(props.date, 'LLL', { locale: ru });
</script>

<template>
  <div class="flex flex-col items-center">
    <div>{{ weekDay }}</div>
    <div>{{ monthDay }}</div>
    <div>{{ month }}</div>
  </div>
</template>

<style scoped>
</style>
