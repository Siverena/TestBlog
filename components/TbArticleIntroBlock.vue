<template lang="pug">
section.tb-article-intro-block    
    div.tb-article-intro-block__img
        img(:src="data.image")
    div.tb-article-intro-block__content
        h1.tb-article-intro-block__title {{ data.title }}
        div.tb-article-intro-block__statistics
            p.tb-article-intro-block__stat-item
                img(src="@/assets/img/tb-article-intro-block/icon-park-solid_time.svg")
                span {{ data.reading_time }} мин время чтения
            p.tb-article-intro-block__stat-item
                img(src="@/assets/img/tb-article-intro-block/mdi_eye.svg")
                span {{ data.views_count }} прочитали статью
        div.tb-article-intro-block__text {{ data.short_description }}
</template>
<script setup>
const props = defineProps(['data']);
</script>
