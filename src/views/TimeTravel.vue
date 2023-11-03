<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import PeekPost from '@/components/post/PeekPost.vue'

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const today: Date = new Date()
const selectedMonth: Ref<number> = ref(today.getMonth())
const selectedYear: Ref<number> = ref(today.getFullYear())
const startFrom: Ref<number> = ref(0)
const selectedDate: Ref<number> = ref(today.getDate())

watch(selectedMonth, async (newMonth: number) => {
    let d: Date = new Date()
    d.setFullYear(selectedYear.value)
    d.setMonth(newMonth)
    d.setDate(1)
    startFrom.value = d.getDay()
})

function prevMonth() : void {
    if (selectedMonth.value > 0) selectedMonth.value -= 1
    else {
        selectedMonth.value = 11
        selectedYear.value -= 1
    }
}

function nextMonth() : void {
    if (selectedMonth.value < 11) selectedMonth.value += 1
    else {
        selectedMonth.value = 0
        selectedYear.value += 1
    }
}

</script>

<template>
    <div class="container">
        <h2 class="title">Time Travel to the Past</h2>

        <div class="calender">
            <select 
                @change="selectedMonth = months.indexOf(($event.target as HTMLInputElement).value)"
                :value="months[selectedMonth]">
                <option v-for="(item, index) in months" :key="index"
                    style="background: #1e1e1e">{{ item }}</option>
            </select>
            <select v-model="selectedYear">
                <option>2023</option>
                <option>2022</option>
            </select>

            <div class="calender-pagination">
                <button @click="prevMonth()">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.414 12L13.889 14.475L13.182 15.182L10 12L13.182 8.81799L13.889 9.52499L11.414 12Z" fill="#A3F7BF"/>
                    </svg>
                </button>
                <button @click="nextMonth()"> 
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" style="transform: rotate(180deg)" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.414 12L13.889 14.475L13.182 15.182L10 12L13.182 8.81799L13.889 9.52499L11.414 12Z" fill="#A3F7BF"/>
                    </svg>
                </button>
            </div>

            <div class="dates-list">
                <p v-for="item in days" :key="item" style="color: #718096">{{ item }}</p>
                <p 
                    v-for="item in (30 + startFrom)" 
                    @click="selectedDate = item"
                    :class="{ 'selected-date': selectedDate == item }" 
                    :key="item">
                    {{ (item - startFrom) > 0 ? (item - startFrom) : '' }}
                </p>
            </div>
        </div>

        <p class="date-title">Posts on {{ selectedDate }} {{ months[selectedMonth] }} {{ selectedYear }}</p>
        <div style="margin-top: 20px">
            <PeekPost />
            <PeekPost />
            <PeekPost />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: var(--bottom-menu-height);
}

.title {
    color: white;
    font-weight: bold;
}

.calender {
    padding: 15px;
    margin: 10px;
    background: var(--c-black-mute);
    border-radius: 10px;
}
.calender > select {
    padding: 7px;
    margin-inline: 10px;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    color: var(--c-primary);
    cursor: pointer;
}
.calender > select:hover {
    background-color: var(--color-background);
}
.calender-pagination {
    float: right;
}
.calender-pagination > button {
    background-color: transparent;
    padding: 0px;
    padding-bottom: -8px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
.calender-pagination > button:hover {
    background-color: var(--color-background);
}
.dates-list {
    margin: 10px;
    margin-top: 15px;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    column-gap: 15px;
}

.dates-list>p {
    text-align: center;
    font-size: 16px;
    padding: 2px;
    color: var(--c-primary);
    cursor: pointer;
}
.selected-date {
    background-color: var(--c-secondary);
    border-radius: 20px;
    color: white !important;
}
.date-title {
    align-self: flex-start;
    margin-left: 30px;
    margin-top: 30px;
    color: white;
    font-size: 18px;
    font-weight: bold;
}
</style>