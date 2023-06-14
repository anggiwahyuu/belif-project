<template>
    <div id="hero2">
        <div class="container d-flex">
            <div class="left-hero d-flex flex-column justify-content-center">
                <h2 class="fs-2">Temukan keajaiban menjadi orang tua yang luar biasa</h2>
                <router-link :to="{name: 'layanan-parenting', hash: '#penawaran'}" class="more-btn mt-5" style="text-decoration: none;">Penawaran menarik</router-link>
            </div>
            <div class="right-hero">
                <img src="@/assets/img/parenting.png" alt="Image Hero" loading="lazy">
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

.more-btn {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 30px 8px 30px;
  width: 32%;
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