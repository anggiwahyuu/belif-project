<template>
    <section class="section-bg">
        <div class="container">
            <div class="pilih-kategori">
                <h4 class="fw-bold" style="color: #2c4964;">Pilih Kategori</h4>
                <div class="item-kategori d-md-flex">
                    <div class="me-4">
                        <input type="checkbox" name="konsultasi" id="konsultasi">
                        <label class="ms-1" for="konsultasi">Konsultasi</label>
                    </div>

                    <div class="me-4">
                        <input type="checkbox" name="screening-mental-health" id="screening-mental-health">
                        <label class="ms-1" for="screening-mental-health">Screening Mental Health</label>
                    </div>

                    <div class="me-4">
                        <input type="checkbox" name="tes-karir" id="tes-karir">
                        <label class="ms-1" for="tes-karir">Tes Karir</label>
                    </div>

                    <div>
                        <input type="checkbox" name="parenting" id="parenting" checked>
                        <label class="ms-1" for="parenting">Parenting</label>
                    </div>
                </div>
            </div>

            <div class="penawaran my-5">
                <h4 class="fw-bold" style="color: #2c4964;">Penawaran Menarik</h4>
                <div class="jenis-penawaran d-flex my-4">
                    <p class="mx-1 px-3 py-1 fw-semibold rounded-pill fs-6">Semua</p>
                    <p class="mx-1 px-3 py-1 fw-semibold rounded-pill fs-6">Parenting</p>
                </div>
                <div class="konten d-flex flex-md-row flex-column align-items-center flex-wrap">
                    <div class="box rounded mx-md-3 my-md-0 my-3 d-flex flex-column justify-content-between" v-for="item in modules" :key="item.id">
                        <div class="mb-3">
                            <img :src="item.image" class="rounded-top" alt="Image Module">
                            <h5 class="fs-6 px-3 pt-3 text-danger">{{ item.category }}</h5>
                            <h4 class=" fs-5 fw-semibold px-3">{{ item.title }}</h4>
                        </div>
                        <div class="px-3">
                            <p class="text-success" style="margin-bottom: -10px;">Rp {{ item.price }}</p>
                            <center><router-link :to="{name: 'checkout', params: {id: item.price}}" class="more-btn my-3">Beli</router-link></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.jenis-penawaran p {
    color: #1977cc;
    background: white;
    border: 1px solid #1977cc;
    transition: all ease-in-out 0.4s;
}

.jenis-penawaran p:hover {
    color: white;
    background: #1977cc;
    border: none;
}

.box {
    width: 200px;
    height: auto;
    border: none;
    background: white;
    margin: 0;
}

.konten .box img {
    width: 100%;
}

.more-btn {
  display: inline-block;
  border: 1px solid #1977cc;
  padding: 6px 30px 8px 30px;
  color: #1977cc;
  border-radius: 50px;
  margin-right: 10px;
  text-decoration: none;
  transition: all ease-in-out 0.4s;
}

.more-btn:hover {
    border: none;
    background: #3291e6;
    color: white;
}
</style>

<script>
export default {
    name: "ModulSection",
    data() {
        return {
            modules: [
                {
                    category: "Parenting",
                    title: "Efek Psikologin Anak Bagaimana Penanganannya?",
                    image: require("@/assets/img/profile.jpg"),
                    price: 25000
                },

                {
                    category: "Tes Karir",
                    title: "Tipe-tipe Tes Karir",
                    image: require("@/assets/img/profile.jpg"),
                    price: 30000
                },

                {
                    category: "Trust Issue",
                    title: "Hubungan Menjadi Rapuh",
                    image: require("@/assets/img/profile.jpg"),
                    price: 35000
                }
            ]
        }
    }
}
</script>