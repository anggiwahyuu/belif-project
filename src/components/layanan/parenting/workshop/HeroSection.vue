<template>
    <div id="hero2">
        <div class="container d-xl-flex">
            <div class="left-hero d-flex flex-column justify-content-center">
                <h2 class="fs-2 text-xl-start text-center mt-xl-0 mt-3">{{ textHero }}</h2>
            </div>
            <div class="right-hero d-flex justify-content-center">
                <img src="@/assets/img/workshop.png" style="width: 100%;" alt="Image Hero" loading="lazy">
            </div>
        </div>
    </div>
</template>

<style scoped>
.left-hero {
    width: 100%;
}

.right-hero {
    width: 100%;
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