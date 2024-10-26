<template>
  <div
    class="bg-silver flex items-center justify-between py-5.5 px-4 md:px-8 lg:px-20 xl:pr-30 xl:pl-26.25"
  >
    <img :src="Nexcent" :alt="LOGO_ALT_TEXT" />
    <div class="hidden md:flex md:items-center md:gap-2 lg:gap-6 xl:gap-12.5">
      <a
        v-for="link in header.navbarLinks"
        :key="link"
        href="#"
        class="text-body-2 font-medium"
      >
        {{ link }}
      </a>
    </div>
    <div class="flex items-center gap-3.5">
      <div>
        <Button
          :label="header.buttonTexts.login"
          :variant="ButtonVariants.Tertiary"
          class="p-2 text-body-3 font-medium w-fit login-button md:py-2.5 md:px-5"
        />
      </div>
      <div>
        <Button
          :label="header.buttonTexts.signup"
          class="p-2 text-body-3 font-medium w-fit signup-button md:py-2.5 md:px-5"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Nexcent from "../assets/logo/Nexcent.svg";
import { header } from "../data/uiData.json";
import Button from "../components/Button.vue";
import { ButtonVariants } from "../Constants";

const LOGO_ALT_TEXT = "Nexcent Logo";
</script>

<style lang="scss" scoped>
.login-button {
  background-color: transparent;
}

.signup-button {
  border-radius: 6px;
}
</style>
