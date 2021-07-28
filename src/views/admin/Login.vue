<template>
    <div class="container">
        <div class="row">

            <div id="form-log" class="col-lg-6">
                <form @submit.prevent="dologin2">
                    <p id="heading">Se connecter</p>

                    <div class="form-group">
                        <label>E-mail</label>
                        <input class="form-control" type="email" name="email" id="emaillogin"
                            placeholder="Dupont@gmail.com" v-model="emailloginadmin" required maxlength="60">
                    </div>
                    <div class="form">
                        <label>Mot de passe</label>
                        <input class="form-control" type="password" name="password" id="passwordlogin"
                            placeholder="••••••••••••" v-model="passwordloginadmin" required minlength="6"
                            maxlength="12">
                    </div>
                    <br><br>
                    <button class="btn btn-log">Se connecter</button>
                </form>
            </div>

            <div id="form-log" class="col-lg-6">
                <form @submit.prevent="doregister2">
                    <p id="heading">Créer un compte</p>

                    <div class="form-group">
                        <label>Nom Prénom</label>
                        <input class="form-control" type="text" name="nom" id="nom" placeholder="Dupont Pierre"
                            v-model="nom" required>
                    </div>
                    <div class="form-group">
                        <label>E-mail</label>
                        <input class="form-control" type="email" name="email" id="email" placeholder="Dupont@gmail.com"
                            v-model="email" required maxlength="60">
                    </div>
                    <div class="form">
                        <label>Mot de passe</label>
                        <input class="form-control" type="password" name="password" id="password"
                            placeholder="••••••••••••" v-model="password" required minlength="6" maxlength="12">
                    </div>
                    <br>
                    <button class="btn btn-log">S'inscrire</button>
                </form>
            </div>

        </div>
    </div>
</template>
<script>
    import jwt from "vue-jwt-decode";
    export default {
        name: "adminlogin",
        data() {
            return {
                nom: "",
                email: "",
                password: "",
                emailloginadmin: "",
                paswordloginadmin: "",
                role: 'admin'
            };
        },
        methods: {
            dologin2: function () {
                this.axios.post("http://localhost:3000/user/login", {
                        email: this.emailloginadmin,
                        password: this.passwordloginadmin
                    })
                    .then(res => {
                        if (res.data.auth) {
                            localStorage.setItem("auth", res.data.auth);
                            localStorage.setItem("token", res.data.token);
                            var user = jwt.decode(res.data.token);
                            if (user.role == "admin") {
                                this.$router.push({
                                    path: "/admin/Home"
                                });
                            } else {
                                window.location.reload();
                            }
                        } else {
                            alert(`Non connecté !`);
                            window.location.reload();
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })

            },
            doregister2: function () {

                this.axios.post("http://localhost:3000/user/register", {
                        nom: this.nom,
                        email: this.email,
                        password: this.password,
                        role: this.role
                    })
                    .then(res => {
                        if (res.data.auth) {
                            localStorage.setItem("auth", res.data.auth);
                            localStorage.setItem("token", res.data.token);
                            var user = jwt.decode(res.data.token);
                            if (user.role == "admin") {
                                this.$router.push({
                                    path: "/admin/Login"
                                });
                            } else {
                                window.location.reload();
                            }
                        } else {
                            alert(`Votre compte a été créé !`);
                            window.location.reload();
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })

            },

        }
    }
</script>

<style>
</style>