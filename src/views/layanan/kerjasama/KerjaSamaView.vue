<template>
    <header id="header">
        <header-section/>
    </header>

    <main id="main">
        <belif-company-section/>
        <permasalahan-mental-section/>
        <jenis-kolaborasi-section/>
    </main>

    <footer id="footer">
        <footer-section/>
    </footer>
</template>

<script>
import HeaderSection from '@/components/common/HeaderSection.vue'
import BelifCompanySection from '@/components/layanan/kerjasama/BelifCompanySection.vue'
import PermasalahanMentalSection from '@/components/layanan/kerjasama/PermasalahanMentalSection.vue'
import JenisKolaborasiSection from '@/components/layanan/kerjasama/JenisKolaborasiSection.vue'
import FooterSection from '@/components/common/FooterSection.vue'

export default {
    name: "KerjaSamaView",
    components: {
        HeaderSection,
        BelifCompanySection,
        PermasalahanMentalSection,
        JenisKolaborasiSection,
        FooterSection
    }
}
</script>