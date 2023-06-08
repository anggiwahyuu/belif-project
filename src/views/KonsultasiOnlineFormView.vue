<template>
    <div id="daftar-online">
        <div id="back-button">
            <p class="fs-5 fw-semibold"><i @click="goBack()" class="back fa-solid fa-arrow-left"></i>Jadwal Konsultasi</p>
        </div>
        <div id="content" class="bg-white">
            <div class="section-bg px-3 py-2">
                <h3 class="fs-6 fw-bold pt-2">Konseling Online</h3>
            </div>
            <div class="konselor d-flex px-3 py-3">
                <div class="img-section">
                    <img :src="konselors[$route.params.id].image" class="rounded-circle" alt="Image Konselor">
                </div>
                <div class="info-konselor d-flex flex-column ps-4">
                    <h4 class="fs-6 fw-bold">{{ konselors[$route.params.id].nama }}</h4>
                    <div class="d-flex">
                        <p v-for="item in konselors[$route.params.id].spesialis" :key="item.id" class="spesialis mx-1 px-2 py-1 fw-semibold rounded-pill">{{ item.ahli }}</p>
                    </div>
                </div>
            </div>

            <hr class="mx-3">

            <div class="d-flex row justify-content-between px-3 py-3">
                <div class="d-flex flex-column" style="width: 45%;">
                    <i class="fa-solid fa-calendar-check icon-sesi"></i>
                    <p style="font-size: 13px; color: rgba(0, 0, 0, 0.600);">1 x Sesi 60 menit</p>
                </div>
                <div class="vertical-line"></div>
                <div class="d-flex flex-column" style="width: 45%;">
                    <i class="fa-solid fa-video icon-sesi"></i>
                    <p style="font-size: 13px; color: rgba(0, 0, 0, 0.600);">Media Konseling</p>
                    <p style="font-size: 14px; font-weight: bold; margin-top: -15px;">Voice / Video Call</p>
                </div>
            </div>

            <hr class="mx-3">

            <div class="px-3 py-3">
                <h4 class="fw-bold fs-6 mb-4">Pilih Tanggal dan Waktu</h4>
                <div class="d-flex row justify-content-between">
                    <div class="d-flex flex-column" style="width: 49%;">
                        <p style="margin-bottom: 3px;">Pilih Tanggal</p>
                        <input type="date" name="date" id="date" style="width: 80%;" v-model="myDate">
                        <p style="margin-top: 15px;">Tanggal terpilih : {{ myDate }}</p>
                    </div>
                    <div class="d-flex flex-column" style="width: 49%;">
                        <p style="margin-bottom: 3px;">Pilih Waktu</p>
                        <div class="d-flex">
                            <button type="button" class="btn btn-time my-3" v-for="item in time" :key="item.id">{{ item.jam }}</button>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="mx-3">

            <div class="px-3 py-3">
                <h4 class="fw-bold fs-6">Ringkasan Biaya</h4>
                <div class="d-flex justify-content-between">
                    <p>Biaya Konseling</p>
                    <p class="fw-semibold">{{ biaya_konseling }}</p>
                </div>
                <div class="d-flex justify-content-between" style="margin-top: -18px;">
                    <p>Biaya Administrasi</p>
                    <p class="fw-semibold text-success">{{ gratis }}</p>
                </div>
                <div class="d-flex justify-content-between" style="margin-top: -18px;">
                    <p>Biaya Lain-lain</p>
                    <p class="fw-semibold text-success">{{ gratis }}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="fw-semibold text-danger">Total Harga</p>
                    <p class="fw-semibold text-danger">{{ biaya_konseling }}</p>
                </div>
            </div>

            <center><button type="button" class="btn more-btn my-3">Lanjutkan</button></center>

        </div>
    </div>
</template>

<style scoped>
.vertical-line {
    width: 10%;
    border: none;
    border-left: 1px solid rgba(0, 0, 0, 0.200);
}

.icon-sesi {
    color: #1977cc;
}

hr {
    color: rgba(0, 0, 0, 0.400);
}

#daftar-online {
    padding: 0 33%;
    background: rgb(224, 224, 224);
}

#back-button {
    padding: 10px 25px;
    background: white;
    box-shadow: 0px 2px 15px rgba(25, 119, 204, 0.1);
}

.back {
    font-size: 20px;
    cursor: pointer;
    margin-right: 15px;
}

.img-section {
    width: 11%;
}

.img-section img {
    width: 100%;
}

.info-konselor {
    width: 89%;
}

.spesialis {
    font-size: 13px;
    color: white;
    background: #1977cc;
}

.more-btn {
    display: inline-block;
    background: #1977cc;
    padding: 6px 30px 8px 30px;
    color: #fff;
    border: none;
    border-radius: 50px;
    transition: all ease-in-out 0.4s;
}

.more-btn:hover {
    background: #3291e6;
}

.btn-time {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #1977cc;
    border-radius: 50px;
    color: black;
    font-size: 12px;
    transition: all ease-in-out 0.4s;
}

.btn-time:hover {
    color: #fff;
    border: none;
    background: #1977cc;
}

.btn-active {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 50px;
    color: white;
    background: #1977cc;
    font-size: 12px;
    transition: all ease-in-out 0.4s;
}
</style>

<script>
export default {
    name: "KonsultasiOnlineView",
    data() {
        return {
            konselors: [
                {
                    id: 0,
                    nama: "Walter White", 
                    image: require("@/assets/img/konselor/konselor2.jpg"), 
                    posisi: "Chief Medical Officer", 
                    spesialis: [
                        {ahli: "Relationship"}, 
                        {ahli: "Parenting"}, 
                        {ahli: "Kecemasan"}
                    ]
                },
                {
                    id: 1,
                    nama: "Sarah Johnson", 
                    image: require("@/assets/img/konselor/konselor1.jpg"), 
                    posisi: "Anesthesiologist", 
                    spesialis: [
                        {ahli: "Stress"}, 
                        {ahli: "Duka Cita"}, 
                        {ahli: "Suasana Hati"}
                    ]
                },
                {
                    id: 2,
                    nama: "William Anderson", 
                    image: require("@/assets/img/konselor/konselor3.jpg"), 
                    posisi: "Cardiology", 
                    spesialis: [
                        {ahli: "Gangguan Kepribadian"}, 
                        {ahli: "Gangguan Suasana Hati"}, 
                        {ahli: "Depresi"}
                    ]
                },
                {
                    id: 3,
                    nama: "Amanda Jepson", 
                    image: require("@/assets/img/konselor/konselor4.jpg"), 
                    posisi: "Neurosurgeon", 
                    spesialis: [
                        {ahli: "Pengalaman Traumatis"}, 
                        {ahli: "Regulasi Emosi"}, 
                        {ahli: "Perkembangan Diri"}
                    ]
                }
            ],
            lorem_ipsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            biaya_konseling: "Rp 100.000",
            gratis: "Gratis",
            myDate: new Date().toISOString().slice(0, 10),
            time: [
                {jam: "13.00"},
                {jam: "14.00"},
                {jam: "15.00"}
            ]
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>