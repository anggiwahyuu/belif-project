<template>
    <section id="kebersamaan">
        <div class="container">
            <div class="d-md-flex justify-content-center d-block">
                <div class="left-content">
                    <center>
                        <img src="@/assets/img/kebersamaan-keluarga.png" alt="Image Kebersamaan" loading="lazy">
                    </center>
                </div>
                <div class="right-content d-flex flex-column justify-content-center">
                    <p class="fs-5 fw-semibold" style="text-align: justify;">{{ text_kebersamaan }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.left-content {
    width: 100%;
}

.right-content{
    width: 100%;
}
</style>

<script>
export default {
    name: "KebersamaanSection",
    data() {
        return {
            text_kebersamaan: "Menjadi orang tua adalah tugas besar yang membutuhkan pengorbanan, tanggung jawab, dan cinta yang tiada batas. Saat Anda menapaki perjalanan ini, akan ada banyak momen yang penuh kegembiraan, tawa, tangis, tantangan, dan juga keajaiban kecil yang tak terlupakan."
        }
    }
}
</script>