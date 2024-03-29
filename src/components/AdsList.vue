<script setup>
import {computed} from 'vue';
import {useAdsStore} from '@/stores/adsStore';
import {useCalendarStore} from '@/stores/calendarStore';

const adsStore = useAdsStore();
const calendarStore = useCalendarStore();

const adsForSelectedDate = computed(() => {
  if (!calendarStore.selectedDate) {
    return [];
  }
  return adsStore.adsByDate(calendarStore.selectedDate);
});
</script>

<template>
  <p v-if="calendarStore.selectedDate" class="pb-4">Найдено объявлений: {{ adsForSelectedDate.length }}</p>


  <table class="container min-w-full divide-y divide-gray-200">
    <tbody class="bg-white divide-y divide-gray-200">

    <tr v-for="(ad, index) in adsForSelectedDate"
        :key="ad.id"
        :class="{ 'bg-gray-50': index % 2 }"
        class="hover:bg-gray-100"
    >
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">#{{ ad.id }}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">{{ ad.date }}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-blue-500">{{ ad.title }}</div>
      </td>
    </tr>

    </tbody>
  </table>
</template>


