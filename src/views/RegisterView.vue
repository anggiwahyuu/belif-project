<template>
    <div class="container pt-4" style="padding-left: 28%; padding-right: 28%;">
        <div class="section-title">
            <h2>Daftar</h2>
            <p>Sudah punya akun? <span><router-link to="/register" style="text-decoration: none;">Login</router-link></span></p>
        </div>
        <form action="post">
            <label for="nama">Nama Lengkap</label> <br>
            <input type="text" name="nama" id="nama" placeholder="Masukkan Nama Lengkap" required> <br>

            <label for="email">Email</label> <br>
            <input type="email" name="email" id="email" placeholder="Masukkan Email" required> <br>

            <label for="password">Password</label> <br>
            <input type="password" name="password" id="password" placeholder="Masukkan Password" required> <br>

            <center><button class="btn px-4 py-1 mt-2">Daftar</button></center>
        </form>
    </div>
</template>

<style scoped>
button {
    background: #1977cc;
    color: white;
}

input[type=text] {
    width: 100%;
    margin-bottom: 5%;
}

input[type=email] {
    width: 100%;
    margin-bottom: 5%;
}

input[type=password] {
    width: 100%;
    margin-bottom: 5%;
}

button:hover {
    background: #3291e6;
    color: white;
}
</style>

<script>
export default {
    name: "RegisterSection"
}
</script>