<template lang="pug">
Head
    Title {{ content.meta.title }}
    <Meta name="description" :content="content.meta.description" />
div.tb-content(v-if="!loading") 
    component(v-for="(component,key) in content.body" 
    :key="key" 
    :is="componentsList[component.type]"
    :data="component.data")
</template>
<script setup>
import { useRoute } from 'vue-router';
import { usePageContentStore } from '@/stores/pageContentStore.js';
import { ref } from 'vue';

import TbArticleListBlock from '@/components/TbArticleListBlock.vue';
import TbArticleIntroBlock from '@/components/TbArticleIntroBlock.vue';
import TbTextBlock from '@/components/TbTextBlock.vue';
import TbCtaFormBlock from '@/components/TbCtaFormBlock.vue';
import TbSliderBlock from '@/components/TbSliderBlock.vue';
import TbSubscribe from '@/components/TbSubscribe.vue';
import TbImageBlock from '@/components/TbImageBlock.vue';

const loading = ref(true);
const route = useRoute();
const pageContentStore = usePageContentStore();
const componentsList = {
  article_list_block: TbArticleListBlock,
  article_intro_block: TbArticleIntroBlock,
  text_block: TbTextBlock,
  image_block: TbImageBlock,
  slider_block: TbSliderBlock,
  subscribe_form_block: TbSubscribe,
  cta_form_block: TbCtaFormBlock,
};
const content = computed(() => pageContentStore.pageContent.content);

pageContentStore
  .fetchPageContent(route.path)
  .then(() => {
    loading.value = false;
  })
  .catch((e) => {
    console.log(e);
  });
</script>
