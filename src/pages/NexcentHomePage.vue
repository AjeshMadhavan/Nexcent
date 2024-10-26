<template>
  <div>
    <header-section />
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
      <testimonial-container />
      <div class="pb-43.65">
        <community-updates />
      </div>
    </div>
    <footer-container />
  </div>
</template>

<script setup lang="ts">
import HeaderSection from "../containers/HeaderSection.vue";
import HeroBanner from "../containers/HeroBanner.vue";
import ClientSection from "../containers/ClientSection.vue";
import CommunityContainer from "../containers/CommunityContainer.vue";
import CustomContainer from "../containers/CustomContainer.vue";
import Achievements from "../containers/Achievements.vue";
import { pixelGradeSection, footerDesignSection } from "../data/uiData.json";
import MobileLogin from "../assets/MobileLogin.svg";
import MobileLoginPanel from "../assets/MobileLoginPanel.svg";
import TestimonialContainer from "../containers/TestimonialContainer.vue";
import CommunityUpdates from "../containers/CommunityUpdates.vue";
import FooterContainer from "../containers/FooterContainer.vue";
</script>
