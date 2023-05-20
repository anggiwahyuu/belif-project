<template>
    <section id="rekomendasi" class="rekomendasi">
      <div class="container">

        <div class="section-title">
          <h2>Rekomendasi</h2>
        </div>

        <div class="container p-5 rounded-5" style="background: #1977cc;">
          <div class="text-white d-flex">
            <div class="left-content">
              <h3 class="fw-bold mb-5 fs-1">Rekomendasi Produk Sesuai Kebutuhan Anda!</h3>
              <p class="mb-5 fs-5">Masih bingung untuk memilih produk? Belif siap membantu memilih produk yang paling tepat khusus untuk Anda. Cukup dengan menjawab kuisioner saja!</p>
              <div>
                <a href="#" class="more-btn" style="text-decoration: none;">Coba Sekarang <i class="bx bx-chevron-right"></i></a>
              </div>
            </div>
            <div class="right-content d-flex justify-content-center">
              <img src="../assets/img/belif1.jpg" class="rounded-circle ms-5" width="55%" alt="Belif">
            </div>
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
</style>

<script>
export default {
    name: "RekomendasiSection"
}
</script>