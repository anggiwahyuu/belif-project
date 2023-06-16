<template>
    <div class="container d-flex align-items-center">
        <router-link to="/"><img class="me-2" src="../../assets/img/logo-belif-removebg-preview.png" alt="Logo Belif" style="width: 60px; height: 60px;"></router-link>

        <h1 class="logo me-auto"><router-link to="/" style="text-decoration: none;">Belif</router-link></h1>

        <div class="d-none d-lg-flex align-items-center">
            <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                    <li><router-link class="nav-link" to="/" style="text-decoration: none;">Beranda</router-link></li>
                    <li><router-link class="nav-link" to="/tentangkami" style="text-decoration: none;">Tentang Kami</router-link></li>
                    <li class="dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style="text-decoration: none;">Layanan</a>
                        <ul class="dropdown-menu">
                            <li><a @click="goToRekomendasi()" class="dropdown-item" style="text-decoration: none;">Screening Test</a></li>
                            <li class="dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style="text-decoration: none;">Konsultasi</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" @click="goToLayanan()" style="text-decoration: none; cursor: pointer;">Konseling Remaja</a></li>
                                    <li><router-link to="/layanan/parenting" class="dropdown-item" style="text-decoration: none;">Konseling Orang Tua</router-link></li>
                                </ul>
                            </li>
                            <li><router-link to="/layanan/kerjasama" class="dropdown-item" style="text-decoration: none;">Kerja Sama</router-link></li>
                        </ul>
                    </li>
                    <li><router-link class="nav-link" to="/literasi" style="text-decoration: none;">Literasi</router-link></li>
                    <li><router-link class="nav-link" to="/psikolog" style="text-decoration: none;">Tim Psikolog</router-link></li>
                </ul>
            </nav>
            <router-link to="/login" class="appointment-btn" style="text-decoration: none;">Masuk</router-link>
        </div>

        <div class="d-block d-lg-none">
            <button class="btn-toggle" @click="toggleNavbar()">
                <svg :class="{'d-block': !showNavbar, 'd-none': showNavbar}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 40px; height: 40px;">
                    <path fill-rule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                </svg>
                <svg v-bind:class="{'d-none': !showNavbar, 'd-block': showNavbar}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 40px; height: 40px;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>

    <div class="d-lg-none nav-responsive overflow-hidden" :class="{'max-h-0': !showNavbar, 'max-h-96': showNavbar}">
        <ul style="list-style: none;">
            <li><router-link class="nav-link py-3" to="/" style="text-decoration: none;">Beranda</router-link></li>
            <li><router-link class="nav-link py-3" to="/tentangkami" style="text-decoration: none;">Tentang Kami</router-link></li>
            <li class="dropdown py-3">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style="text-decoration: none;">Layanan</a>
                <ul class="dropdown-menu">
                    <li><a @click="goToRekomendasi()" class="dropdown-item" style="text-decoration: none;">Screening Test</a></li>
                    <li><a @click="goToLayanan()" class="dropdown-item" style="text-decoration: none;">Konseling Remaja</a></li>
                    <li><router-link to="/layanan/parenting" class="dropdown-item" style="text-decoration: none;">Konseling Orang Tua</router-link></li>
                    <!-- <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style="text-decoration: none;">Konsultasi</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" @click="goToLayanan()" style="text-decoration: none; cursor: pointer;">Konseling Remaja</a></li>
                            <li><router-link to="/layanan/parenting" class="dropdown-item" style="text-decoration: none;">Konseling Orang Tua</router-link></li>
                        </ul>
                    </li> -->
                    <li><router-link to="/c" class="dropdown-item" style="text-decoration: none;">Kerja Sama</router-link></li>
                </ul>
            </li>
            <li><router-link class="nav-link py-3" to="/literasi" style="text-decoration: none;">Literasi</router-link></li>
            <li><router-link class="nav-link py-3" to="/psikolog" style="text-decoration: none;">Tim Psikolog</router-link></li>
        </ul>
        <div class="px-5">
            <router-link to="/login" style="text-decoration: none; color: white;">
                <button class="btn-login-responsive">Masuk</button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.btn-toggle {
    border: none;
    border-radius: 15px;
    transition: 0.2s;
    background: none;
}

.max-h-0 {
    max-height: 0;
}

.max-h-96 {
    max-height: 24rem;
}

.nav-responsive {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    background: rgb(249 250 251);
    width: 100%;
}

.nav-responsive ul li:hover {
    background:rgb(243 244 246);
}

.btn-login-responsive {
    background: #1977cc;
    color: #fff;
    border-radius: 50px;
    width: 100%;
    border: none;
}
</style>

<script>
export default {
    name: "HeaderSection",
    data() {
        return {
            showNavbar: false,
        }
    },
    methods: {
        toggleNavbar() {
            this.showNavbar = !this.showNavbar
        },
        goToRekomendasi() {
            this.$router.push({name: "home", hash: "#rekomendasi"})
        },
        goToLayanan() {
            this.$router.push({name: "home", hash: "#layanan"})
        }
    }
}
</script>