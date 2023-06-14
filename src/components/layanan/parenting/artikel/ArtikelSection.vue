<template>
    <section>
        <div class="container" style="padding: 0 200px;">
            <div class="search rounded-pill d-flex justify-content-center">
                <input type="search" name="search-article" id="search-article" placeholder="Cari Artikel">
                <label for="search-article"><i class="fa-solid fa-magnifying-glass fa-xl ms-3" style="color: #1977cc;"></i></label>
            </div>
            <div class="kategori d-flex justify-content-center my-4">
                <p class="mx-1 px-3 py-1 fw-semibold rounded-pill fs-6">Emosi</p>
                <p class="mx-1 px-3 py-1 fw-semibold rounded-pill fs-6">Inner Child</p>
                <p class="mx-1 px-3 py-1 fw-semibold rounded-pill fs-6">Bullying</p>
            </div>
            <div class="list-artikel">
                <div class="my-3 d-flex" v-for="item in articles" :key="item.id">
                    <div class="image">
                        <img :src="item.image" alt="Image Article" style="width: 100%; height: auto;" loading="lazy">
                    </div>
                    <div class="konten ms-3">
                        <h3 class="fs-5 fw-bold">{{ item.title }}</h3>
                        <p class="fs-6">{{ item.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.search {
    margin: auto;
    border: 1px solid #1977cc;
    padding: 10px 5px;
    width: 50%;
    height: auto;
}

input[type=search] {
    width: 80%;
    border: none;
    background: transparent;
}

input:focus {
  outline: none;
}

.kategori p {
    color: #1977cc;
    background: white;
    border: 1px solid #1977cc;
    transition: all ease-in-out 0.4s;
}

.kategori p:hover {
    color: white;
    background: #1977cc;
    border: none;
}

.image {
    width: 20%;
    height: auto;
}
</style>

<script>
export default {
    name: "ArtikelSection",
    data() {
        return {
            articles: [
                {
                    title: "Aku dan Anakku", 
                    image: require("@/assets/img/ortu_anak.png"),
                    content: "Saat anak tidak nyaman di acara keluarga ..."
                },

                {
                    title: "Aku dan Diriku", 
                    image: require("@/assets/img/stres1.jpg"),
                    content: "Lorem Ipsum Dolor Sit Amet ..."
                },

                {
                    title: "Aku dan Pasanganku", 
                    image: require("@/assets/img/bersama_pasangan.jpg"),
                    content: "Pembagian peran antara ayah dan ibu dalam keluarga ..."
                }
            ]
        }
    }
}
</script>