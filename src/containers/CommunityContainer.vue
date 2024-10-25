<template>
  <div class="community-section-container">
    <h2
      class="font-inter text-center text-d-grey tracking-tight text-headline-4 mx-auto lg:text-headline-2 lg:w-135.5"
    >
      {{ title }}
    </h2>
    <p class="mt-2 font-inter text-center text-xs sm:text-body-2">
      {{ description }}
    </p>
    <div class="mt-4 py-2.5 px-3 2xl:px-36">
      <div class="w-100 lg:flex lg:justify-around">
        <div
          v-for="communityDetail in communityDetails"
          class="py-6 px-4 shadow-sm flex flex-col items-center gap-4 sm:flex-row lg:w-74.75 lg:gap-0 lg:flex-col"
        >
          <img
            class="block self-start sm:self-center"
            :src="`src/assets/${communityDetail.image}.svg`"
            alt="community-card-image"
          />
          <div>
            <h2
              class="font-inter text-left text-headline-4 text-d-grey sm:text-headline-3 lg:text-center lg:px-3 lg:mt-4"
            >
              {{ communityDetail.title }}
            </h2>
            <p
              class="font-inter text-left text-body-3 text-grey mt-2 lg:mx-2 lg:text-center"
            >
              {{ communityDetail.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiData from "../data/uiData.json";

const { communityDetails, description, title } = UiData.communitySection;
</script>

<style scoped></style>
