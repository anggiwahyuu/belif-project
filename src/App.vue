<template>
  <router-view/>
</template>

<style>
@import url("assets/css/style.css");
@import url("assets/vendor/fontawesome-free/css/all.min.css");
@import url("assets/vendor/animate.css/animate.min.css");
@import url("assets/vendor/bootstrap/css/bootstrap.min.css");
@import url("assets/vendor/bootstrap-icons/bootstrap-icons.css");
@import url("assets/vendor/boxicons/css/boxicons.min.css");
@import url("assets/vendor/glightbox/css/glightbox.min.css");
@import url("assets/vendor/remixicon/remixicon.css");
@import url("assets/vendor/swiper/swiper-bundle.min.css");
</style>

<script>
export default {
  setup() {
    const pureCounter = document.createElement("script");
    pureCounter.setAttribute("src", "assets/vendor/purecounter/purecounter_vanilla.js");
    document.head.appendChild(pureCounter);

    const bootstrapBundle = document.createElement("script");
    bootstrapBundle.setAttribute("src", "assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
    document.head.appendChild(bootstrapBundle);

    const glightBox = document.createElement("script");
    glightBox.setAttribute("src", "assets/vendor/glightbox/js/glightbox.min.js");
    document.head.appendChild(glightBox);

    const swiper = document.createElement("script");
    swiper.setAttribute("src", "assets/vendor/swiper/swiper-bundle.min.js");
    document.head.appendChild(swiper);

    const validatePHP = document.createElement("script");
    validatePHP.setAttribute("src", "assets/vendor/php-email-form/validate.js");
    document.head.appendChild(validatePHP);

    const mainJs = document.createElement('script');
    mainJs.setAttribute("src", "assets/js/main");
    document.head.appendChild(mainJs);

    const fontAwesome = document.createElement("script");
    fontAwesome.setAttribute("src", "https://kit.fontawesome.com/1f7b6bd2fb.js");
    document.head.appendChild(fontAwesome);

    const sweetAlert = document.createElement("script");
    sweetAlert.setAttribute("src", "sweetalert2.all.min.js");
    document.head.appendChild(sweetAlert);
  }
}
</script>