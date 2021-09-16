<template>
    <div class="">
        <navbar /><!-- import component navbar -->
        <div class="container checkmail">
            <div class="whitespaces"></div>

            <p id="heading">Votre mail est Validé</p>
            <br><br>
            <a class="link-a" onclick=".location.href ='/login'">Connexion</a>
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
                email: this.$route.params.email,
            };
        },

        created() {
            this.axios.post(`${this.$apiurl}client/validemail/`, {
                    email: this.email,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch(err => {
                    alert(err);
                });
        },
        components: {
            navbar,
            footers
        }
    }
</script>
<style>
.checkmail {
    height: calc(55vh - 60px);
}

</style>