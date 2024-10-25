<template>
  <div class="flex flex-col gap-4 items-center">
    <div class="text-center flex flex-col gap-2">
      <h2 class="text-headline-2 text-d-grey">{{ clientsSection.title }}</h2>
      <p class="text-body-2 text-grey">{{ clientsSection.description }}</p>
    </div>
    <div
      class="mx-2.5 overflow-hidden md:min-w-150 md:mx-auto lg:min-w-200 xl:min-w-288"
    >
      <div
        class="flex items-center justify-center flex-wrap gap-5 py-6.25 min-w-full md:gap-16 md:flex-nowrap"
      >
        <img
          v-for="client in clientsSection.clients"
          :key="client.image"
          :src="`/src/assets/Company/${client.image}.svg`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { clientsSection } from "../data/uiData.json";
</script>