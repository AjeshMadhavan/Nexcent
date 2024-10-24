<template>
  <button class="button button--primary button--normal">
    <span class="block body-1">Label</span>
  </button>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";

import { ButtonSizes, ButtonVariants } from "../Constants";

type Props = {
  variant?: string;
  size?: string;
};

const props = withDefaults(defineProps<Props>(), {
  variant: ButtonVariants.PRIMARY,
  size: ButtonSizes.NORMAL,
});
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;

  &--primary {
    background-color: #4caf4f;
    color: white;
    border-radius: 4px;
  }

  &--normal {
    padding: 16px 32px;
  }
}
</style>
