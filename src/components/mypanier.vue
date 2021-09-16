<template>
    <div>
        <div class="whitespaces"></div>
        <div class="panier-sec">
            <p id="heading">Panier</p>

            <div class="section">
                <div class="container-fluid">
                    <div class="row">
                        <table class="col-lg-7">
                            <thead>
                                <tr>
                                    <th colspan="2" id="prod-desc">Produit</th>
                                    <th colspan="1" id="prod-desc">Total</th>
                                </tr>
                            </thead>
                            <tbody class="table">
                                <tr v-for="(item,index) in panier" :key="index" class="prod-sec">
                                    <td style="margin:0;
                                    padding:0;
                                    width:25%;">
                                        <img class="img" :src="require(`@/assets/${item.image}.jpg`)">
                                    </td>
                                    <td class="col-0">
                                        <p id="prod-desc">{{item.nom}}</p>
                                        {{ item.prix_unitaire }}.00€ 
                                        <br>
                                        <input style="margin-left:-10px;" type="button" class="btn" @click="updateqtn(index)" value="-">
                                        {{item.quantite}}
                                        <input type="button" class="btn" @click="update(index)" value="+">
                                        <br>
                                        <a class="link-a" @click="supprimer(index)">Supprimer</a>

                                    </td>
                                    <td>{{ (item.quantite * item.prix_unitaire).toFixed(2) }}€
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="col-lg-1"></div>

                        <table class="col-lg-4">
                            <thead>
                                <tr>
                                    <th colspan="1"></th>
                                    <th colspan="1" id="prod-desc">Total Panier</th>
                                </tr>
                            </thead>
                            <tbody class="table">
                                <tr>
                                    <td>Sous-Total
                                        <br>
                                        <br>
                                        Livraion
                                        <br>
                                        <a href="/profil">modifier l'adresse</a>
                                    </td>
                                    <td>{{ total }}€
                                        <br>
                                        <br>
                                        0.00€
                                    </td>
                                </tr>
                                <tr>
                                    <td>Expédition
                                        <br>
                                        <br>
                                        Livraison gratuite <br>0.00€</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Total <br><br>
                                        <a class="link-a" @click="valide(index)">Passer la commande</a></td>
                                    <td>{{ total }}€</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import VueJwtDecode from "vue-jwt-decode"; /* import du vuejwtdecode */

    export default {
        name: 'mypanier',
        props: ["panier"],
        data() {
            return {
                client: {},
            };
        },
        computed: {
            total: function () {
                let total = 0;
                for (let element of this.panier) {
                    total += element.prix_unitaire * element.quantite;
                }
                return total.toFixed(2);
            }
        },
        created: function () {
            if (localStorage.getItem("token") === null) {
                this.$router.push({
                    name: "Login"
                });
            }
        },
        methods: {
            update: function (index) {
                this.panier[index].quantite++;
                this.panier[index].soustotal =
                    this.panier[index].quantite * this.panier[index].prix_unitaire;
                console.log(this.panier);
                localStorage.removeItem("panier");
                localStorage.setItem("panier", JSON.stringify(this.panier));
            },
            /*  */
            updateqtn: function (index) {
                if (this.panier[index].quantite > 1) {
                    this.panier[index].quantite--;
                    console.log(this.panier);
                    localStorage.removeItem("panier");
                    localStorage.setItem("panier", JSON.stringify(this.panier));
                } else {
                    this.supprimer(index);
                }
            },
            /*  */
            supprimer: function (index) {
                this.panier.splice(index, 1);
                localStorage.removeItem("panier");
                localStorage.setItem("panier", JSON.stringify(this.panier));
            },
            /*  */
            valide: function () {
                if (localStorage.getItem("token")) {
                    var client = VueJwtDecode.decode(localStorage.getItem("token"));
                    var produitId = [];
                    var prix = [];
                    var quantite = [];
                    this.panier.forEach((item) => {
                        produitId.push(item.produitId);
                        prix.push(item.prix_unitaire);
                        quantite.push(item.quantite);
                    });
                    this.axios.post(`${this.$apiurl}commande/new/`, {
                            clientId: client.id,
                            panier: this.panier,
                            produitId: produitId,
                            prix: prix,
                            quantite: quantite,
                        })
                        .then((res) => {
                            console.log(res.data);
                            this.$router.push({
                                name: 'Paiement',
                                params: {
                                    total: this.total
                                },
                            });
                        })
                        .catch((err) => {
                            alert("error");
                            console.log(err);
                        });
                } else {
                    this.$router.push({
                        name: "Login"
                    });
                }
            },
        },

    }
</script>

<style>
    .panier-sec {
        padding: 40px 0;
    }

    .panier-sec .section {
        margin: -50px 0;
    }
</style>