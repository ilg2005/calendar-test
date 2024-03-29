<script setup>
import {XMarkIcon} from '@heroicons/vue/24/outline';
import {format} from "date-fns";

defineProps({
  ad: Object,
  isOpen: Boolean
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
    <div class="bg-white p-4 rounded-md shadow-2xl min-w-[300px]">
      <div class="flex flex-col">
        <button class="self-end -mr-3 -mt-3" @click="closeModal">
          <XMarkIcon class="w-3 h-3 hover:scale-125 text-gray-500"/>
        </button>
        <h2 class="text-sm text-gray-500 mb-3">Объявление #{{ ad.id }}</h2>
        <hr class="-mt-2 mb-2">
        <p class="mb-2 text-blue-700 ">{{ ad.title }}</p>
        <p class="text-xs italic text-gray-500 self-end">{{ format(ad.date, 'd.MM.yyyy') }}</p>
      </div>
    </div>
  </div>
</template>
