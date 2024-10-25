<template>
  <div class="relative w-fit font-inter">
    <img :src="props.image" :alt="COMMUNITY_CARD_IMG_ALT" />
    <div
      class="bg-silver rounded-lg p-4 flex flex-col items-center gap-4 absolute bottom-2 left-6.375 right-6.375 translate-y-1/2 shadow-xl"
    >
      <h4 class="text-headline-4 text-grey text-center">
        {{ props.description }}
      </h4>
      <Button
        :variant="ButtonVariants.Tertiary"
        label="Readmore"
        :image="RightArrow"
        class="custom-button text-headline-4 py-2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import RightArrow from "../assets/RightArrow.svg";
import Button from "../components/Button.vue";
import { ButtonVariants } from "../Constants";

interface Props {
  description: string;
  image: string;
}

const props = defineProps<Props>();
const COMMUNITY_CARD_IMG_ALT = "community image";
</script>

<style scoped lang="scss">
.custom-button {
  background-color: transparent;
}
</style>