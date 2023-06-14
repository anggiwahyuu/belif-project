<template>
    <section>
        <div class="container">
            <div class="section-title">
                <h2>Penawaran Menarik</h2>
                <p>{{ text_title }}</p>
            </div>

            <div class="container d-flex justify-content-center">
                <div class="box" @click="goToArtikel()">
                    <i class="fa-solid fa-newspaper"></i>
                    <p class="fw-bold">Artikel</p>
                </div>
                <div class="box" @click="goToModul()">
                    <i class="fa-solid fa-book"></i>
                    <p class="fw-bold">Modul</p>
                </div>
                <div class="box" @click="goToWorkshop()">
                    <i class="fa-solid fa-briefcase"></i>
                    <p class="fw-bold">Workshop</p>
                </div>
                <div class="box" @click="goToPsikolog()">
                    <i class="fa-brands fa-rocketchat"></i>
                    <p class="fw-bold">Tanya Ahli</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.box {
    width: 200px;
    border: 1px solid #1977cc;
    border-radius: 10px;
    color: #1977cc;
    margin: 0px 10px;
    padding-top: 30px;
    padding-bottom: 15px;
    text-align: center;
    cursor: pointer;
    transition: all ease-in-out 0.4s;
}

.box i {
    font-size: 50px;
}

.box:hover {
    background: #1977cc;
    border: none;
    color: white;
}
</style>

<script>
export default {
    name: "PenawaranSection",
    data() {
        return {
            text_title: "Jelajahi langkah demi langkah perjalanan menjadi orang tua yang penuh kegembiraan, tantangan, dan keajaiban yang tak terlupakan melalui......."
        }
    },
    methods: {
        async goToPsikolog() {
            await this.$router.push({name: "psikolog"})
            this.$router.go()
        },

        async goToArtikel() {
            await this.$router.push({name: "layanan-parenting-artikel"})
            this.$router.go()
        },

        async goToModul() {
            await this.$router.push({name: "layanan-parenting-modul"})
            this.$router.go()
        },

        async goToWorkshop() {
            await this.$router.push({name: "layanan-parenting-workshop"})
            this.$router.go()
        }
    }
}
</script>