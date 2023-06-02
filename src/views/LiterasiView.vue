<template>
    <header id="header">
        <header-section/>
    </header>
    <main id="main">
        <content-section/>
    </main>
    <footer id="footer">
        <footer-section/>
    </footer>
</template>

<script>
import HeaderSection from "@/components/common/HeaderSection.vue"
import ContentSection from "@/components/literasi/ContentSection.vue"
import FooterSection from "@/components/common/FooterSection.vue"

export default {
    name: "LiterasiView",
    components: {
        HeaderSection,
        ContentSection,
        FooterSection
    }
}
</script>