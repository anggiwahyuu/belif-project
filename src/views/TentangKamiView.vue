<template>
    <header id="header">
        <header-section/>
    </header>

    <hero-section/>

    <main id="main">
        <member-section/>
        <visi-misi-section/>
    </main>

    <footer id="footer">
        <footer-section/>
    </footer>
</template>

<script>
import HeaderSection from "@/components/common/HeaderSection.vue"
import HeroSection from "@/components/tentangkamipage/HeroSection.vue"
import MemberSection from "@/components/tentangkamipage/MemberSection.vue"
import VisiMisiSection from "@/components/tentangkamipage/VisiMisiSection.vue"
import FooterSection from "@/components/common/FooterSection.vue"

export default {
    name: "TentangKamiView",
    components: {
        HeaderSection,
        HeroSection,
        MemberSection,
        VisiMisiSection,
        FooterSection
    }
}
</script>