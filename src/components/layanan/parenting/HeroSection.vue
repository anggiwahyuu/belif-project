<template>
    <div id="hero2">
        <div class="container d-lg-flex align-items-center d-block">
            <div class="left-hero py-lg-0 py-3 text-lg-start text-center">
                <h2 class="fs-2">Temukan keajaiban menjadi orang tua yang luar biasa</h2>
                <router-link :to="{name: 'layanan-parenting', hash: '#penawaran'}" class="more-btn mt-lg-5 mt-3" style="text-decoration: none;">Penawaran menarik</router-link>
            </div>
            <div class="right-hero">
                <img src="@/assets/img/parenting.png" style="width: 100%;" alt="Image Hero" loading="lazy">
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

.more-btn {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 20px 8px 20px;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
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
    name: "HeroSection"
}
</script>