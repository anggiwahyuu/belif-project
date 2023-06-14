<template>
    <header id="header">
        <header-section/>
    </header>

    <hero-section/>

    <main id="main">
        <workshop-section/>
    </main>

    <footer id="footer">
        <footer-section/>
    </footer>
</template>

<script>
import HeaderSection from '@/components/common/HeaderSection.vue'
import HeroSection from '@/components/layanan/parenting/workshop/HeroSection.vue'
import WorkshopSection from '@/components/layanan/parenting/workshop/WorkshopSection.vue'
import FooterSection from '@/components/common/FooterSection.vue'

export default {
    name: "WorkshopParentingView",
    components: {
        HeaderSection,
        HeroSection,
        WorkshopSection,
        FooterSection
    }
}
</script>