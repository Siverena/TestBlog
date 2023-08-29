import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
export const usePageContentStore = defineStore('pageContentStore', () => {
  const pageContent = ref({
    content: {},
  });

  const getPageContent = computed(() => pageContent.value.content);

  async function fetchPageContent(path) {
    useFetch(`https://devtwit8.ru/api/v1/page/?path=${path}`)
      .then((data) => {
        pageContent.value.content = data.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return { pageContent, fetchPageContent, getPageContent };
});
