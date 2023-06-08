<template>
    <section id="join" class="join section-bg">
      <div class="container">
        <div class="d-flex text-black">
          <div class="left-content d-flex flex-column justify-content-center">
            <h3 class="fw-bold mb-5 fs-2" style="color: #2c4964;">Temukan Dukungan, Pengertian, dan Pertemanan di Dalam Komunitas Kami yang Penuh Kasih Sayang Ini!!!</h3>
            <div>
              <router-link to="" class="more-btn" style="text-decoration: none;">Bergabunglah Dengan Komunitas Belif <i class="bx bx-chevron-right"></i></router-link>
            </div>
          </div>
          <div class="right-content d-flex flex-column justify-content-center">
            <img src="../../assets/img/komunitas.jpg" alt="Image Komunitas">
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.left-content {
  width: 50%;
}

.right-content {
  width: 50%;
}

.right-content img {
  height: 70%;
  border-radius: 15px;
}
</style>

<script>
export default {
    name: "JoinSection"
}
</script>