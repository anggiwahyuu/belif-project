<template>
    <section id="psikolog-page" class="doctors section-bg">
        <div class="section-title">
            <h2>Psikolog</h2>
            <p>Mau mulai konsultasi? Yuk kenali psikolog kami!</p>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-6 mb-3" v-for="item in konselors" :key="item.id" style="background: white;">
                    <div class="member d-flex align-items-start">
                        <div class="pic">
                            <img :src="item.image" class="img-fluid" alt="" loading="lazy">
                        </div>
                        <div class="member-info">
                            <h4>{{ item.nama }}</h4>
                            <span>{{ item.posisi }}</span>
                            <ul>
                                <li v-for="i in item.spesialis" :key="i.id">{{ i.ahli }}</li>
                            </ul>
                            <div class="button-collection">
                                <router-link :to="{name: 'detail', params: {id: item.id}}" class="more-btn py-1 px-3">Lihat Profil</router-link>
                                <router-link :to="{name: 'daftar-online', params: {id: item.id}}" class="more-btn py-1 px-3 mt-md-0 mt-3">Konsultasi</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.more-btn {
  display: inline-block;
  background: #1977cc;
  color: #fff;
  border: none;
  border-radius: 50px;
  margin-right: 10px;
  text-decoration: none;
  transition: all ease-in-out 0.4s;
}

.more-btn:hover {
  background: #3291e6;
}
</style>

<script>
export default {
    name: "TimPsikologSection",
    data() {
      return {
        konselors: [
          {
            id: 0,
            nama: "Jessica Maha Dewi", 
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
            nama: "Siti Fathonah", 
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
            nama: "Edi Handoko Setiawan", 
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
            nama: "Farida Setyaningsih", 
            image: require("@/assets/img/konselor/konselor4.jpg"), 
            posisi: "Neurosurgeon", 
            spesialis: [
              {ahli: "Pengalaman Traumatis"}, 
              {ahli: "Regulasi Emosi"}, 
              {ahli: "Perkembangan Diri"}
            ]
          }
        ]
      }
    }
}
</script>