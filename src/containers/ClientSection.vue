<template>
  <div class="flex flex-col gap-4 items-center">
    <div class="text-center flex flex-col gap-2">
      <h2 class="text-headline-2 text-d-grey">{{ clientsSection.title }}</h2>
      <p class="text-body-2 text-grey">{{ clientsSection.description }}</p>
    </div>
    <div class="overflow-hidden px-2 md:px-5">
      <div class="py-6.25 w-4/5 mx-auto overflow-hidden xl:w-3/5 2xl:w-2/5">
        <Vue3Marquee :duration="MARQUEE_DURATION">
          <img
            v-for="client in clientsSection.clients"
            :key="client.image"
            :src="client.image"
            :alt="CLIENT_COMPANY_LOGO_ALT_TEXT"
            class="pr-2 md:pr-5 lg:pr-8 xl:pr-10"
          />
          <img
            v-for="client in clientsSection.clients"
            :key="client.image"
            :src="client.image"
            :alt="CLIENT_COMPANY_LOGO_ALT_TEXT"
            class="pr-2 md:pr-5 lg:pr-8 xl:pr-10"
          />
        </Vue3Marquee>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
import { clientsSection } from "../data/uiData.json";

const MARQUEE_DURATION = 3;
const CLIENT_COMPANY_LOGO_ALT_TEXT = "client company logo";
</script>