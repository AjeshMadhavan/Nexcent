<template>
  <div class="bg-white mx-6 font-inter md:mx-8 lg:mx-13 xl:mx-auto xl:max-w-360">
    <div class="flex flex-col items-center gap-4">
      <div class="flex flex-col items-center gap-2 max-w-277.5">
        <h2 class="text-headline-2 text-d-grey text-center">
          {{ communityUpdates.title }}
        </h2>
        <p class="text-body-2 text-center text-grey">
          {{ communityUpdates.description }}
        </p>
      </div>
      <div
        class="flex justify-center items-center flex-wrap gap-x-6 gap-y-36 md:gap-y-28"
      >
        <div
          class="relative w-fit"
          v-for="card in communityUpdates.cards"
          :key="card.image"
        >
          <img
            :src="`./assets/${card.image}.svg`"
            :alt="COMMUNITY_CARD_IMG_ALT"
          />
          <div
            class="bg-silver rounded-lg p-4 flex flex-col items-center gap-4 absolute bottom-2 left-6.375 right-6.375 translate-y-1/2 shadow-xl"
          >
            <h4 class="text-headline-4 text-grey text-center">
              {{ card.description }}
            </h4>
            <Button
              :variant="ButtonVariants.Tertiary"
              :image="RightArrow"
              :label="READMORE_BUTTON_LABEL"
              class="custom-button text-headline-4 py-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RightArrow from "../assets/RightArrow.svg";
import Button from "../components/Button.vue";
import { ButtonVariants } from "../Constants";
import { communityUpdates } from "../data/uiData.json";

const COMMUNITY_CARD_IMG_ALT = "community image";
const READMORE_BUTTON_LABEL = "Readmore";
</script>

<style scoped lang="scss">
.custom-button {
  background-color: transparent;
}
</style>