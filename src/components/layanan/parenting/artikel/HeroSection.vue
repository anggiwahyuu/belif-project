<template>
    <div id="hero2">
        <div class="container d-md-flex d-block">
            <div class="left-hero d-flex flex-column justify-content-center text-md-start text-center">
                <h2 class="fs-2 mt-md-0 mt-3">{{ textHero }}</h2>
            </div>
            <div class="right-hero d-flex justify-content-center">
                <img src="@/assets/img/artikel-parenting.png" style="width: 100%;" alt="Image Hero" loading="lazy">
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

.more-btn:hover {
  color: #1977cc;
  background: #fff;
}
</style>

<script>
export default {
    name: "HeroSection",
    data() {
        return {
            textHero: "Temukan Tips dan Trik Untuk Menghadapi Tantangan dan Menikmati Keajaiban Menjadi Orang Tua"
        }
    }
}
</script>