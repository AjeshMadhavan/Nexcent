<template>
  <div
    class="relative px-2 py-24 flex items-center justify-center bg-silver md:px-3 lg:gap-26 xl:px-36 xl:justify-between"
  >
    <div class="z-10 flex flex-col">
      <h1
        class="font-inter text-3xl text-center sm:text-4xl md:text-6xl xl:text-left xl:text-headline-1"
      >
        {{ title.text }}&nbsp;
        <span class="text-devil-grass xl:block">
          {{ title.hightlight }}
        </span>
      </h1>
      <p
        class="mt-4 font-inter text-grey text-sm text-center md:text-base xl:text-start"
      >
        {{ description }}
      </p>
      <div class="button-wrapper mx-auto mt-8 w-full md:w-96 xl:mx-0 xl:w-fit">
        <Button :label="buttonText" class="custom-button" />
      </div>
    </div>
    <div
      class="absolute top-0 right-0 z-0 h-full opacity-10 xl:relative xl:h-fit xl:opacity-100"
    >
      <img
        class="block h-full xl:h-auto"
        src="../assets/Courses.svg"
        alt="courses-image"
      />
    </div>
    <div class="absolute bottom-4 left-0 flex justify-center gap-2 w-full">
      <div class="w-2.5 h-2.5 bg-devil-grass rounded-full" />
      <div class="w-2.5 h-2.5 bg-devil-grass/30 rounded-full" />
      <div class="w-2.5 h-2.5 bg-devil-grass/30 rounded-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import uiData from "../data/uiData.json";
import Button from "../components/Button.vue";

const { title, description, buttonText } = uiData.heroBanner;
</script>

<style scoped>
.custom-button {
  padding: 14px 32px;
  font-weight: 500;
}
</style>
