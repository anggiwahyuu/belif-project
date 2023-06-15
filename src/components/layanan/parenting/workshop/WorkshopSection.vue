<template>
    <section class="section-bg">
        <div class="container">
            <div class="section-title">
                <h2>Bersama-sama Kita Tumbuh!</h2>
                <p>{{ teksTitle }}</p>
            </div>

            <div class="d-flex justify-content-center py-5 px-lg-5">
                <div class="box text-center mx-3" @click="goToCommunity()">
                    <div class="circle rounded-circle"></div>
                    <h4 class="fs-5 fw-bold">Workshop Online</h4>
                    <p class="fs-6">Join Komunitas dan Dapatkan Dukungan Sesama</p>
                </div>
                <div class="box text-center mx-3" @click="goToSeminar()">
                    <div class="circle rounded-circle"></div>
                    <h4 class="fs-5 fw-bold">Workshop On-Demand</h4>
                    <p class="fs-6">Dapatkan Video dan Join Seminar </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.box {
    width: 300px;
    border: none;
    background: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0px 2px 15px rgba(44, 73, 100, 0.08);
    cursor: pointer;
}

.box h4 {
    color: #2c4964;
}

.box .circle {
    width: 60px;
    height: 60px;
    background: white;
    margin: auto;
    margin-top: -20px;
}
</style>

<script>
export default {
    name: "WorkshopSection",
    data() {
        return {
            teksTitle: "Perjalanan pertumbuhan pribadi dimulai dengan langkah kecil. Temukan keberanian untuk berkonsultasi dengan ahli kesehatan mental kami, dan mulailah menjelajahi potensi tak terbatas yang ada dalam dirimu!"
        }
    },
    methods: {
        async goToCommunity() {
            await this.$router.push({name: "home", hash: "#komunitas"})
            this.$router.go()
        },

        goToSeminar() {
            window.open("https://youtu.be/5CGPhSl6Q8Q", "_blank")
        }
    }
}
</script>