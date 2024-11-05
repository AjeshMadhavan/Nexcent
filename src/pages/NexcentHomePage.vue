<template>
  <div :class="['relative overflow-hidden', { 'h-lvh': isMenuVisible }]">
    <div
      class="absolute top-19 w-full h-full bg-white z-20 transition-all duration-700 md:hidden"
      :style="{ right: isMenuVisible ? POSITION_AFTER : POSITION_BEFORE }"
    >
      <mobile-menu @click="handleLinkClick" />
    </div>
    <header-section
      @menu-click="handleMenuClick"
      :is-menu-visible="isMenuVisible"
    />
    <div class="flex flex-col gap-10">
      <div class="bg-silver px-4 md:px-5 lg:px-10 xl:px-0">
        <hero-banner />
      </div>
      <client-section class="px-3 md:px-5 lg:px-10 xl:px-0" />
      <community-container class="px-3 md:px-5 lg:px-10 xl:px-0" />
    </div>
    <div class="pt-8 flex flex-col gap-y-12">
      <custom-container
        :title="pixelGradeSection.title"
        :description="pixelGradeSection.description"
        :button-text="pixelGradeSection.buttonText"
        :image="MobileLogin"
      />
      <achievements />
      <custom-container
        :title="footerDesignSection.title"
        :description="footerDesignSection.description"
        :button-text="footerDesignSection.buttonText"
        :image="MobileLoginPanel"
      />
      <div class="bg-silver">
        <testimonial-container />
      </div>
      <div class="pb-43.65">
        <community-updates />
      </div>
    </div>
    <footer-container />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import HeaderSection from "../containers/HeaderSection.vue";
import HeroBanner from "../containers/HeroBanner.vue";
import ClientSection from "../containers/ClientSection.vue";
import CommunityContainer from "../containers/CommunityContainer.vue";
import CustomContainer from "../containers/CustomContainer.vue";
import Achievements from "../containers/Achievements.vue";
import TestimonialContainer from "../containers/TestimonialContainer.vue";
import CommunityUpdates from "../containers/CommunityUpdates.vue";
import FooterContainer from "../containers/FooterContainer.vue";
import MobileMenu from "../containers/MobileMenu.vue";

import MobileLogin from "../assets/MobileLogin.svg";
import MobileLoginPanel from "../assets/MobileLoginPanel.svg";
import { pixelGradeSection, footerDesignSection } from "../data/uiData.json";

//constants
const POSITION_BEFORE = "-100%";
const POSITION_AFTER = "0%";

const isMenuVisible = ref<boolean>(false);

const handleMenuClick = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

const handleLinkClick = () => {
  isMenuVisible.value = false;
};
</script>
