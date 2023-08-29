<template lang="pug">
div.tb-subscribe 
    h3.tb-subscribe__text Подпишись на рассылку
    form.tb-subscribe__form(action="")
        input.tb-subscribe__input.tb-input(type="email" placeholder="Email" v-model="formData.email" :class="formData.email ?   'tb-input--full' : ''")
        button.tb-subscribe__btn.tb-btn.tb-btn--blue Подписаться
</template>
<script setup>
import { ref } from 'vue';
const formData = ref({
  email: '',
});
</script>
