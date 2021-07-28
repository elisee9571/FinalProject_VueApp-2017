<template>
    <div class="about-hero">
        <div class="container-fluid hero">
            <h1 id="hero-title">Contact</h1>
        </div>

        <div class="container content">
            <p>Vous pouver nous transmettre tout commentaire ou demande d'information sur les services offerts par 2017
                en utilisant
                le formulaire ci-dessous:
            </p>

            <form @submit.prevent="send">
                <div class="form-group">
                    <label>Nom Prénom</label>
                    <input type="text" name="nom" id="nom" v-model="nom" class="form-control" required>
                </div>

                <div class="row justify-content-center">
                    <div class="form-group col-lg-6">
                        <label>Email</label>
                        <input type="email" name="email" id="email" v-model="email" class="form-control" required maxlength="20">
                    </div>

                    <div class="form-group col-lg-6">
                        <label>Object</label>
                        <input type="text" name="subject" id="subject" v-model="subject" class="form-control" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Message</label>
                    <textarea rows="3" name="text" id="text" v-model="text" class="form-control" required></textarea>
                </div>

                <button class="btn btn-log">Envoyer</button>

            </form>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'forms',
        data() {
            return {
                nom: "",
                email: "",
                subject: "",
                text: "",
            }
        },
        methods: {
            send: function () {
                this.axios.post("http://localhost:3000/receivemail", {
                        nom: this.nom,
                        email: this.email,
                        subject: this.subject,
                        text: this.text
                    })
                    .then(res => {
                        if (res) {
                            this.$router.push({
                                name: 'Home'
                            })
                            alert(`Message envoyé.`);

                        } else {
                            alert(`Message non envoyé !`);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        },

    }
</script>

<style>

</style>