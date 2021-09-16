<template>
    <div class="updatePassword">
        <navbar /><!-- import component navbar -->

        <div class="container">
            <div class="row">
                <div id="form-log" class="col-lg-6">
                    <form @submit.prevent="up">
                        <p id="heading" for="pass">Réinitialiser le mot de passe</p>
                        <div class="form-group">
                            <label>E-mail</label>
                            <input class="form-control" type="password" name="pass" id="pass"
                                placeholder="nouveau mot de passe" v-model="password" required minlength="6" maxlength="12">
                                <br>
                            <button class="btn btn-log" type="submit">sauvegarder</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <footers /><!-- import component footers -->
    </div>
</template>

<script>
    import navbar from "@/components/navbar.vue"; /* import component navbar */
    import footers from '@/components/footers.vue'; /* import component footers */

    export default {
        data() {
            return {
                forget: this.$route.params.forget,
                password: "",
            };
        },

        methods: {
            up: function () {
                this.axios.post(`${this.$apiurl}client/updatepassword/`, {
                        password: this.password,
                        forget: this.forget,
                    })
                    .then(() => {
                        alert('Votre mot de passe à été modifié')
                        this.$router.push({
                            name: 'Login'
                        })
                    })
                    .catch(() => {
                        alert("erreur: Votre mot de passe n'à pas été modifié");
                    });
            },
        },
        components: {
            navbar,
            footers
        }
    }
</script>