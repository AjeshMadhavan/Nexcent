<template>
  <button
    :class="[
      'button flex gap-2 w-full justify-between',
      getButtonVariant(),
      getButtonSize(),
      { 'flex-row-reverse': isIconOnLeft },
    ]"
  >
    <span class="block button-label">{{ label }}</span>
    <img
      v-if="image"
      class="block button-icon"
      :src="image"
      alt="button-icon"
    />
  </button>
</template>

<script setup lang="ts">
import { computed, withDefaults } from "vue";

import { ButtonDirections, ButtonSizes, ButtonVariants } from "../Constants";

type Props = {
  variant?: string;
  size?: string;
  iconDirection?: string;
  label?: string;
  image?: string;
};

const props = withDefaults(defineProps<Props>(), {
  variant: ButtonVariants.PRIMARY,
  size: ButtonSizes.NORMAL,
  iconDirection: ButtonDirections.RIGHT,
  label: "Label",
});

const isIconOnLeft = computed(
  () => props.iconDirection === ButtonDirections.LEFT
);

const getButtonVariant = () => {
  if (props.variant === ButtonVariants.SECONDARY) {
    return "button--secondary";
  } else if (props.variant === ButtonVariants.TERTIARY) {
    return "button--tertiary";
  }

  return "button--primary";
};

const getButtonSize = () => {
  if (props.variant === ButtonSizes.MEDIUM) {
    return "button--medium";
  } else if (props.variant === ButtonSizes.SMALL) {
    return "button--small";
  }

  return "button--normal";
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-family: Inter;
  cursor: pointer;

  &--primary,
  &--secondary,
  &--tertiary {
    color: #4caf4f;

    &:disabled {
      background-color: #f5f7fa;
      color: #abbed1;

      .button-icon {
        filter: invert(87%) sepia(8%) saturate(691%) hue-rotate(173deg)
          brightness(86%) contrast(89%);
      }
    }
  }

  &--secondary,
  &--tertiary {
    .button-icon {
      filter: invert(63%) sepia(8%) saturate(3314%) hue-rotate(72deg)
        brightness(93%) contrast(77%);
    }
  }

  &--primary {
    background-color: #4caf4f;
    color: white;

    &:focus {
      outline: 2px solid #717171;
    }

    &:active {
      background-color: #388e3b;
    }

    .button-icon {
      filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(23deg)
        brightness(118%) contrast(118%);
    }
  }

  &--secondary {
    outline: 1px solid #4caf4f;

    &:hover,
    &:focus,
    &:active {
      background-color: #f5f7fa;
    }

    &:focus {
      outline: 2px solid #89939e;
    }

    &:active,
    &:disabled {
      outline: 0;
    }
  }

  &--tertiary {
    background-color: white;

    &:hover {
      background-color: #f5f7fa;
    }

    &:focus {
      outline: 2px solid #4d4d4d;
    }

    &:active {
      background-color: #e8f5e9;
      outline: 0;
    }
  }

  &--normal {
    padding: 16px 32px;

    .button-label {
      font-size: 18px;
      line-height: 24px;
    }
  }

  &--medium {
    padding: 14px 32px;

    .button-label {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &--small {
    padding: 8px 24px;

    .button-label {
      font-size: 14px;
      line-height: 16px;
    }
  }
}
</style>
