<script setup lang="ts">

</script>
<template>
    <div class="stack-c">
        <div class="stack-item s3">s3</div>
        <div class="stack-item s2">s2</div>
        <div class="stack-item s1">
            <img src="https://plus.unsplash.com/premium_photo-1669800502069-499e172df081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                loading="lazy" class="avatar-small"  />
            <p>let me present some scientific explanations of all those ufo sightings you have: emf ...</p>
        </div>

        <div class="info">
            <RouterLink to="/@robert">Created by @Robert</RouterLink>
            <p>5k views</p>
        </div>

    </div>
</template>

<style scoped>
.stack-c {
    width: 90vw; 
    margin: 20px 30px 20px 5%; 
    padding-left: 10%;
    display: grid;
    grid-template-areas: "inner-div";
}
.stack-item {
    width: 70vw;
    height: 25vh;
    min-height: 200px;
    background-color: #43505588;
    border-radius: 20px;
    padding: 15px;
    grid-area: inner-div;
    cursor: pointer;
}
.s1 {
    box-shadow:  2px 2px 4px #0000003b,
             0px 0px 0px #000;
}
.s2 {
    margin-left: 10px;
    margin-top: 10px;
}
.s3 {
    margin-left: 20px;
    margin-top: 20px;
}

.stack-item > p{
    color: white;
    font-size: 18px;
    margin-top: 10px;
}
.info {
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
    width: 90%;
    margin-top: 10px;
    padding: 5px;
}
</style>