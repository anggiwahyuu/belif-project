<template>
    <section class="section-bg">
        <div class="container">

            <div class="section-title">
                <h2>Jenis Kolaborasi</h2>
                <p>{{ textTitle }}</p>
            </div>

            <div class="content d-xl-flex px-xl-5">
                <div class="box rounded mx-xl-3 my-xl-0 my-4" v-for="item in kolaborasi" :key="item.id">
                    <div class="image">
                        <img :src="item.image" alt="Image Kolaborasi" loading="lazy" class=" rounded-top" style="width: 100%;">
                    </div>
                    <div class="p-3">
                        <h4 class="fw-bold">{{ item.jenis }}</h4>
                        <p>{{ item.keterangan }}</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.box {
    width: 100%;
    background: white;
    box-shadow: 0px 2px 15px rgba(44, 73, 100, 0.08);
}

.image {
    width: 100%;
}
</style>

<script>
export default {
    name: "JenisKolaborasiSection",
    data() {
        return {
            textTitle: "Belif mengajak perusahaan Anda berkolaborasi untuk mengatasi permasalahan kesehatan mental pada karyawan, meningkatkan kualitas karyawan, menyelesaikan permasalahan karyawan, dan menciptakan karyawan yang dapat #WorkLifeBalance melalui berbagai jenis kolaborasi.",
            kolaborasi: [
                {
                    jenis: "Pelatihan Karyawan",
                    keterangan: "Menyediakan pelatihan untuk meningkatkan kemampuan dalam bekerja, hingga untuk meningkatkan soft skills yang pastinya berguna untuk meningkatkan kualitas diri dan efektivitas dalam bekerja. Topik yang tersedia adalah employee wellbeing atau kesehatan mental karyawan, komunikasi asertif, public speaking, stress management, kepemimpinan (leadership), produktivitas, dan masih banyak topik menarik dan bermanfaat lainnya!",
                    image: require("@/assets/img/pelatihan-karyawan.jpg")
                },

                {
                    jenis: "Kolaborasi Acara",
                    keterangan: "Menyediakan event yang berkaitan dengan online maupun offline seminar atau workoshop yang mana topik acaranya disesuaikan dengan mental health dan kebutuhan perusahaan. Kolaborasi acara ini berguna untuk meningkatkan branding dan memberi exposure bagi perusahaan.",
                    image: require("@/assets/img/kolaborasi-acara.jpg")
                },

                {
                    jenis: "Kolaborasi Konten",
                    keterangan: "Anda dapat melakukan kerja sama dengan Belif dengan bentuk kolaborasi berupa pembuatan konten untuk media sosial, seperti Youtube, Podcast, Instagram, Facebook, hingga infografis yang kemudian akan diunggah di platform Belif dengan topik sesuai pilihan yang telah disepakati bersama oleh kedua pihak. Topik yang dibahas mencangkup seputar isu terkini, kesehatan mental, pengembangan diri, keterampilan hidup, dan masih banyak lagi sesuai kebutuhan!",
                    image: require("@/assets/img/kolaborasi-konten.jpg")
                }
            ]
        }
    }
}
</script>