<template lang="pug">
section.tb-text-block
    div.tb-text-block__content(v-html="data")
</template>
<script setup>
const props = defineProps(['data']);
</script>
