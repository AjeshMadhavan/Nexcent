<template>
  <div class="bg-silver">
    <div class="xl:w-360 xl:mx-auto">
      <div
        class="flex flex-col items-center justify-between gap-5 py-8 px-6 md:px-8 lg:flex-row lg:px-13 xl:px-36 xl:py-16"
      >
        <div
          class="flex flex-col gap-2 w-full lg:w-1/2 xl:w-auto xl:min-w-135 xl:items-start"
        >
          <h1 class="text-headline-2 text-d-grey">
            {{ localBusinessSection.title.text }}
            <span class="block text-devil-grass">
              {{ localBusinessSection.title.highlight }}
            </span>
          </h1>
          <span class="text-body-2 text-wood-smoke">
            {{ localBusinessSection.description }}
          </span>
        </div>
        <div
          class="flex flex-wrap justify-start gap-x-7.5 gap-y-10 w-fit lg:justify-end xl:w-auto"
        >
          <div
            v-for="details in localBusinessSection.businessDetails"
            :key="details.image"
            class="flex gap-4 items-center w-56 xl:w-63.75"
          >
            <img :src="`/src/assets/${details.image}.svg`" />
            <div>
              <h3 class="text-headline-3 font-bold text-d-grey">
                {{ details.title }}
              </h3>
              <p class="text-grey text-body-2">{{ details.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { localBusinessSection } from "../data/uiData.json";
</script>