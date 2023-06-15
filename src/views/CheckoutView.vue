<template>
    <header id="header">
        <header-section/>
    </header>

    <main id="main">
        <content-checkout-section/>
    </main>

    <footer id="footer">
        <footer-section/>
    </footer>
</template>

<style scoped>

</style>

<script>
import HeaderSection from '@/components/common/HeaderSection.vue'
import ContentCheckoutSection from "@/components/checkout/ContentSection.vue"
import FooterSection from '@/components/common/FooterSection.vue'
export default {
    name: "CheckoutView",
    components: {
        HeaderSection,
        ContentCheckoutSection,
        FooterSection
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>