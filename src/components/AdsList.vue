<script setup>
import {computed, onMounted, ref} from 'vue';
import {useAdsStore} from '@/stores/adsStore';
import {useCalendarStore} from '@/stores/calendarStore';
import AdModal from "@/components/AdModal.vue";

const adsStore = useAdsStore();
const calendarStore = useCalendarStore();

onMounted(async () => {
  await adsStore.fetchAds();
});

const adsForSelectedDate = computed(() => {
  if (!calendarStore.selectedDate) {
    return [];
  }
  return adsStore.adsByDate(calendarStore.selectedDate);
});

const selectedAd = ref(null);
const isModalOpen = ref(false);

const openModal = (ad) => {
  selectedAd.value = ad;
  isModalOpen.value = true;
};
</script>

<template>
  <AdModal v-if="isModalOpen" :ad="selectedAd" :isOpen="isModalOpen" @close="isModalOpen = false"/>

  <p v-if="calendarStore.selectedDate" class="pb-4">Найдено объявлений: {{ adsForSelectedDate.length }}</p>


  <table class="container divide-y divide-gray-200 px-4">
    <tbody class="bg-white divide-y divide-gray-200">

    <tr v-for="(ad, index) in adsForSelectedDate"
        :key="ad.id"
        :class="{ 'bg-gray-50': index % 2 }"
        class="cursor-pointer hover:bg-gray-100"
        @click="openModal(ad)"
    >
      <td class="table-cell">
        <div class="text-gray-900">#{{ ad.id }}</div>
      </td>
      <td class="table-cell">
        <div class="text-gray-900">{{ ad.date }}</div>
      </td>
      <td class="table-cell">
        <div class="text-blue-500">{{ ad.title }}</div>
      </td>
    </tr>

    </tbody>
  </table>
</template>


