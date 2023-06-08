<template>
    <header id="header">
        <header-section/>
    </header>

    <main id="main">
        <tim-psikolog-section/>
        <card-section/>
        <konsultasi-section/>
    </main>

    <footer id="footer">
        <footer-section/>
    </footer>
</template>

<script>
import HeaderSection from "@/components/common/HeaderSection.vue"
import TimPsikologSection from "@/components/psikolog/TimPsikologSection.vue"
import CardSection from "@/components/psikolog/CardSection.vue"
import KonsultasiSection from "@/components/psikolog/KonsultasiSection.vue"
import FooterSection from "@/components/common/FooterSection.vue"

export default {
    name: "TimPsikologView",
    components: {
        HeaderSection,
        TimPsikologSection,
        CardSection,
        KonsultasiSection,
        FooterSection
    }
}
</script>