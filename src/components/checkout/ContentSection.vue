<template>
    <section class="section-bg">
        <div class="container">
            <h4 class="fw-bold fs-5">Pilih Metode Pembayaran</h4>
            <div class="d-lg-flex">

                <div class="metode-list">
                    <ul>
                        <li data-aos="fade-up">
                            <a data-bs-toggle="collapse" style="text-decoration: none; padding-left: 0;" class="collapsed" data-bs-target="#metode-list-1">Transfer Melalui Virtual Account <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                            <p style="font-size: 13px; margin-top: -15px;" class=" text-black-50">Hanya menerima pembayaran di bank yang sama</p>
                            <div id="metode-list-1" class="collapse" data-bs-parent=".metode-list">
                                <div class="d-lg-flex flex-wrap mt-3">
                                    <div class="box me-3">
                                        <div class="logo d-flex flex-column justify-content-center align-items-center" id="bca" @click="addBCA()">
                                            <img src="@/assets/img/metode_bayar/logo_bca.png" alt="Logo BCA">
                                        </div>
                                    </div>
                                    <div class="box me-3">
                                        <div class="logo d-flex flex-column justify-content-center align-items-center" id="bni" @click="addBNI()">
                                            <img src="@/assets/img/metode_bayar/logo_bni.png" alt="Logo BNI">
                                        </div>
                                    </div>
                                    <div class="box me-3">
                                        <div class="logo d-flex flex-column justify-content-center align-items-center" id="bri" @click="addBRI()">
                                            <img src="@/assets/img/metode_bayar/logo_bri.png" alt="Logo BRI">
                                        </div>
                                    </div>
                                    <div class="box mt-lg-3">
                                        <div class="logo d-flex flex-column justify-content-center align-items-center" id="mandiri" @click="addMandiri()">
                                            <img src="@/assets/img/metode_bayar/logo_mandiri.png" alt="Logo Mandiri">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="200">
                            <a data-bs-toggle="collapse" style="text-decoration: none; padding-left: 0;" class="collapsed" data-bs-target="#metode-list-2">Dompet Digital <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                            <p style="font-size: 13px; margin-top: -15px;" class=" text-black-50">GoPay, Shopee Pay, dan DANA</p>
                            <div id="metode-list-2" class="collapse" data-bs-parent=".metode-list">
                                <div class="d-lg-flex flex-wrap mt-3">
                                    <div class="box me-3">
                                        <div class="logo d-flex flex-column justify-content-center align-items-center" id="gopay" @click="addGopay()">
                                            <img src="@/assets/img/metode_bayar/logo_gopay.png" alt="Logo GOPAY">
                                        </div>
                                    </div>
                                    <div class="box me-3">
                                        <div class="logo d-flex flex-column justify-content-center align-items-center" id="shopeepay" @click="addShopeepay()">
                                            <img src="@/assets/img/metode_bayar/logo_shopeepay.png" alt="Logo SHOPEEPAY">
                                        </div>
                                    </div>
                                    <div class="box">
                                        <div class="logo d-flex flex-column justify-content-center align-items-center" id="dana" @click="addDana()">
                                            <img src="@/assets/img/metode_bayar/logo_dana.png" alt="Logo DANA">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300">
                            <a data-bs-toggle="collapse" style="text-decoration: none; padding-left: 0;" class="collapsed" data-bs-target="#metode-list-3">Minimarket <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                            <p style="font-size: 13px; margin-top: -15px;" class=" text-black-50">Alfamart dan Indomaret</p>
                            <div id="metode-list-3" class="collapse" data-bs-parent=".metode-list">
                                <div class="d-lg-flex flex-wrap mt-3">
                                    <div class="box me-3">
                                        <div class="logo d-flex flex-column justify-content-center align-items-center" id="alfamart" @click="addAlfamart()">
                                            <img src="@/assets/img/metode_bayar/logo_alfamart.png" alt="Logo Alfamart">
                                        </div>
                                    </div>
                                    <div class="box">
                                        <div class="logo d-flex flex-column justify-content-center align-items-center" id="indomaret" @click="addIndomaret()">
                                            <img src="@/assets/img/metode_bayar/logo_indomaret.png" alt="Logo Indomaret">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="checkout ms-lg-4 rounded-3 p-3">
                    <h4 class="fs-6 fw-bold mb-3">Bundle</h4>
                    <div class="d-flex justify-content-between" style="margin-bottom: -15px;">
                        <p>Metode Pembayaran</p>
                        <p>{{ metodeBayar }}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Subtotal</p>
                        <p>Rp {{ $route.params.id }}</p>
                    </div>
                    <hr class="m-0">
                    <div class="d-flex justify-content-between fw-bold">
                        <p>Total</p>
                        <p>Rp {{ $route.params.id }}</p>
                    </div>
                    <center><button type="button" @click="btnSuccess()" class="btn more-btn mt-3">Beli Sekarang</button></center>
                    
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.metode-list {
  padding: 0 0;
  width: 70%;
}

.checkout {
    width: 25%;
    height: 230px;
    background: white;
}

.metode-list ul {
  padding: 0;
  list-style: none;
}

.metode-list li+li {
  margin-top: 15px;
}

.metode-list li {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  position: relative;
}

.metode-list a {
  display: block;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding: 0 30px;
  outline: none;
  cursor: pointer;
}

.metode-list .icon-show,
.metode-list .icon-close {
  font-size: 24px;
  position: absolute;
  right: 0;
  top: 0;
}

.metode-list p {
  margin-bottom: 0;
  padding: 10px 0 0 0;
}

.metode-list .icon-show {
  display: none;
}

.metode-list a.collapsed {
  color: #343a40;
}

.metode-list a.collapsed:hover {
  color: #1977cc;
}

.metode-list a.collapsed .icon-show {
  display: inline-block;
}

.metode-list a.collapsed .icon-close {
  display: none;
}

.box {
    width: 250px;
}

.logo {
    width: 250px;
    height:100px;
    box-shadow: 0px 2px 15px rgba(25, 119, 204, 0.1);
}

.logo img {
    width: 80%;
}

.logo-selected {
    border: 1px solid #1977cc;
}

.logo:hover {
    border: 1px solid #1977cc;
}

.more-btn {
  display: inline-block;
  background: #1977cc;
  padding: 6px 30px 8px 30px;
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

@media (max-width: 1200px) {
  .metode-list {
    padding: 0;
  }
}

@media (max-width: 992px) {
    .metode-list {
        width: 100%;
    }
    .box {
        width: 100%;
    }
    .logo {
        width: 100%;
        height: 13vh;
        margin: 15px 0;
    }
    .logo img {
        width: 50%;
    }
    .checkout {
        width: 100%;
    }
}
</style>

<script>
export default {
    name: "ContentCheckoutSection",
    data() {
        return {
            count: 0,
            metodeBayar: "-"
        }
    },
    methods: {
        addBCA() {
            this.count = 1
            this.metodeBayar = "Bank BCA"
            document.getElementById("bca").classList.add("logo-selected")
            document.getElementById("bni").classList.remove("logo-selected")
            document.getElementById("bri").classList.remove("logo-selected")
            document.getElementById("mandiri").classList.remove("logo-selected")
            document.getElementById("gopay").classList.remove("logo-selected")
            document.getElementById("shopeepay").classList.remove("logo-selected")
            document.getElementById("dana").classList.remove("logo-selected")
            document.getElementById("alfamart").classList.remove("logo-selected")
            document.getElementById("indomaret").classList.remove("logo-selected")
        },
        addBNI() {
            this.count = 2
            this.metodeBayar = "Bank BNI"
            document.getElementById("bca").classList.remove("logo-selected")
            document.getElementById("bni").classList.add("logo-selected")
            document.getElementById("bri").classList.remove("logo-selected")
            document.getElementById("mandiri").classList.remove("logo-selected")
            document.getElementById("gopay").classList.remove("logo-selected")
            document.getElementById("shopeepay").classList.remove("logo-selected")
            document.getElementById("dana").classList.remove("logo-selected")
            document.getElementById("alfamart").classList.remove("logo-selected")
            document.getElementById("indomaret").classList.remove("logo-selected")
        },
        addBRI() {
            this.count = 3
            this.metodeBayar = "Bank BRI"
            document.getElementById("bca").classList.remove("logo-selected")
            document.getElementById("bni").classList.remove("logo-selected")
            document.getElementById("bri").classList.add("logo-selected")
            document.getElementById("mandiri").classList.remove("logo-selected")
            document.getElementById("gopay").classList.remove("logo-selected")
            document.getElementById("shopeepay").classList.remove("logo-selected")
            document.getElementById("dana").classList.remove("logo-selected")
            document.getElementById("alfamart").classList.remove("logo-selected")
            document.getElementById("indomaret").classList.remove("logo-selected")
        },
        addMandiri() {
            this.count = 4
            this.metodeBayar = "Bank Mandiri"
            document.getElementById("bca").classList.remove("logo-selected")
            document.getElementById("bni").classList.remove("logo-selected")
            document.getElementById("bri").classList.remove("logo-selected")
            document.getElementById("mandiri").classList.add("logo-selected")
            document.getElementById("gopay").classList.remove("logo-selected")
            document.getElementById("shopeepay").classList.remove("logo-selected")
            document.getElementById("dana").classList.remove("logo-selected")
            document.getElementById("alfamart").classList.remove("logo-selected")
            document.getElementById("indomaret").classList.remove("logo-selected")
        },
        addGopay() {
            this.count = 5
            this.metodeBayar = "GOPAY"
            document.getElementById("bca").classList.remove("logo-selected")
            document.getElementById("bni").classList.remove("logo-selected")
            document.getElementById("bri").classList.remove("logo-selected")
            document.getElementById("mandiri").classList.remove("logo-selected")
            document.getElementById("gopay").classList.add("logo-selected")
            document.getElementById("shopeepay").classList.remove("logo-selected")
            document.getElementById("dana").classList.remove("logo-selected")
            document.getElementById("alfamart").classList.remove("logo-selected")
            document.getElementById("indomaret").classList.remove("logo-selected")
        },
        addShopeepay() {
            this.count = 6
            this.metodeBayar = "Shopee Pay"
            document.getElementById("bca").classList.remove("logo-selected")
            document.getElementById("bni").classList.remove("logo-selected")
            document.getElementById("bri").classList.remove("logo-selected")
            document.getElementById("mandiri").classList.remove("logo-selected")
            document.getElementById("gopay").classList.remove("logo-selected")
            document.getElementById("shopeepay").classList.add("logo-selected")
            document.getElementById("dana").classList.remove("logo-selected")
            document.getElementById("alfamart").classList.remove("logo-selected")
            document.getElementById("indomaret").classList.remove("logo-selected")
        },
        addDana() {
            this.count = 7
            this.metodeBayar = "DANA"
            document.getElementById("bca").classList.remove("logo-selected")
            document.getElementById("bni").classList.remove("logo-selected")
            document.getElementById("bri").classList.remove("logo-selected")
            document.getElementById("mandiri").classList.remove("logo-selected")
            document.getElementById("gopay").classList.remove("logo-selected")
            document.getElementById("shopeepay").classList.remove("logo-selected")
            document.getElementById("dana").classList.add("logo-selected")
            document.getElementById("alfamart").classList.remove("logo-selected")
            document.getElementById("indomaret").classList.remove("logo-selected")
        },
        addAlfamart() {
            this.count = 8
            this.metodeBayar = "Alfamart"
            document.getElementById("bca").classList.remove("logo-selected")
            document.getElementById("bni").classList.remove("logo-selected")
            document.getElementById("bri").classList.remove("logo-selected")
            document.getElementById("mandiri").classList.remove("logo-selected")
            document.getElementById("gopay").classList.remove("logo-selected")
            document.getElementById("shopeepay").classList.remove("logo-selected")
            document.getElementById("dana").classList.remove("logo-selected")
            document.getElementById("alfamart").classList.add("logo-selected")
            document.getElementById("indomaret").classList.remove("logo-selected")
        },
        addIndomaret() {
            this.count = 9
            this.metodeBayar = "Indomaret"
            document.getElementById("bca").classList.remove("logo-selected")
            document.getElementById("bni").classList.remove("logo-selected")
            document.getElementById("bri").classList.remove("logo-selected")
            document.getElementById("mandiri").classList.remove("logo-selected")
            document.getElementById("gopay").classList.remove("logo-selected")
            document.getElementById("shopeepay").classList.remove("logo-selected")
            document.getElementById("dana").classList.remove("logo-selected")
            document.getElementById("alfamart").classList.remove("logo-selected")
            document.getElementById("indomaret").classList.add("logo-selected")
        },
        btnSuccess() {
            if (this.count != 0) {
                this.$swal({
                    icon: "success",
                    title: "Pendaftaran Berhasil. Silahkan cek email"
                })
            } else {
                alert("Pilih Metode Pembayarannya Dulu Dong!!!")
            }
        }
    }
}
</script>