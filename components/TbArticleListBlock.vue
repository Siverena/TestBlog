<template lang="pug">
div.tb-article-list-block(:id="props.id")
    h3.tb-article-list-block__title(v-if="$route.path !== '/'") {{ props.data.title }}
    div.tb-article-list-block__list
        div.tb-article-list-block__item(v-for="(item,key) in props.data.articles" :key="key")
            div.tb-article-list-block__img
                img(:src="item.image")
            h3.tb-article-list-block__name {{ item.title }}
            NuxtLink.tb-article-list-block__btn.tb-btn.tb-btn--black(:to="item.link") Читать

</template>

<script setup>
const props = defineProps(['data']);
</script>
