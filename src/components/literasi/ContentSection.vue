<template>
    <section id="content" class="section-bg">
        <div class="container">
            <div class="section-title">
                <h2>Post</h2>
            </div>

            <div class="container d-flex flex-row justify-content-between">
                <div class="box rounded me-5">
                    <a href="https://www.halodoc.com/kesehatan/gangguan-panik" style="text-decoration: none;">
                        <img src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/20072544/gangguan-panik-halodoc.jpg.webp" alt="Artikel 1" class="image mb-4 rounded-top" loading="lazy">
                        <h4 class="fw-bold p-3">Gangguan Panik</h4>
                        <p class="p-3">Gangguan panik ditandai dengan rasa ketakutan yang terjadi secara intens dan tiba-tiba sehingga memicu reaksi fisik yang parah. Pemicunya seringkali tidak jelas bahkan tidak membahayakan. Namun, pengidap serangan panik bisa merasa sangat ketakutan, kehilangan kendali, mengalami serangan jantung, atau bahkan sekarat. Meskipun serangan panik itu sendiri tidak mengancam jiwa, tetapi kondisi ini bisa mempengaruhi kualitas hidup pengidapnya.</p>
                    </a>
                </div>
                <div class="box rounded me-5">
                    <a href="https://kumparan.com/nada-keysha/pentingnya-edukasi-kesehatan-mental-pada-remaja-1wyZnFQP3Je/1" style="text-decoration: none;">
                        <img src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1638101282/boitf6mauxhi7g9lngzh.jpg" alt="Artikel 2" class="image mb-4 rounded-top" loading="lazy">
                        <h4 class="fw-bold p-3">Pentingnya Edukasi Kesehatan Mental pada Remaja</h4>
                        <p class="p-3">Kesehatan mental adalah kemampuan kita sebagai manusia untuk berpikir, berekspresi, berinteraksi dengan sesama. Tapi masih banyak juga nih orang-orang, terutama dikalangan orang tua menganggap kesehatan mental adalah hal yang tabu untuk dibahas karena termasuk dalam hal yang sensitif dan gak jarang pula yang secara terang-terangan tidak peduli akan hal tersebut.</p>
                    </a>
                </div>
                <div class="box rounded">
                    <a href="http://www.smkn1girimulyo.sch.id/read/46/7-kebiasaan-yang-mengganggu-kesehatan-mental" style="text-decoration: none;">
                        <img src="http://www.smkn1girimulyo.sch.id/media_library/posts/large/5631d5ff3504d8b62d961eafc3c432f9.jpg" alt="Artikel 3" class="image mb-4 rounded-top" loading="lazy">
                        <h4 class="fw-bold p-3">7 Kebiasaan yang Mengganggu Kesehatan Mental</h4>
                        <p class="p-3">Tanpa disadari, musuh terbesar bagi diri Anda bukanlah orang lain, tetapi diri Anda sendiri. Pikiran dan kebiasaan Anda, meskipun sering kali disepelekan, dapat memengaruhi suasana hati dan mengganggu kesehatan mental Anda. Sama seperti kesehatan tubuh, gangguan mental juga akan menyebabkan gejala-gejala yang akhirnya menghambat aktivitas Anda sehari-hari bila tidak segera ditangani.</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.box {
    width: 100%;
    height: auto;
    border: none;
    background: white;
}

.box .image {
    width: 100%;
    height: 30vh;
    border: none;
    background: #1977cc;
}

.box h4{
    color: #2c4964;
}

.box p {
    color: rgb(153, 153, 153);
}
</style>

<script>
export default {
    name: "ContentSection"
}
</script>