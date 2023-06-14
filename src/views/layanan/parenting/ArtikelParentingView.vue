<template>
    <header id="header">
        <header-section/>
    </header>
    
    <hero-section/>

    <main id="main">
        <artikel-section/>
    </main>

    <footer id="footer">
        <footer-section/>
    </footer>
</template>

<script>
import HeaderSection from '@/components/common/HeaderSection.vue';
import HeroSection from "@/components/layanan/parenting/artikel/HeroSection.vue"
import ArtikelSection from '@/components/layanan/parenting/artikel/ArtikelSection.vue';
import FooterSection from '@/components/common/FooterSection.vue';
export default {
    name: "ArtikelParentingView",
    components: {
        HeaderSection,
        HeroSection,
        ArtikelSection,
        FooterSection
    }
}
</script>