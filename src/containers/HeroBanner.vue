<template>
  <div
    class="relative px-2 py-24 flex items-center justify-center bg-silver md:px-3 lg:gap-26 xl:px-36 xl:justify-between"
  >
    <div class="flex overflow-hidden">
      <div
        v-for="carousalItem in CAROUSAL_ITEMS_LENGTH + 1"
        :key="carousalItem"
        class="z-10 flex flex-col min-w-full transition-transform duration-1000 px-10 select-none"
        :style="carousalStyle"
      >
        <h1
          class="font-inter text-3xl text-center sm:text-4xl md:text-6xl xl:text-left xl:text-headline-1"
        >
          {{ title.text }}
          <span class="text-devil-grass xl:block">
            {{ title.hightlight }}
          </span>
        </h1>
        <p
          class="mt-4 font-inter text-grey text-sm text-center md:text-base xl:text-start"
        >
          {{ description }}
        </p>
        <div
          class="button-wrapper mx-auto mt-8 w-full md:w-96 xl:mx-0 xl:w-fit"
        >
          <Button :label="buttonText" class="custom-button" />
        </div>
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
      <div
        v-for="(carousalItem, index) in CAROUSAL_ITEMS_LENGTH"
        :key="carousalItem"
        :class="[
          'w-2.5 h-2.5 rounded-full transition-colors duration-500',
          {
            'bg-devil-grass': activeCarousalBadge(index),
            'bg-devil-grass/30': !activeCarousalBadge(index),
          },
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import uiData from "../data/uiData.json";
import Button from "../components/Button.vue";

const { title, description, buttonText } = uiData.heroBanner;

const CAROUSAL_ITEMS_LENGTH = 3;
const CAROUSAL_CHANGE_INTERVAL_IN_MS = 3000;
const CAROUSAL_TRANSITION_DURATION_IN_MS = 1000;
const CAROUSAL_TRANSITION_STYLE = `transform ${CAROUSAL_TRANSITION_DURATION_IN_MS}ms ease`;
const CAROUSAL_TRANSITION_INITIAL_STYLE = "none";
const INITIAL_CAROUSAL_ITEM_INDEX = 0;

const activeCarousalItemIndex = ref<number>(INITIAL_CAROUSAL_ITEM_INDEX);
const carousalTransitionStyle = ref<string>(CAROUSAL_TRANSITION_INITIAL_STYLE);

const carousalStyle = computed(() => {
  return {
    transition: carousalTransitionStyle.value,
    transform: `translateX(-${activeCarousalItemIndex.value * 100}%)`,
  };
});

const activeCarousalBadge = (index: number) => {
  return (
    index === activeCarousalItemIndex.value ||
    (activeCarousalItemIndex.value === CAROUSAL_ITEMS_LENGTH &&
      index === INITIAL_CAROUSAL_ITEM_INDEX)
  );
};

const initiateCarousal = () => {
  setInterval(() => {
    activeCarousalItemIndex.value += 1;
    carousalTransitionStyle.value = CAROUSAL_TRANSITION_STYLE;

    if (activeCarousalItemIndex.value === CAROUSAL_ITEMS_LENGTH) {
      setTimeout(() => {
        activeCarousalItemIndex.value = INITIAL_CAROUSAL_ITEM_INDEX;
        carousalTransitionStyle.value = CAROUSAL_TRANSITION_INITIAL_STYLE;
      }, CAROUSAL_TRANSITION_DURATION_IN_MS);
    }
  }, CAROUSAL_CHANGE_INTERVAL_IN_MS);
};

onMounted(() => {
  initiateCarousal();
});
</script>

<style scoped>
.custom-button {
  padding: 14px 32px;
  font-weight: 500;
}
</style>