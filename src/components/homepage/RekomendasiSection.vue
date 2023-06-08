<template>
    <section id="rekomendasi" class="rekomendasi">
      <div class="container">

        <div class="section-title">
          <h2>Rekomendasi</h2>
        </div>

        <div class="container p-5 rounded-5" style="background: #1977cc;">
          <div class="text-white d-flex">
            <div class="left-content">
              <div class="starting" :style="{ display: active? 'block' : 'none'}">
                <h3 class="fw-bold mb-5 fs-1">Rekomendasi Produk Sesuai Kebutuhan Anda!</h3>
                <p class="mb-5 fs-5">Masih bingung untuk memilih produk? Belif siap membantu memilih produk yang paling tepat khusus untuk Anda. Cukup dengan menjawab kuisioner saja!</p>
                <div>
                  <button class="more-btn" @click="addForm()">Coba Sekarang <i class="bx bx-chevron-right"></i></button>
                </div>
              </div>

              <div class="form flex-column justify-content-center" style="height: 100%;" :style="{ display: active? 'none' : 'flex'}">
                <form>
                  <div id="form-nama" :style="{ display: next? 'block' : 'none'}">
                    <p class="fs-3">1. Nama</p>
                    <input type="text" name="form-name" id="form-name" placeholder="Ketik Nama Kamu Disini" v-model="nama"> 
                    <div class="more-btn mt-4" @click="nextForm1()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-1" class="disable">
                    <p class="fs-3">2. Hai, boleh tau gak diantara penyataan ini mana yang paling sesuai dengan kamu?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Introvert
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Ekstrovert
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Emosional
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm2()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-2" class="disable">
                    <p class="fs-3">3. Bagaimana perasaanmu saat ini?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Senang/Gembira
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Sedih/Khawatir
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Kesepian
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm3()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-3" class="disable">
                    <p class="fs-3">4. Apa kamu bisa mengendalikan emosimu?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Tergantung situasi
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Tentu saja bisa
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Tidak bisa
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm4()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-4" class="disable">
                    <p class="fs-3">5. Apasih yang membuatmu kesulitan dalam mengatasi masalah?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Saya sudah mencoba menyelesaikan masalah sendiri tapi tidak berhasil
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Saya malu bercerita dengan orang lain/psikolog
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Saya tidak memiliki biaya untuk konseling
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm5()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-5" class="disable">
                    <p class="fs-3">6. Dalam 2 minggu terakhir, seberapa sering kamu merasa khawatir atau putus asa?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Tidak pernah
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Hampir setiap hari
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Beberapa hari
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm6()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-6" class="disable">
                    <p class="fs-3">7. Dalam satu bulan terakhir, apakah kamu merasa tidak bahagia dan tertekan?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Tidak pernah
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Hampir setiap hari
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Beberapa hari
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm7()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-7" class="disable">
                    <p class="fs-3">8. Dalam 2 minggu terakhir, seberapa sering kamu sulit berkonsentrasi pada sesuatu?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Tidak pernah
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Hampir setiap hari
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Beberapa kali
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm8()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-8" class="disable">
                    <p class="fs-3">9. Dalam 2 minggu terakhir, seberapa sering kamu kurang nafsu makan / terlalu banyak makan?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Tidak pernah
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Hampir setiap hari
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Beberapa hari
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm9()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-9" class="disable">
                    <p class="fs-3">10. Mana yang menjadi keinginanmu?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Hidup bahagia
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Bisa berhenti khawatir/overthinking
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Jauh dari masalah
                      </label>
                    </div>
                    <div class="more-btn mt-4" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                </form>
              </div>
            </div>
            <div class="right-content d-flex justify-content-center">
              <img src="../../assets/img/belif1.jpg" class="rounded-circle ms-5" style="width: 55%;" alt="Belif">
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.left-content {
  width: 50%;
  overflow: hidden;
}

.right-content {
  width: 50%;
}

input[type=text] {
  width: 100%;
  border: none;
  border-bottom: 2px solid white;
  background: none;
  color: white;
}

input[type=radio] {
  height: 22px;
  width: 22px;
}

input[type=radio]:checked {
  display: inline-block;
  background-color: #000;
}

input:focus {
  outline: none;
}

#form-check {
  border: 2px solid white;
}

#form-check:hover {
  background: rgba(255, 255, 255, 0.214);
}

::placeholder {
  color: white;
}

.disable {
  display: none;
}
</style>

<script>
export default {
  name: "RekomendasiSection",
  data() {
    return {
      active: true,
      next: true,
      nama: "",
    }
  },
  methods: {
    addForm() {
      this.active = !this.active
    },
    nextForm1() {
      this.next = !this.next
      document.getElementById("form-radio-1").classList.remove("disable")
    },
    nextForm2() {
      document.getElementById("form-radio-1").classList.add("disable")
      document.getElementById("form-radio-2").classList.remove("disable")
    },
    nextForm3() {
      document.getElementById("form-radio-2").classList.add("disable")
      document.getElementById("form-radio-3").classList.remove("disable")
    },
    nextForm4() {
      document.getElementById("form-radio-3").classList.add("disable")
      document.getElementById("form-radio-4").classList.remove("disable")
    },
    nextForm5() {
      document.getElementById("form-radio-4").classList.add("disable")
      document.getElementById("form-radio-5").classList.remove("disable")
    },
    nextForm6() {
      document.getElementById("form-radio-5").classList.add("disable")
      document.getElementById("form-radio-6").classList.remove("disable")
    },
    nextForm7() {
      document.getElementById("form-radio-6").classList.add("disable")
      document.getElementById("form-radio-7").classList.remove("disable")
    },
    nextForm8() {
      document.getElementById("form-radio-7").classList.add("disable")
      document.getElementById("form-radio-8").classList.remove("disable")
    },
    nextForm9() {
      document.getElementById("form-radio-8").classList.add("disable")
      document.getElementById("form-radio-9").classList.remove("disable")
    },
  }
}
</script>