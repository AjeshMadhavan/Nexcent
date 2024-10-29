<template>
  <div
    class="py-8 px-6 flex gap-5 text-center bg-silver md:px-8 lg:text-left lg:px-13 xl:gap-19.5 xl:px-36 xl:max-w-360 xl:mx-auto"
  >
    <img
      class="hidden w-81.5 aspect-square rounded-lg object-cover xl:block"
      src="../assets/Tesla.jpeg"
      alt="testimony image"
    />
    <div class="font-inter flex flex-col h-full overflow-hidden">
      <p class="text-body-2 text-grey text-left md:text-center lg:text-left">
        {{ testimony }}
      </p>
      <span class="block mt-4 text-devil-grass text-headline-4">
        {{ name }}
      </span>
      <span class="block mt-2 text-body-2 text-l-grey">{{ organisation }}</span>
      <div
        class="relative block items-center justify-between mt-8 gap-8 h-full md:flex md:flex-wrap"
      >
        <div class="icons-wrapper overflow-auto">
          <div class="flex items-center gap-10.25">
            <img
              v-for="customer in customers"
              :key="customer.image"
              class="block w-12 aspect-square"
              :src="`./assets/${customer.image}.svg`"
              alt="customer-logo"
            />
          </div>
        </div>
        <div class="w-fit h-full mt-2 bg-silver md:mt-0">
          <Button
            :variant="ButtonVariants.Tertiary"
            :label="meetLink"
            image="./assets/RightArrow.svg"
            class="custom-button"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";
import uiData from "../data/uiData.json";
import { ButtonVariants } from "../Constants";

const { customers, meetLink, name, organisation, testimony } =
  uiData.testimonySection;
</script>

<style scoped>
.custom-button {
  padding: 8px 0px;
  font-family: Inter;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  background-color: transparent;
  white-space: nowrap;
  overflow: visible;
}

.icons-wrapper::-webkit-scrollbar {
  display: none;
}
</style>