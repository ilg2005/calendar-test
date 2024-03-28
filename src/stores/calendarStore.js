import { defineStore } from 'pinia';
import { addDays, startOfWeek } from 'date-fns';

export const useCalendarStore = defineStore('calendar', {
    state: () => ({
        currentDate: new Date(),
    }),
    getters: {
        weekDates: (state) => {
            // Дата начала недели, с понедельника
            let startDay = startOfWeek(state.currentDate, { weekStartsOn: 1 });

            // Массив дней недели
            let week = [];
            for (let index = 0; index < 7; index++) {
                let day = addDays(startDay, index);
                week.push(day);
            }
            return week;
        },
    },
    actions: {
        toNextWeek() {
            this.currentDate = addDays(this.currentDate, 7);
        },
        toPrevWeek() {
            this.currentDate = addDays(this.currentDate, -7);
        },
    },
});
