<template>
    <section id="hero" class="d-flex align-items-center">
        <div class="container">
            <h1>Temukan Keseimbangan dan Keharmonisan Dalam Hidup Anda Dengan Belif</h1>
            <h2>A Better Life With Belif</h2>
            <button type="button" class="btn btn-get-started" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Jadwalkan Konsultasi
            </button>

            <!-- Modal -->
            <div class="modal fade section-modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div id="konseling-online" class="text-center">
                                <h4 class="fw-bold fs-5" style="color: black;">Konseling Online</h4>
                                <p class="loc">via voice/video call</p>
                                <p class="btn btn-konsultasi rounded-pill">Jadwalkan Konsultasi Online</p>
                            </div>
                            <div class="underline"></div>
                            <div id="konseling-offline" class="text-center">
                                <h4 class="fw-bold fs-5" style="color: black;">Konseling Offline</h4>
                                <p class="loc">di Rumah Belif, Jember, Jawa Timur</p>
                                <p class="btn btn-konsultasi rounded-pill">Jadwalkan Konsultasi Offline</p>
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
    margin-bottom: 10px;
}
</style>

<script>
export default {
    name: "HeroSection"
}
</script>