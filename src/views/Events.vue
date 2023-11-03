<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <h2 class="title">Events</h2>
        <div style="display: flex; align-items: center; justify-content: center;">
            <input type="search" placeholder="Search" class="search-box" />
            <button class="search-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.16" d="M19 11C19 13.1217 18.1571 15.1566 16.6569 16.6569C15.1566 18.1571 13.1217 19 11 19C8.87827 19 6.84344 18.1571 5.34315 16.6569C3.84285 15.1566 3 13.1217 3 11C3 8.87827 3.84285 6.84344 5.34315 5.34315C6.84344 3.84285 8.87827 3 11 3C13.1217 3 15.1566 3.84285 16.6569 5.34315C18.1571 6.84344 19 8.87827 19 11Z" fill="#A3F7BF"/>
                    <path d="M21 21L16.657 16.657M16.657 16.657C17.3998 15.9141 17.9891 15.0322 18.3912 14.0615C18.7932 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.94939 18.7932 8.90908 18.3912 7.93845C17.9891 6.96782 17.3998 6.08588 16.657 5.34299C15.9141 4.6001 15.0321 4.01081 14.0615 3.60877C13.0909 3.20672 12.0506 2.99979 11 2.99979C9.94936 2.99979 8.90905 3.20672 7.93842 3.60877C6.96779 4.01081 6.08585 4.6001 5.34296 5.34299C3.84263 6.84332 2.99976 8.87821 2.99976 11C2.99976 13.1218 3.84263 15.1567 5.34296 16.657C6.84329 18.1573 8.87818 19.0002 11 19.0002C13.1217 19.0002 15.1566 18.1573 16.657 16.657Z" stroke="#A3F7BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <br />
        <p style="color:white; font-size: 20px; font-weight: bold;">
            Joining
        </p>
        <br />
        <div class="joining-list"> 
            <div v-for="item in 3" :key="item" class="event-card" @click="$router.push('/events/' + item)">
                <img src="https://plus.unsplash.com/premium_photo-1669800502069-499e172df081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    loading="lazy" 
                    class="avatar" />
                <h3>Developers Live Talk</h3>
                <p>
                    19 Sept 
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 10px; margin-right: 5px">
                        <path d="M5.62509 9.37499L9.37509 5.62499M6.87509 3.74999L7.16446 3.41499C7.75059 2.82895 8.54552 2.49974 9.37437 2.4998C10.2032 2.49986 10.9981 2.82918 11.5842 3.41531C12.1702 4.00143 12.4994 4.79636 12.4993 5.62521C12.4993 6.45407 12.17 7.24895 11.5838 7.83499L11.2501 8.12499M8.12509 11.25L7.87696 11.5837C7.28399 12.1701 6.48371 12.499 5.64978 12.499C4.81585 12.499 4.01556 12.1701 3.42259 11.5837C3.13031 11.2947 2.89827 10.9506 2.73991 10.5713C2.58154 10.192 2.5 9.78509 2.5 9.37406C2.5 8.96302 2.58154 8.55608 2.73991 8.17678C2.89827 7.79748 3.13031 7.45337 3.42259 7.16437L3.75009 6.87499" stroke="#A3F7BF" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Link provided</span>
                </p>
                <p class="tag">Meetup</p>
            </div>
        </div>
        <br />
        <p style="color:white; font-size: 20px; font-weight: bold;">
            Explore
        </p>
        <br />
        <div class="explore-list">
            <div v-for="item in 3" :key="item" class="event-card" @click="$router.push('/events/' + item)">
                <img src="https://plus.unsplash.com/premium_photo-1669800502069-499e172df081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    loading="lazy" 
                    class="avatar" />
                <h3>Developers Live Talk</h3>
                <p>
                    19 Sept 
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 10px; margin-right: 5px">
                        <path d="M5.62509 9.37499L9.37509 5.62499M6.87509 3.74999L7.16446 3.41499C7.75059 2.82895 8.54552 2.49974 9.37437 2.4998C10.2032 2.49986 10.9981 2.82918 11.5842 3.41531C12.1702 4.00143 12.4994 4.79636 12.4993 5.62521C12.4993 6.45407 12.17 7.24895 11.5838 7.83499L11.2501 8.12499M8.12509 11.25L7.87696 11.5837C7.28399 12.1701 6.48371 12.499 5.64978 12.499C4.81585 12.499 4.01556 12.1701 3.42259 11.5837C3.13031 11.2947 2.89827 10.9506 2.73991 10.5713C2.58154 10.192 2.5 9.78509 2.5 9.37406C2.5 8.96302 2.58154 8.55608 2.73991 8.17678C2.89827 7.79748 3.13031 7.45337 3.42259 7.16437L3.75009 6.87499" stroke="#A3F7BF" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Link provided</span>
                </p>
                <p class="tag">Meetup</p>
            </div>
        </div>

    </div>
</template>

<style scoped>
.container {
    padding: 20px;
    padding-left: 5%;
    padding-bottom: 200px;
}
.title {
    color: white;
    font-weight: bold;
}
.search-box {
    background-color: #27323A;
    border: none;
    border-radius: 20px;
    padding: 10px;
    padding-left: 20px;
    color: white;
    width: 90%;
    margin-top: 15px;
    font-size: 16px;
}
.search-box:focus {
    outline: none;
}
.search-btn {
    background: transparent;
    border: none;
    margin-top: 15px;
    margin-left: 5px;
    padding: 5px;
    padding-left: 7px;
    padding-right: 7px;
    border-radius: 50%;
    opacity: 0.7;
}
.search-btn:active {
    background-color: var(--c-black-mute)
}
.event-card {
    padding: 20px;
    background-color: var(--c-black-mute);
    border: 1px solid #a3f7bf88;
    border-radius: 10px;
    flex-shrink: 0;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    margin-left: 20px;
}
.event-card:hover {
    box-shadow:  8px 8px 12px var(--c-black-mute),
             -8px -8px 12px var(--c-black-mute);
    transition: 0.2s ease;
}
.event-card > h3 {
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin-top: 10px;
    display: flex;
    align-items: center;
}
.event-card > p {
    color: #ababab;
    display: flex;
    align-items: center;
}
.tag {
    background-color: var(--c-primary);
    padding-left: 4px;
    padding-right: 4px;
    font-size: 14px;
    color: black !important;
    border-radius: 10px;
    margin-top: 15px;
}
.joining-list {
    display: flex; overflow-x: auto;
    scrollbar-color: var(--c-divider-dark-1) transparent;
    scrollbar-width: 2px;
}
.joining-list::-webkit-scrollbar-track  {
    background-color: transparent;
}

.joining-list::-webkit-scrollbar-thumb {
    height: 5px;
    background-color: var(--c-divider-dark-1);
}
.explore-list {
    display: grid;
    grid-template-columns: auto auto;
}
@media (max-width: 480px) {
    .explore-list {
        grid-template-columns: auto;
    }
}
</style>