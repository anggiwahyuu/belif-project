<template>
    <section id="psikolog" class="doctors">
      <div class="container">

        <div class="section-title">
          <h2>Tim Psikolog</h2>
          <p>Yuk kenalin psikolog/konselor ahli dalam permasalahanmu dan siap membantumu menemukan jalan keluar.</p>
        </div>

        <div class="d-xl-flex flex-wrap">
          <div class="col-xl-6 mb-3" v-for="item in konselors" :key="item.id">
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
                  <a href="#" class="more-btn py-1 px-3 mt-md-0 mt-3" style="text-decoration: none;" data-bs-toggle="modal" data-bs-target="#buatJanjiTemu" @click="sendKonselor(item)">Buat Janji</a>

                  <div class="modal fade section-modal" id="buatJanjiTemu" tabindex="-1" aria-labelledby="buatJanjiTemuLabel" aria-hidden="true">
                      <div class="modal-dialog">
                          <div class="modal-content">
                              <div class="modal-header">
                                  <h1 class="modal-title fs-5 text-black" id="modalBuatJanjiTemuLabel">Buat Janji Temu Psikolog/Konselor
                                  </h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                  <center>
                                    <div>
                                      <img :src="selectedKonselor.image" class="rounded-circle" alt="Image Konselor" style="width: 20%;">
                                      <h4 class="fw-bold fs-5 mt-3">{{ selectedKonselor.nama }}</h4>
                                      <div class="d-flex justify-content-center">
                                          <p v-for="it in selectedKonselor.spesialis" :key="it.id" class="spesialis mx-1 px-2 py-1 fw-semibold rounded-pill">{{ it.ahli }}</p>
                                      </div>
                                      <p>Melayani : <i class="fa-solid fa-phone-volume ms-1 me-1"></i> Voice Call <i class="fa-sharp fa-solid fa-mobile ms-3 me-1"></i> Video Call</p>
                                      <button type="button" @click="goBooking(selectedKonselor.id)" class="more-btn mt-4 py-1 px-3">Booking</button>
                                    </div>
                                  </center>
                              </div>
                              <div class="modal-footer"></div>
                          </div>
                      </div>
                  </div>

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

.spesialis {
    font-size: 13px;
    color: white;
    background: #1977cc;
}
</style>

<script>
export default {
    name: "PsikologSection",
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
        ],
        selectedKonselor: Object
      }
    },
    methods: {
      sendKonselor(item) {
        this.selectedKonselor = item
      },
      async goBooking(id) {
        await this.$router.push({name: "daftar-online", params: {id: id}})
        this.$router.go()
      }
    }
}
</script>