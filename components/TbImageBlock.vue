<template lang="pug">
section.tb-image-block 
    .tb-image-block__image 
        img(:src="data.src")
    .tb-image-block__caption(v-if="data.caption") 
        span {{ data.caption }}
</template>
<script setup>
const props = defineProps(['data']);
</script>
