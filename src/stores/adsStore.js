import {defineStore} from 'pinia';
import axios from 'axios';
import {format} from "date-fns";

export const useAdsStore = defineStore('ads', {
    state: () => ({
        ads: [],
    }),
    getters: {
        adsByDate: (state) => (date) => state.ads.filter(ad => ad.date === format(date, 'M/d/yyyy')),
    },
    actions: {
        async fetchAds() {
            try {
                const response = await axios.get('/MOCK_DATA.json');
                this.ads = response.data;
            } catch (error) {
                console.error('Ошибка загрузки объявлений:', error);
            }
        }
    }
});
