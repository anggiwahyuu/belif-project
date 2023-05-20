<template>
  <header id="header">
    <header-section/>
  </header>

  <hero-section/>

  <main id="main">
    <why-us-section/>
    <about-section/>
    <services-section/>
    <appointment-section/>
    <rekomendasi-section/>
    <psikolog-section/>
    <f-a-q-section/>
  </main>

  <footer id="footer">
    <footer-section/>
  </footer>

  <!-- <div id="preloader"></div> -->
  <!-- <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a> -->
</template>

<script>
// @ is an alias to /src
import HeaderSection from "@/components/HeaderSection.vue"
import HeroSection from "@/components/HeroSection.vue"
import WhyUsSection from "@/components/WhyUsSection.vue"
import AboutSection from "@/components/AboutSection.vue"
import ServicesSection from "@/components/ServicesSection.vue"
import AppointmentSection from "@/components/AppointmentSection.vue"
import RekomendasiSection from "@/components/RekomendasiSection.vue"
import PsikologSection from "@/components/PsikologSection.vue"
import FAQSection from "@/components/FAQSection.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
  name: 'HomeView',
  components: {
    HeaderSection,
    HeroSection,
    WhyUsSection,
    AboutSection,
    ServicesSection,
    AppointmentSection, 
    RekomendasiSection,
    PsikologSection,
    FAQSection, 
    FooterSection
  }
}
</script>
