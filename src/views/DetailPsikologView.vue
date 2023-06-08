<template>
    <div class="section-bg" id="detail">
        <div id="back-button">
            <p class="fs-5 fw-semibold"><i @click="goBack()" class="back fa-solid fa-arrow-left"></i>Detail Psikolog</p>
        </div>
        <div id="content" class="bg-white pb-5">
            <div class="identity">
                <center>
                    <img :src="konselors[$route.params.id].image" id="img-psikolog" alt="Image Psikolog">
                    <h4 id="name" class="my-4">{{ konselors[$route.params.id].nama }}</h4>
                    <div class="d-flex justify-content-center">
                        <p v-for="item in konselors[$route.params.id].spesialis" :key="item.id" class="spesialis mx-1 px-2 py-1 fw-semibold rounded-pill">{{ item.ahli }}</p>
                    </div>
                    <div class="melayani">
                        <hr class="mx-3">
                        <p>Melayani : <i class="fa-solid fa-phone-volume ms-1 me-1"></i> Voice Call <i class="fa-sharp fa-solid fa-mobile ms-3 me-1"></i> Video Call</p>
                        <hr class="mx-3">
                    </div>
                </center>
            </div>

            <div class="profile px-3">
                <h3 class="mb-3">Profile {{ konselors[$route.params.id].nama }}</h3>
                <p>{{ konselors[$route.params.id].nama }} merupakan {{ lorem_ipsum }}</p>
            </div>

            <hr>

            <div class="sharing px-3">
                <h3 class="mb-3">Podcast Sharing</h3>
                <iframe class="rounded-4" width="100%" height="315" src="https://www.youtube.com/embed/xDUy5dmhHcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <hr>

            <div class="testimoni px-3">
                <h3 class="mb-3">Testimoni Psikolog {{ konselors[$route.params.id].nama }}</h3>
                <div class="testi-user d-flex overflow-auto">
                    <div v-for="item in itemTestimoni" :key="item.id">
                        <div class="box flex-shrink-0 rounded-4 p-3 mx-3">
                            <div class="user d-flex">
                                <h4 class="py-2 px-3 rounded-circle">{{ item.nama }}</h4>
                                <div class="star ms-2">
                                    <i class="bi-star-fill"></i><i class="bi-star-fill"></i><i class="bi-star-fill"></i><i class="bi-star-fill"></i><i class="bi-star-fill"></i>
                                </div>
                            </div>
                            <p class="testi">{{ lorem_ipsum }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white py-3" id="btn-submit">
            <center><router-link class="more-btn" style="text-decoration: none;" :to="{name: 'daftar-online', params: {id: $route.params.id}}">Konsultasi Sekarang</router-link></center>
        </div>
    </div>
</template>

<style scoped>
hr {
    color: rgba(0, 0, 0, 0.400);
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

#detail {
    padding: 0 33%;
}

#back-button {
    padding: 10px 25px;
    background: white;
    box-shadow: 0px 2px 15px rgba(25, 119, 204, 0.1);
}

.identity {
    padding: 30px 0;
    width: 100%;
}

.identity #img-psikolog {
    width: 40%;
    border-radius: 20px;
}

.identity #name {
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 20px;
    color: #2c4964;
}

.spesialis {
    font-size: 13px;
    color: white;
    background: #1977cc;
}

.profile h3{
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 22px;
    color: #2c4964;
}

.sharing h3{
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 22px;
    color: #2c4964;
}

.testimoni h3{
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 22px;
    color: #2c4964;
}

.box {
    border: 1px solid #bfbfbf;
    width: 400px;
}

.box .testi {
    font-size: 13px;
}

.box .user h4{
    color: white;
    background: #1977cc;
}

.back {
    font-size: 20px;
    cursor: pointer;
    margin-right: 15px;
}

.star {
    color: rgb(255, 187, 0);
}
</style>

<script>
export default {
    name: "DetailPsikolog",
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
            itemTestimoni: [
                {nama: "A"},
                {nama: "B"},
                {nama: "C"},
                {nama: "D"},
                {nama: "E"}
            ],
            lorem_ipsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>