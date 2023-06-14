<template>
    <header id="header">
        <header-section/>
    </header>

    <hero-section/>

    <main id="main">
        <modul-section/>
    </main>
    <footer id="footer">
        <footer-section/>
    </footer>
</template>

<script>
import HeaderSection from '@/components/common/HeaderSection.vue'
import HeroSection from '@/components/layanan/parenting/modul/HeroSection.vue'
import ModulSection from '@/components/layanan/parenting/modul/ModulSection.vue'
import FooterSection from '@/components/common/FooterSection.vue'
export default {
    name: "ModulParentingView",
    components: {
        HeaderSection,
        HeroSection,
        ModulSection,
        FooterSection
    }
}
</script>