<template>
    <div id="hero2">
        <div class="container d-flex">
            <div class="left-hero d-flex flex-column justify-content-center">
                <h2 class="fs-2">{{ textHero }}</h2>
            </div>
            <div class="right-hero d-flex justify-content-center">
                <img src="@/assets/img/workshop.png" alt="Image Hero" loading="lazy">
            </div>
        </div>
    </div>
</template>

<style scoped>
.left-hero {
    width: 50%;
}

.right-hero {
    width: 50%;
}
</style>

<script>
export default {
    name: "HeroSection",
    data() {
        return {
            textHero: "Ingin Belajar Bareng Tentang Diri Sendiri, Pasangan, dan Anak? Temukan Jawabannya Disini!!!"
        }
    }
}
</script>