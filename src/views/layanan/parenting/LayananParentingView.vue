<template>
    <header id="header">
        <header-section/>
    </header>

    <hero-section/>

    <main id="main">
        <kebersamaan-section/>
        <penawaran-section id="penawaran"/>
    </main>

    <footer id="footer">
        <footer-section/>
    </footer>
</template>

<script>
import HeaderSection from '@/components/common/HeaderSection.vue'
import HeroSection from '@/components/layanan/parenting/HeroSection.vue'
import KebersamaanSection from '@/components/layanan/parenting/KebersamaanSection.vue'
import PenawaranSection from '@/components/layanan/parenting/PenawaranSection.vue'
import FooterSection from '@/components/common/FooterSection.vue'

export default {
    name: "LayananParentingView",
    components: {
        HeaderSection,
        HeroSection,
        KebersamaanSection,
        PenawaranSection,
        FooterSection
    }
}
</script>