import { defineStore } from 'pinia';
import mockData from '@/assets/MOCK_DATA.json';
import {format} from "date-fns";

export const useAdsStore = defineStore('ads', {
    state: () => ({
        ads: mockData,
    }),
    getters: {
        adsByDate: state => date => state.ads.filter(ad => ad.date === format(date, 'M/d/yyyy')),
    },
});
