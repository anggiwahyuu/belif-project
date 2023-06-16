<template>
    <section class="section-bg">
        <div class="container">
            
            <div class="section-title">
                <h2>Permasalahan Kesehatan Mental Pada Karyawan Dapat Merugikan Masyarakat</h2>
            </div>

            <div class="content d-xl-flex px-xl-5">
                <div class="box rounded mx-xl-3 my-xl-0 my-4" v-for="item in permasalahan" :key="item.id">
                    <div class="image">
                        <img :src="item.image" alt="Image Karyawan" loading="lazy" class=" rounded-top" style="width: 100%;">
                    </div>
                    <div class="p-3">
                        <h4 class="fw-bold">{{ item.masalah }}</h4>
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
    name: "PermasalahanMentalSection",
    data() {
        return {
            permasalahan: [
                {
                    masalah: "Penurunan Produktivitas",
                    keterangan: "Kondisi kesehatan pekerja diketahui berdampak pada hasil produktivitas. Tekanan psikologis yang tidak wajar menunjukkan sebuah peningkatan risiko yang akan menyebabkan penurunan produktivitas.",
                    image: require("@/assets/img/karyawan-tidak-produktif.jpg")
                },

                {
                    masalah: "Absen yang Meningkat",
                    keterangan: "Masalah kesehatan mental dengan lingkungan kerja yang tidak sehat akan berdampak pada ketidakhadiran atau absenteeism.",
                    image: require("@/assets/img/karyawan-bolos.jpg")
                },

                {
                    masalah: "Konflik dan Hubungan yang Buruk",
                    keterangan: "Masalah kesehatan mental menyebabkan orang mudah marah, dan tersinggung sehingga memicu adanya ketidakseimbangan antara kehidupan pribadi dengan pekerjaan.",
                    image: require("@/assets/img/konflik-karyawan.png")
                }
            ]
        }
    }
}
</script>