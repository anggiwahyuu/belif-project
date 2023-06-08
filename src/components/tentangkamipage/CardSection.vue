<template>
    <section id="card">
        <div class="container d-flex text-white">
            <div class="left-content">
                <img src="../../assets/img/laptop.png" alt="Image Laptop" style="width: 90%;" loading="lazy">
            </div>
            <div class="right-content d-flex flex-column justify-content-center">
                <h3 class="fw-bold mb-5 fs-2">Yuk, #JanganTakutBertanya tentang permasalahanmu dengan psikolog!</h3>
                <div class="d-flex">
                    <img src="../../assets/img/logo-belif-removebg-preview.png" alt="Logo Belif" style="width: 60px; height: 60px;">
                    <div class="justify-content-center ms-3">
                        <h4 class="fs-3 fw-semibold">Belif</h4>
                        <div class="star">
                            <i class="bi-star-fill"></i><i class="bi-star-fill"></i><i class="bi-star-fill"></i><i class="bi-star-fill"></i><i class="bi-star-fill"></i>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <router-link to="" class="more-btn" style="text-decoration: none;">Jadwalkan Sesi Konseling Online Pertamamu <i class="bx bx-chevron-right"></i></router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#card {
    background: #1977cc;
}

.left-content {
    width: 50%;
}

.right-content {
    width: 50%;
}

.star {
    margin-top: -10px;
    color: rgb(255, 187, 0);
}

.more-btn {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 30px 8px 30px;
  color: #fff;
  border-radius: 50px;
  transition: all ease-in-out 0.4s;
}

.more-btn i {
  font-size: 14px;
}

.more-btn:hover {
  color: #1977cc;
  background: #fff;
}
</style>

<script>
export default {
    name: "CardSection"
}
</script>