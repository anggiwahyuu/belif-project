<template>
    <div id="hero2">
        <div class="container d-flex py-4">
            <div class="left-hero d-flex flex-column justify-content-center">
                <h2 class="fs-2">{{ textHero }}</h2>
            </div>
            <div class="right-hero d-flex justify-content-center">
                <img src="@/assets/img/modul.png" alt="Image Hero" loading="lazy">
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
            textHero: "Dapatkan Berbagai Modul Buku Kecemasan, Kebahagiaan, dan Keseimbangan Emosional Kemudian Diskusikan Pada Ahlinya."
        }
    }
}
</script>