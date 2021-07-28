<template>
    <div class="container">
        <div class="row">
            <div id="form-log" class="col-lg-6">
                <form @submit.prevent="oublier">
                    <p id="heading" for="mpou">Réinitialiser le mot de passe</p>
                    <div class="form-group">
                        <label>E-mail</label>
                        <input class="form-control" type="email" name="mpou" id="mpou" placeholder="Dupont@gmail.com"
                            v-model="email" required maxlength="60">
                    </div>
                    <p id="pord-desc">Nous vous enverrons un e-mail pour réinitialiser votre mot de passe.</p>
                    <button class="btn btn-log" type="submit">Envoyer</button>
                    <br><br>
                    <a @click="retour">Retour</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'oublie',
        data() {
            return {
                email: "",
            };
        },
        methods: {
            retour: function () {
                this.$router.go(-1);
            },
            oublier: function () {
                this.axios.post("http://localhost:3000/client/forgetpassword", {
                        email: this.email,
                    })
                    .then(() => {
                        alert('un mail va vous être envoyé');
                        this.$router.push({
                            name: 'Login'
                        })
                    })
                    .catch(() => {
                        alert("erreur: le mail n'est pas reconnu");
                    });
            },
        },
    }
</script>

<style>


</style>