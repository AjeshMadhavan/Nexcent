<template>
  <div class="flex flex-col gap-4 items-center">
    <div class="text-center flex flex-col gap-2">
      <h2 class="text-headline-2 text-d-grey">{{ clientsSection.title }}</h2>
      <p class="text-body-2 text-grey">{{ clientsSection.description }}</p>
    </div>
    <div
      class="overflow-hidden min-w-full px-3 xl:px-0 xl:mx-auto xl:min-w-288"
    >
      <div
        class="flex items-center justify-center flex-wrap gap-5 py-6.25 min-w-full sm:justify-between md:flex-nowrap lg:gap-16"
      >
        <img
          v-for="client in clientsSection.clients"
          :key="client.image"
          :src="`./assets/Company/${client.image}.svg`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { clientsSection } from "../data/uiData.json";
</script>