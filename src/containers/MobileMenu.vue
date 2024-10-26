<template>
  <div>
    <div class="w-full flex flex-col px-2">
      <a
        v-for="(link, index) in navbarLinks"
        :key="`${link}${index}`"
        role="button"
        class="block py-2.5 px-6 border-b hover:bg-devil-grass hover:text-white"
        @click="handleClick"
      >
        <span class="block">{{ link }}</span>
      </a>
    </div>
    <div class="flex flex-col gap-3 mt-5 px-2">
      <div>
        <Button
          :label="buttonTexts.login"
          :variant="ButtonVariants.Tertiary"
          @click="handleClick"
          class="custom-button"
        />
      </div>
      <div>
        <Button
          :label="buttonTexts.signup"
          @click="handleClick"
          class="custom-button"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import uiData from "../data/uiData.json";
import Button from "../components/Button.vue";
import { ButtonVariants } from "../Constants";

const { navbarLinks, buttonTexts } = uiData.header;

//emits
const emit = defineEmits<{
  (event: "click", clickEvent: Event): void;
}>();

const handleClick = (event: Event) => {
  emit("click", event);
};
</script>

<style scoped>
.custom-button {
  padding: 15px 0px;
}
</style>
