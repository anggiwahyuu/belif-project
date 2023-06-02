<template>
    <section id="testimonials" class="testimonials section-bg">
        <div class="container">
            <div class="section-title">
                <h2>Apa Kata Mereka?</h2>
                <p>Mereka sudah menemukan makna hidup yang baru. Kamu Selanjutnya???</p>
            </div>

            <div class="container d-flex flex-row justify-content-between">
                <div class="box me-3">
                    <div class="image d-flex px-3 mt-3">
                        <img src="../../assets/img/mahasiswa.jpg" class="image-profesi" alt="Mahasiswa">
                        <div class="d-flex flex-column ms-3 justify-content-center">
                            <h5 class="fw-bold fs-6">Jane Doe</h5>
                            <p class="fs-6">Mahasiswa</p>
                        </div>
                    </div>
                    <h4 class="fw-bold fs-5 px-3 pt-3">"Lorem Ipsum Dolor Sit Amet"</h4>
                    <p class="fs-6 px-3 pb-3"><span class="fw-bold">Problem: </span> Relationship, Pengendalian, Depresi </p>
                </div>
                <div class="box me-3">
                    <div class="image d-flex px-3 mt-3">
                        <img src="../../assets/img/irt.jpg" class="image-profesi" alt="Ibu Rumah Tangga">
                        <div class="d-flex flex-column ms-3 justify-content-center">
                            <h5 class="fw-bold fs-6">Marcel Doe</h5>
                            <p class="fs-6">Ibu Rumah Tangga</p>
                        </div>
                    </div>
                    <h4 class="fw-bold fs-5 px-3 pt-3">"Lorem Ipsum Dolor Sit Amet"</h4>
                    <p class="fs-6 px-3 pb-3"><span class="fw-bold">Problem: </span> Duka cita, Kurang Kasih Sayang, Perselingkuhan </p>
                </div>
                <div class="box me-3">
                    <div class="image d-flex px-3 mt-3">
                        <img src="../../assets/img/karyawan.jpg" class="image-profesi" alt="Karyawan">
                        <div class="d-flex flex-column ms-3 justify-content-center">
                            <h5 class="fw-bold fs-6">Michael</h5>
                            <p class="fs-6">Karyawan</p>
                        </div>
                    </div>
                    <h4 class="fw-bold fs-5 px-3 pt-3">"Lorem Ipsum Dolor Sit Amet"</h4>
                    <p class="fs-6 px-3 pb-3"><span class="fw-bold">Problem: </span> Pengendalian Emosi, KDRT, Trauma Psikis </p>
                </div>
                <div class="box">
                    <div class="image d-flex px-3 mt-3">
                        <img src="../../assets/img/mahasiswa.jpg" class="image-profesi" alt="Mahasiswa">
                        <div class="d-flex flex-column ms-3 justify-content-center">
                            <h5 class="fw-bold fs-6">Jess</h5>
                            <p class="fs-6">Mahasiswa</p>
                        </div>
                    </div>
                    <h4 class="fw-bold fs-5 px-3 pt-3">"Lorem Ipsum Dolor Sit Amet"</h4>
                    <p class="fs-6 px-3 pb-3"><span class="fw-bold">Problem: </span> Pengendalian Emosi, KDRT, Trauma Psikis </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.box {
    border: none;
    width: 100%;
    background: white;
    border-radius: 10px;
}

.box .image{
    border: none;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.image-profesi {
    width: 60px; 
    height: 60px; 
    border-radius: 100%;
}

.box h4{
    color: #2c4964;
}

.box p {
    color: rgb(120, 120, 120);
}
</style>

<script>
export default {
    name: "TextimoniSection"
}
</script>