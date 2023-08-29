<template lang="pug">

section.tb-slider-block
    .tb-slider-block__content
        .tb-slider-block__image
            img(:src="currentImageUrl")
        .tb-slider-block__nav
            button.tb-slider-block__btn.tb-slider-block--prev(@click="prevtImg")
                img(src="@/assets/img/tb-slider-block/check.png")
            button.tb-slider-block__btn.tb-slider-block--nex(@click="nextImg")
                img(src="@/assets/img/tb-slider-block/check-r.png")
    .tb-slider-block__count
        span {{ sliderData.currentImage + 1  }} / {{ count }}
</template>
<script setup>
const props = defineProps(['data']);
import { ref } from 'vue';
const sliderData = ref({
  currentImage: 0,
});

const currentImageUrl = computed(() => {
  return props.data[sliderData.value.currentImage];
});
const count = computed(() => {
  return props.data.length;
});

function nextImg() {
  if (props.data.length - 1 === sliderData.value.currentImage) {
    sliderData.value.currentImage = 0;
  } else {
    sliderData.value.currentImage = sliderData.value.currentImage + 1;
  }
}
function prevtImg() {
  if (sliderData.value.currentImage === 0) {
    sliderData.value.currentImage = props.data.length - 1;
  } else {
    sliderData.value.currentImage = sliderData.value.currentImage - 1;
  }
}
</script>
