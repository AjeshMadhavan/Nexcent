<template>
  <div>
    <div class="bg-silver">
      <h1
        class="w-full mx-auto py-8 font-inter text-4xl text-center md:text-6xl lg:text-headline-1 lg:w-221.75"
      >
        {{ title }}
      </h1>
      <div class="flex justify-center items-center pb-8">
        <div class="w-fit">
          <Button
            :label="buttonText"
            image="./assets/DemoButtonArrow.svg"
            class="custom-button"
          />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-between gap-y-6 bg-neutral-black py-16 px-10 lg:flex-row lg:w-auto xl:px-41.25"
    >
      <div class="flex flex-col justify-between gap-y-10 w-fit">
        <img
          class="block"
          src="../assets/FooterLogo.svg"
          alt="footer-main-logo"
        />
        <div class="flex flex-col gap-y-2">
          <span
            v-for="(copyright, index) in copyrights"
            :key="`${copyright}${index}`"
            class="block text-body-3 text-silver"
          >
            {{ copyright }}
          </span>
        </div>
        <div class="flex gap-x-4">
          <div
            v-for="(icon, index) in socialMediaIcons"
            class="w-fit"
            :key="`${icon}${index}`"
          >
            <Button :image="`./assets/${icon}.svg`" class="icon" />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col justify-between gap-x-7.5 gap-y-10 text-white font-inter md:flex-row lg:justify-normal"
      >
        <div
          class="flex flex-col justify-between gap-x-7.5 gap-y-10 w-full sm:flex-row md:justify-normal lg:w-fit"
        >
          <div
            class="w-full lg:w-40"
            v-for="(navLinkItem, index) in footerNavItems.navLinks"
            :key="`${navLinkItem.title}${index}`"
          >
            <h2 class="text-headline-4">{{ navLinkItem.title }}</h2>
            <div class="flex flex-col gap-y-3 text-body-3 mt-6">
              <div
                v-for="(link, index) in navLinkItem.links"
                :key="`${link}${index}`"
              >
                {{ link }}
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-56.25">
          <h2 class="text-headline-4">{{ footerNavItems.inputItem.title }}</h2>
          <div class="w-full mt-6 sm:w-3/5 lg:w-full">
            <div
              class="flex items-center gap-x-1 w-full bg-grey pt-2.25 pr-2.75 pb-2.75 pl-3 rounded-lg"
            >
              <input
                :placeholder="footerNavItems.inputItem.placeholder"
                class="block w-full outline-none bg-transparent font-inter text-body-3 placeholder:text-bigfish placeholder:text-body-3"
                type="text"
              />
              <img src="../assets/Send.svg" alt="footer-send-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";
import uiData from "../data/uiData.json";

const { buttonText, title } = uiData.demoSection;
const { copyrights, footerNavItems, socialMediaIcons } = uiData.footerSection;
</script>

<style lang="scss" scoped>
.custom-button {
  padding: 14px 32px;
}

.icon {
  background-color: transparent;
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
}
</style>