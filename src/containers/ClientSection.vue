<template>
  <div class="flex flex-col gap-4 items-center">
    <div class="text-center flex flex-col gap-2">
      <h2 class="text-headline-2 text-d-grey">{{ clientsSection.title }}</h2>
      <p class="text-body-2 text-grey">{{ clientsSection.description }}</p>
    </div>
    <div class="max-w-288 mx-auto overflow-hidden">
      <div class="w-full flex animate-marquee">
        <div class="flex items-center gap-34 py-6.25 min-w-full">
          <img
            v-for="client in clientsSection.clients"
            :key="client.image"
            :src="`/src/assets/Company/${client.image}.svg`"
          />
        </div>
        <div class="flex items-center gap-34 py-6.25 min-w-full">
          <img
            v-for="client in clientsSection.clients"
            :key="client.image"
            :src="`/src/assets/Company/${client.image}.svg`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { clientsSection } from "../data/uiData.json";
</script>