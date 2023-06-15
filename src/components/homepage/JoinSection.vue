<template>
    <section id="join" class="join section-bg">
      <div class="container">
        <div class="d-lg-flex d-block text-black">
          <div class="left-content d-flex flex-column justify-content-center">
            <h3 class="fw-bold mb-5 fs-2" style="color: #2c4964;">Temukan Dukungan, Pengertian, dan Pertemanan di Dalam Komunitas Kami yang Penuh Kasih Sayang Ini!!!</h3>
            <div class="text-center text-lg-start">
              <p class="more-btn" @click="joinDiscord()" style="text-decoration: none; cursor: pointer;">Bergabunglah Dengan Komunitas Belif <i class="bx bx-chevron-right"></i></p>
            </div>
          </div>
          <div class="right-content d-lg-flex flex-column justify-content-center mt-lg-0 mt-4">
            <img src="../../assets/img/komunitas.jpg" alt="Image Komunitas" style="width: 100%;">
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.left-content {
  width: 100%;
}

.right-content {
  width: 100%;
}

.right-content img {
  height: 70%;
  border-radius: 15px;
}
</style>

<script>
export default {
    name: "JoinSection",
    methods: {
      joinDiscord() {
        window.open("https://discord.gg/FM9K9kSN", "_blank")
      }
    }
}
</script>