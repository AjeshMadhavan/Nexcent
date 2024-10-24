<template>
  <div
    class="flex items-center justify-between py-5.5 px-4 md:px-8 lg:px-20 xl:pr-30 xl:pl-26.25"
  >
    <img :src="Nexcent" />
    <div class="hidden md:flex md:items-center md:gap-2 lg:gap-6 xl:gap-12.5">
      <a
        href="#"
        v-for="link in header.navbarLinks"
        :key="link"
        class="text-body-2 font-medium"
      >
        {{ link }}
      </a>
    </div>
    <div class="flex items-center gap-3.5">
      <button
        class="p-2 md:py-2.5 md:px-5 text-brand-primary text-body-3 font-medium"
      >
        Login
      </button>
      <button
        class="p-2 md:py-2.5 md:px-5 bg-brand-primary rounded-md text-white text-body-3 font-medium"
      >
        Sign up
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { header } from "../data/uiData.json";
import Nexcent from "../assets/logo/Nexcent.svg";
</script>