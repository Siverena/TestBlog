<template lang="pug">
section.tb-cta-form-block
    .tb-cta-form-block__image 
        img(src="@/assets/img/tb-cta-form-block/image.png")
    form.tb-cta-form-block__form(action="")
        h2.tb-cta-form-block__title Стань участником проекта
        div.tb-cta-form-block__inputs
            input.tb-cta-form-block__input.tb-input(
                placeholder="Имя" 
                type="text"  
                :class="formData.name ? 'tb-input--full' : ''" 
                v-model="formData.name"
            )
            input.tb-cta-form-block__input.tb-input(
                placeholder="Телефон" 
                type="tel" 
                :class="formData.tel ? 'tb-input--full' : ''" 
                v-model="formData.tel"
            )
            input.tb-cta-form-block__input.tb-input(
                placeholder="Email" 
                type="email" 
                :class="formData.email ? 'tb-input--full' : ''" 
                v-model="formData.email"
            )
        button.tb-cta-form-block__btn.tb-btn.tb-btn--blue Присоединиться
</template>
<script setup>
import { ref } from 'vue';
const formData = ref({
  email: '',
  name: '',
  tel: '',
});
</script>
