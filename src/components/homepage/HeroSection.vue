<template>
    <section id="hero" class="d-flex align-items-center">
        <div class="container">
            <h1>Temukan Keseimbangan dan Keharmonisan Dalam Hidup Anda Dengan Belif</h1>
            <h2>A Better Life With Belif</h2>
            <button type="button" class="btn btn-get-started" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Jadwalkan Konsultasi
            </button>

            <!-- Modal 1 -->
            <div class="modal fade section-modal" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div id="konseling-online" class="text-center">
                                <h4 class="fw-bold fs-5" style="color: black;">Konseling Online</h4>
                                <p class="loc">via voice/video call</p>
                                <button type="button" @click="goToPsikolog()" class="btn btn-konsultasi rounded-pill">Jadwalkan Konsultasi Online</button>
                            </div>
                            <div class="underline"></div>
                            <div id="konseling-offline" class="text-center">
                                <h4 class="fw-bold fs-5" style="color: black;">Konseling Offline</h4>
                                <p class="loc">di Rumah Belif, Jember, Jawa Timur</p>
                                <button type="button" class="btn btn-konsultasi rounded-pill" data-bs-toggle="modal" data-bs-target="#modalSesiOffline">Jadwalkan Konsultasi Offline</button>
                            </div>
                        </div>
                        <div class="modal-footer"></div>
                    </div>
                </div>
            </div>

            <!-- Modal 2 -->
            <div class="modal fade section-modal" id="modalSesiOffline" tabindex="-1" aria-labelledby="modalSesiOfflineLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-black" id="modalSesiOfflineLabel">Jadwalkan Konsultasi Offline</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex p-3">
                                <div class="left-content">
                                    <div class="d-flex justify-content-center">
                                        <img class="rounded-circle" src="../../assets/img/profile.jpg" alt="Image Modal">
                                    </div>
                                    <h3 class="text-center mt-3 fw-semibold">Hallo</h3>
                                </div>
                                <div class="right-content">
                                    <form method="post">
                                        <label for="nama">Nama Lengkap</label> <br>
                                        <input type="text" name="nama" id="nama" class="rounded-pill" placeholder="Masukkan Nama Lengkap"> <br>

                                        <label for="email">Email</label> <br>
                                        <input type="email" name="email" id="email" class="rounded-pill" placeholder="Masukkan Email"> <br>

                                        <label for="no_telp">Nomor Whatsapp</label> <br>
                                        <input type="number" name="no_telp" id="no_telp" class="rounded-pill" placeholder="Masukkan Nomor Whatsapp"> <br>

                                        <label for="topik">Topik Konseling</label> <br>
                                        <input type="text" name="topik" id="topik" class="rounded-pill" placeholder="Tuliskan Topik Permasalahan Kamu">

                                        <button type="button" class="btn btn-konsultasi rounded-pill mt-4" style="width: 90%;">Selesai</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer"></div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.btn-konsultasi {
    border: none;
    background: #1977cc;
    color: white;
    padding: 7px 30px;
    font-size: 13px;
}

.btn-konsultasi:hover {
    background: #3291e6;
    color: white;
}

.loc {
    font-size: 12px;
    margin-top: -8px;
}

.underline {
    border: 1px solid rgb(177, 177, 177);
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
}

.left-content {
    width: 50%;
}

.left-content img {
    width: 50%;
}

input {
    width: 90%;
    padding: 5px 15px;
    margin-bottom: 10px;
    border: 1px solid rgb(98, 98, 98);
}

.right-content {
    width: 50%;
}
</style>

<script>
export default {
    name: "HeroSection",
    methods: {
        async goToPsikolog() {
            await this.$router.push({name: "psikolog"})
            this.$router.go()
        }
    }
}
</script>