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
                    <input type="text" name="form-name" id="form-name" placeholder="Ketik Nama Kamu Disini"> 
                    <div class="more-btn mt-4" @click="nextForm1()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-1" class="disable">
                    <p class="fs-3">2. Lorem Ipsum Dolor Sit Amet</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Option 1
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 2
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 3
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm2()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-2" class="disable">
                    <p class="fs-3">3. Lorem Ipsum Dolor Sit Amet</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Option 4
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 5
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 6
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm3()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-3" class="disable">
                    <p class="fs-3">4. Lorem Ipsum Dolor Sit Amet</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Option 7
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 8
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 9
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm4()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-4" class="disable">
                    <p class="fs-3">5. Lorem Ipsum Dolor Sit Amet</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Option 10
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 11
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 12
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm5()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-5" class="disable">
                    <p class="fs-3">6. Lorem Ipsum Dolor Sit Amet</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Option 13
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 14
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 15
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm6()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-6" class="disable">
                    <p class="fs-3">7. Lorem Ipsum Dolor Sit Amet</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Option 16
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 17
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 18
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm7()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-7" class="disable">
                    <p class="fs-3">8. Lorem Ipsum Dolor Sit Amet</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Option 19
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 20
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 21
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm8()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-8" class="disable">
                    <p class="fs-3">9. Lorem Ipsum Dolor Sit Amet</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Option 22
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 23
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 24
                      </label>
                    </div>
                    <div class="more-btn mt-4" @click="nextForm9()" style="margin-top: 10px; cursor: pointer;">OK <i class="bx bx-chevron-right"></i></div>
                  </div>

                  <div id="form-radio-9" class="disable">
                    <p class="fs-3">10. Lorem Ipsum Dolor Sit Amet</p>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label fs-5" for="flexRadioDefault1">
                        Option 25
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 26
                      </label>
                    </div>
                    <div class="form-check mb-2 p-2 rounded" id="form-check">
                      <input class="form-check-input mx-1" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label fs-5" for="flexRadioDefault2">
                        Option 27
                      </label>
                    </div>
                    <button class="more-btn mt-4" style="margin-top: 10px;">OK <i class="bx bx-chevron-right"></i></button>
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

input[type=checkbox] {
  height: 22px;
  width: 22px;
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