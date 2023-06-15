<template>
  <header id="header">
    <header-section/>
  </header>

  <hero-section/>

  <main id="main">
    <why-us-section/>
    <about-section/>
    <services-section id="layanan"/>
    <join-section id="komunitas"/>
    <rekomendasi-section id="rekomendasi"/>
    <psikolog-section/>
    <testimoni-section/>
    <f-a-q-section/>
  </main>

  <footer id="footer">
    <footer-section/>
  </footer>
</template>

<script>
// @ is an alias to /src
import HeaderSection from "@/components/common/HeaderSection.vue"
import HeroSection from "@/components/homepage/HeroSection.vue"
import WhyUsSection from "@/components/homepage/WhyUsSection.vue"
import AboutSection from "@/components/homepage/AboutSection.vue"
import ServicesSection from "@/components/homepage/ServicesSection.vue"
import JoinSection from "@/components/homepage/JoinSection.vue"
import RekomendasiSection from "@/components/homepage/RekomendasiSection.vue"
import PsikologSection from "@/components/homepage/PsikologSection.vue"
import TestimoniSection from "@/components/homepage/TestimoniSection.vue"
import FAQSection from "@/components/homepage/FAQSection.vue"
import FooterSection from "@/components/common/FooterSection.vue"

export default {
  name: 'HomeView',
  components: {
    HeaderSection,
    HeroSection,
    WhyUsSection,
    AboutSection,
    ServicesSection,
    JoinSection, 
    RekomendasiSection,
    PsikologSection,
    TestimoniSection,
    FAQSection, 
    FooterSection
  }
}
</script>
