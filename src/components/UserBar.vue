<template>
    <div class="wrapper" @click="$router.push('/@andrew')">
        <div style="display: flex; align-items: center;" >
            <img src="https://plus.unsplash.com/premium_photo-1669800502069-499e172df081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                loading="lazy" class="avatar" style="height: 45px; width: 45px" />
            <div style="margin-left: 15px;">
                <p class="name">Andrew Stefen</p>
                <p class="username-search">@andrew</p>
            </div>
        </div>
        <button class="btn-secondary btn-small rounded">
            Follow
        </button>
    </div>

    <p style="margin-left: 10px; margin-top: 8px; width: 90%; color: white">When I look behind, the only thing that I see is me, standing under the night aurora </p>
</template>

<style scoped>
.wrapper {
    display: flex;
    width: 90%;
    margin-top: 25px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer
}
.name {
    font-size: 18px;
    color: white;
    font-weight: bold;
}
.username-search {
    color: #ababab;
    margin-top: -2px;
}
</style>