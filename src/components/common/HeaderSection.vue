<template>
    <div class="container d-flex align-items-center">
        <router-link to="/"><img class="me-2" src="../../assets/img/logo-belif-removebg-preview.png" alt="Logo Belif" style="width: 60px; height: 60px;"></router-link>

        <h1 class="logo me-auto"><router-link to="/" style="text-decoration: none;">Belif</router-link></h1>

        <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
                <li><router-link class="nav-link" to="/" style="text-decoration: none;">Beranda</router-link></li>
                <li><router-link class="nav-link" to="/tentangkami" style="text-decoration: none;">Tentang Kami</router-link></li>
                <li><router-link class="nav-link" to="/a" style="text-decoration: none;">Layanan</router-link></li>
                <li><router-link class="nav-link" to="/literasi" style="text-decoration: none;">Literasi</router-link></li>
                <li><router-link class="nav-link" to="/c" style="text-decoration: none;">Tim Psikolog</router-link></li>
            </ul>
        </nav>

        <a href="#" class="appointment-btn scrollto" style="text-decoration: none;"><span class="d-none d-md-inline">Masuk</span></a>

    </div>
</template>

<script>
export default {
    name: "HeaderSection"
}
</script>