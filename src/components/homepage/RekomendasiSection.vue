<template>
    <section id="rekomendasi" class="rekomendasi">
      <div class="container">

        <div class="section-title">
          <h2>Rekomendasi</h2>
        </div>

        <div class="container p-5 rounded-5" style="background: #1977cc;">
          <div class="text-white d-md-flex">
            <div class="left-content" id="left-content">
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
                    <div class="more-btn mt-4" @click="removeForm()" style="margin-top: 10px; margin-right: 10px; cursor: pointer;"><i class="bx bx-chevron-left"></i> Sebelumnya</div>
                    <div class="more-btn mt-4" @click="nextForm1()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-1" class="disable">
                    <p class="fs-3">2. Hai, boleh tau gak diantara penyataan ini mana yang paling sesuai dengan kamu?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault1" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Introvert
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault1" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Ekstrovert
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault1" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Emosional
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="prevForm1()" style="margin-top: 10px; margin-right: 10px; cursor: pointer;"><i class="bx bx-chevron-left"></i> Sebelumnya</div>
                    <div class="more-btn mt-4" @click="nextForm2()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-2" class="disable">
                    <p class="fs-3">3. Bagaimana perasaanmu saat ini?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault2" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Senang/Gembira
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault2" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Sedih/Khawatir
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault2" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Kesepian
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="prevForm2()" style="margin-top: 10px; margin-right: 10px; cursor: pointer;"><i class="bx bx-chevron-left"></i> Sebelumnya</div>
                    <div class="more-btn mt-4" @click="nextForm3()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-3" class="disable">
                    <p class="fs-3">4. Apa kamu bisa mengendalikan emosimu?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault3" id="flexRadioDefault3">
                      <label class="form-check-label fs-5" for="flexRadioDefault3">
                        Tergantung situasi
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault3" id="flexRadioDefault3">
                      <label class="form-check-label fs-5" for="flexRadioDefault3">
                        Tentu saja bisa
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault3" id="flexRadioDefault3">
                      <label class="form-check-label fs-5" for="flexRadioDefault3">
                        Tidak bisa
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="prevForm3()" style="margin-top: 10px; margin-right: 10px; cursor: pointer;"><i class="bx bx-chevron-left"></i> Sebelumnya</div>
                    <div class="more-btn mt-4" @click="nextForm4()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-4" class="disable">
                    <p class="fs-3">5. Apasih yang membuatmu kesulitan dalam mengatasi masalah?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault4" id="flexRadioDefault4">
                      <label class="form-check-label fs-5" for="flexRadioDefault4">
                        Saya sudah mencoba menyelesaikan masalah sendiri tapi tidak berhasil
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault4" id="flexRadioDefault4">
                      <label class="form-check-label fs-5" for="flexRadioDefault4">
                        Saya malu bercerita dengan orang lain/psikolog
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault4" id="flexRadioDefault4">
                      <label class="form-check-label fs-5" for="flexRadioDefault4">
                        Saya tidak memiliki biaya untuk konseling
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="prevForm4()" style="margin-top: 10px; margin-right: 10px; cursor: pointer;"><i class="bx bx-chevron-left"></i> Sebelumnya</div>
                    <div class="more-btn mt-4" @click="nextForm5()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-5" class="disable">
                    <p class="fs-3">6. Dalam 2 minggu terakhir, seberapa sering kamu merasa khawatir atau putus asa?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault5" id="flexRadioDefault5">
                      <label class="form-check-label fs-5" for="flexRadioDefault5">
                        Tidak pernah
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault5" id="flexRadioDefault5">
                      <label class="form-check-label fs-5" for="flexRadioDefault5">
                        Hampir setiap hari
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault5" id="flexRadioDefault5">
                      <label class="form-check-label fs-5" for="flexRadioDefault5">
                        Beberapa hari
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="prevForm5()" style="margin-top: 10px; margin-right: 10px; cursor: pointer;"><i class="bx bx-chevron-left"></i> Sebelumnya</div>
                    <div class="more-btn mt-4" @click="nextForm6()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-6" class="disable">
                    <p class="fs-3">7. Dalam satu bulan terakhir, apakah kamu merasa tidak bahagia dan tertekan?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault6" id="flexRadioDefault6">
                      <label class="form-check-label fs-5" for="flexRadioDefault6">
                        Tidak pernah
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault6" id="flexRadioDefault6">
                      <label class="form-check-label fs-5" for="flexRadioDefault6">
                        Hampir setiap hari
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault6" id="flexRadioDefault6">
                      <label class="form-check-label fs-5" for="flexRadioDefault6">
                        Beberapa hari
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="prevForm6()" style="margin-top: 10px; margin-right: 10px; cursor: pointer;"><i class="bx bx-chevron-left"></i> Sebelumnya</div>
                    <div class="more-btn mt-4" @click="nextForm7()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-7" class="disable">
                    <p class="fs-3">8. Dalam 2 minggu terakhir, seberapa sering kamu sulit berkonsentrasi pada sesuatu?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault7" id="flexRadioDefault7">
                      <label class="form-check-label fs-5" for="flexRadioDefault7">
                        Tidak pernah
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault7" id="flexRadioDefault7">
                      <label class="form-check-label fs-5" for="flexRadioDefault7">
                        Hampir setiap hari
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault7" id="flexRadioDefault7">
                      <label class="form-check-label fs-5" for="flexRadioDefault7">
                        Beberapa kali
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="prevForm7()" style="margin-top: 10px; margin-right: 10px; cursor: pointer;"><i class="bx bx-chevron-left"></i> Sebelumnya</div>
                    <div class="more-btn mt-4" @click="nextForm8()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-8" class="disable">
                    <p class="fs-3">9. Dalam 2 minggu terakhir, seberapa sering kamu kurang nafsu makan / terlalu banyak makan?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault8" id="flexRadioDefault8">
                      <label class="form-check-label fs-5" for="flexRadioDefault8">
                        Tidak pernah
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault8" id="flexRadioDefault8">
                      <label class="form-check-label fs-5" for="flexRadioDefault8">
                        Hampir setiap hari
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault8" id="flexRadioDefault8">
                      <label class="form-check-label fs-5" for="flexRadioDefault8">
                        Beberapa hari
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="prevForm8()" style="margin-top: 10px; margin-right: 10px; cursor: pointer;"><i class="bx bx-chevron-left"></i> Sebelumnya</div>
                    <div class="more-btn mt-4" @click="nextForm9()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-9" class="disable">
                    <p class="fs-3">10. Mana yang menjadi keinginanmu?</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault9" id="flexRadioDefault9">
                      <label class="form-check-label fs-5" for="flexRadioDefault9">
                        Hidup bahagia
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault9" id="flexRadioDefault9">
                      <label class="form-check-label fs-5" for="flexRadioDefault9">
                        Bisa berhenti khawatir/overthinking
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="radio" name="flexRadioDefault9" id="flexRadioDefault9">
                      <label class="form-check-label fs-5" for="flexRadioDefault9">
                        Jauh dari masalah
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="prevForm9()" style="margin-top: 10px; margin-right: 10px; cursor: pointer;"><i class="bx bx-chevron-left"></i> Sebelumnya</div>
                    <div class="more-btn mt-4" @click="addResult()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                </form>
              </div>
            </div>
            <div class="right-content" id="right-content">
              <img src="../../assets/img/belif1.jpg" class="rounded-circle" style="width: 100%;" alt="Belif">
            </div>

            <div class="left-content-2 disable" id="left-content-2">
              <img src="@/assets/img/konsultasi.jpg" class="rounded-5" style="width: 100%;" alt="Image Konsultasi">
            </div>
            <div class="right-content-2 disable" id="right-content-2">
              <p class="fs-5 fw-semibold">{{ textResult }}</p>
              <p>Klik tombol di bawah untuk mulai mentoring ya!</p>
              <router-link :to="{name: 'home', hash: '#layanan'}" class="more-btn" style="text-decoration: none;">Mulai Mentoring</router-link>
            </div>

          </div>

        </div>
      </div>
    </section>
</template>

<style scoped>
.left-content {
  width: 100%;
  overflow: hidden;
}

.right-content {
  width: 30%;
}

.left-content-2 {
  width: 40%;
}

.right-content-2 {
  width: 100%;
  padding-left: 40px;
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

@media (max-width: 768px) {
  .left-content-2 {
    width: 100%;
  }

  .right-content-2 {
    padding: 0;
    padding-top: 20px;
  }
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
      score: Int32Array,
      textResult: "Berdasarkan hasil tes, Anda cenderung membutuhkan seorang pendengar, arahan, solusi praktis, serta langkah-langkah atas masalah Anda. Masalah yang Anda alami mungkin tidak berpotensi membahayakan diri Anda dan orang lain. Oleh karena itu, Anda direkomendasikan menggunakan layanan konsultasi bersama dengan mentor Belif."
    }
  },
  methods: {
    addForm() {
      this.active = !this.active
    },
    nextForm1() {
      let nama = document.getElementById("form-name").value
      if (nama != "") {
        this.nama = nama
        this.next = !this.next
        document.getElementById("form-radio-1").classList.remove("disable")
      } else {
        alert("Isi Namanya Dulu Cuy!!!")
      }
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

    removeForm() {
      this.active = !this.active
    },
    prevForm1() {
      this.next = !this.next
      document.getElementById("form-radio-1").classList.add("disable")
    },
    prevForm2() {
      document.getElementById("form-radio-1").classList.remove("disable")
      document.getElementById("form-radio-2").classList.add("disable")
    },
    prevForm3() {
      document.getElementById("form-radio-2").classList.remove("disable")
      document.getElementById("form-radio-3").classList.add("disable")
    },
    prevForm4() {
      document.getElementById("form-radio-3").classList.remove("disable")
      document.getElementById("form-radio-4").classList.add("disable")
    },
    prevForm5() {
      document.getElementById("form-radio-4").classList.remove("disable")
      document.getElementById("form-radio-5").classList.add("disable")
    },
    prevForm6() {
      document.getElementById("form-radio-5").classList.remove("disable")
      document.getElementById("form-radio-6").classList.add("disable")
    },
    prevForm7() {
      document.getElementById("form-radio-6").classList.remove("disable")
      document.getElementById("form-radio-7").classList.add("disable")
    },
    prevForm8() {
      document.getElementById("form-radio-7").classList.remove("disable")
      document.getElementById("form-radio-8").classList.add("disable")
    },
    prevForm9() {
      document.getElementById("form-radio-8").classList.remove("disable")
      document.getElementById("form-radio-9").classList.add("disable")
    },

    addResult() {
      document.getElementById("left-content").classList.add("disable")
      document.getElementById("right-content").classList.add("disable")

      document.getElementById("left-content-2").classList.remove("disable")
      document.getElementById("right-content-2").classList.remove("disable")
    }
  }
}
</script>