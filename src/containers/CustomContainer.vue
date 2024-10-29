<template>
  <div class="mx-6 md:mx-8 lg:mx-13 xl:mx-auto xl:max-w-360">
    <div
      class="w-full flex flex-col gap-5 py-2.5 relative md:py-6 lg:py-10 xl:py-13 xl:px-36 xl:bg-transparent xl:gap-0 xl:flex-row xl:items-center xl:justify-between"
    >
      <img
        :src="props.image"
        class="md:absolute md:bg-white md:opacity-50 md:right-0 md:top-0 md:-z-50 xl:static xl:opacity-100"
      />
      <div
        class="flex flex-col items-start gap-8 md:w-125 lg:w-150.25 xl:w-165.25"
      >
        <div class="flex flex-col gap-4 xl:w-150.25">
          <h2 class="text-headline-2 text-d-grey">{{ props.title }}</h2>
          <p class="text-body-3 text-grey">{{ props.description }}</p>
        </div>
        <div>
          <Button
            :label="props.buttonText"
            class="text-body-2 font-medium px-8 py-3.5 w-fit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";

interface Props {
  buttonText: string;
  description: string;
  image: string;
  title: string;
}

const props = defineProps<Props>();
</script>