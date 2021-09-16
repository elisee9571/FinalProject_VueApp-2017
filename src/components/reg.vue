<template>
    <div class="container">
        <div class="row">

            <div id="form-log" class="col-lg-6">
                <form @submit.prevent="doregister">
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

            <div id="form-log" class="col-lg-6">
                <form @submit.prevent="dologin">
                    <p id="heading">Se connecter</p>

                    <div class="form-group">
                        <label>E-mail</label>
                        <input class="form-control" type="email" name="email" id="emaillogin"
                            placeholder="Dupont@gmail.com" v-model="emaillogin" required maxlength="60">
                    </div>
                    <div class="form">
                        <label>Mot de passe</label>
                        <input class="form-control" type="password" name="password" id="passwordlogin"
                            placeholder="••••••••••••" v-model="passwordlogin" required minlength="6" maxlength="12">
                    </div>
                    <br>
                    <a href="/motdepasse_oublier">Mot de passe oublié</a>
                    <br><br>
                    <button class="btn btn-log">Se connecter</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name:'reg',
        data() {
            return {
                nom: "",
                email: "",
                password: "",
                emaillogin: "",
                passwordlogin: ""
            }
        },
        methods: {
            dologin: function () {
                this.axios.post(`${this.$apiurl}client/login/`, {
                        email: this.emaillogin,
                        password: this.passwordlogin
                    })
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem("token", res.data.token)
                            // une fois les donnes recuperer et stockés il va nous renvoyer sur notre page profil
                            this.$router.push({
                                name: 'Profil'
                            })
                        } else {
                            this.$router.push({
                                name: "Register",
                            })
                            alert(`Non connecté !`);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })

            },
            doregister: function () {

                this.axios.post(`${this.$apiurl}client/register/`, {
                        nom: this.nom,
                        email: this.email,
                        password: this.password
                    })
                    .then(res => {

                        console.log(res);
                        if (res.data.token) {

                            localStorage.setItem("token", res.data.token)

                            // une fois les donnes recuperer et stockés il va nous renvoyer sur Home
                        } else {
                            this.$router.push({
                                name: 'Home'
                            })
                            alert(`Vous allez recevoir un mail de confirmation !`);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })

            },
        },
    }
</script>

<style>
    form p#heading {
        margin-left: 0;
    }

    #form-log {
        margin-top: 100px;
    }

    .btn-log {
        padding-left: 0 !important;
        font-family: "Larsseit";
        text-transform: uppercase;
        font-size: 16px;
        color: grey !important;
    }

    .btn-log:hover {
        text-decoration: underline !important;
    }
</style>