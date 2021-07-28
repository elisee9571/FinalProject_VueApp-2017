<template>
    <div class="paiement">
        <navbar /><!-- import component navbar -->

        <div class="whitespaces"></div>

        <div class="panier-sec">
            <p id="heading">Paiement</p>

            <div class="section">
                <div class="container">

                    <div class="row">
                        <table class="col-lg-7">
                            <!-- table coordonnée -->
                            <tbody class="table">
                                <tr colspan="1" id="table-desc">1. Coordonnées</tr>
                                <tr>
                                    <td colspan="2" class="td-left border-none">
                                        <p id="sous-desc">Nous utiliserons cet e-mail pour vous envoyer des détails et
                                            des mises à jour concernant votre commande.</p>
                                        <input class="form-control" type="email" name="email" id="email"
                                            v-model="client.email" required placeholder="Email" maxlength="60"/>
                                    </td>
                                </tr>
                                <br>
                                <tr id="table-desc">2. Adresse de livraion</tr>
                                <tr>
                                    <td colspan="2" class="td-left border-none">
                                        <p id="sous-desc">Entrez l’adresse physique du lieu de livraison de votre
                                            commande.</p>
                                        <form>
                                            <!-- nom -->
                                            <div class="form-group">
                                                <input class="form-control" type="text" name="nom" id="nom"
                                                    v-model="client.nom" required style="text-transform:capitalize;" placeholder="Nom Prénom"/>
                                            </div>

                                            <!-- adresse -->
                                            <div class="form-group">
                                                <input class="form-control" type="text" name="adresse" id="adresse"
                                                    v-model="client.adresse" required style="text-transform:uppercase;" placeholder="Adresse"/>
                                            </div>
                                            <div class="form-group">
                                                <input class="form-control" type="text" name="adresse" id="adresse"
                                                    placeholder="Appartement, suite, etc. (facultatif)" />
                                            </div>

                                            <div class="row justify-content-center">
                                                <!-- pays -->
                                                <div class="form-group col-6">
                                                    <input class="form-control" type="text" name="pays" id="pays"
                                                        v-model="client.pays" required style="text-transform:uppercase;" placeholder="Pays"/>
                                                </div>

                                                <!-- ville -->
                                                <div class="form-group col-6" style="padding-left:0">
                                                    <input class="form-control" type="text" name="ville" id="ville"
                                                        v-model="client.ville" required style="text-transform:uppercase;" placeholder="Ville"/>
                                                </div>
                                            </div>

                                            <!-- cp -->
                                            <div class="form-group col-6" style="padding-left:0">
                                                <input class="form-control" type="tel" name="cp" id="cp"
                                                    v-model="client.cp" required placeholder="Cp" minlength="5" maxlength="5"/>
                                            </div>

                                            <!-- tel -->
                                            <div class="form-group">
                                                <input class="form-control" type="tel" name="tel" id="tel"
                                                    v-model="client.tel" required placeholder="Téléphone" minlength="10" maxlength="10"/>
                                            </div>

                                        </form>
                                    </td>
                                </tr>
                                <tr id="table-desc">3. Option de livraion</tr>
                                <tr>
                                    <td class="td-left border-none">Livraison</td>
                                    <td class="border-none">0.00€</td>
                                </tr>
                                <br>
                                <tr id="table-desc">4. Moyen de paiement</tr>
                                <tr>
                                    <td colspan="2" class="td-left border-none">
                                        <div id="paypal-desc"><img class="img-paypal" src="@/assets/paypal.png">
                                            <br><br>
                                            Payer avec PayPal, vous pouvez payer avec votre carte de crédit si vous
                                            n’avez pas de compte PayPal.</div>
                                    </td>
                                </tr>
                                <br>
                                <tr>
                                    <td>
                                        <a href="/panier">Retour au panier</a>
                                    </td>
                                    <td>
                                        <form>
                                            <div style="display:none;">
                                                <div class="form-group">
                                                    <label for="amount">Montant</label>
                                                    <div class="input-group">
                                                        <input style="color:#333;" type="number" id="amount"
                                                            v-model="amount" class="form-control" />
                                                        <div class="">
                                                            <span class="input-group-text">€</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group" required>
                                                    <label class="label_paypal">Numéro de carte</label>
                                                    <div id="creditCardNumber" class="form-control"></div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="row justify-content-start">
                                                        <div class="col-6" style="padding:0;">
                                                            <label class="label_paypal">Date
                                                                d'expiration</label>
                                                            <div id="expireDate" class="form-control">
                                                            </div>
                                                        </div>
                                                        <div class="col-3" style="margin:0 20px;">
                                                            <label class="label_paypal">CVV</label>
                                                            <div id="cvv" class="form-control"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12" style="padding:0;" id="paypalButton"></div>
                                        </form>
                                    </td>

                                </tr>
                            </tbody>
                        </table>

                        <div class="col-lg-1"></div>
                        <div class="whitespaces"></div>

                        <!-- table resumer commande -->
                        <table class="col-lg-4">
                            <thead>
                                <tr>
                                    <th colspan="3" id="prod-desc">Résumé de la Commande</th>
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
                                        {{item.quantite}}
                                    </td>
                                    <td>{{ (item.quantite * item.prix_unitaire).toFixed(2) }}€
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">Sous-Total
                                        <br>
                                        <br>
                                        Livraion
                                        <br>
                                        Livraion à {{ client.ville }}, {{ client.cp }}, {{ client.pays }}
                                    </td>
                                    <td>{{ total }}€
                                        <br>
                                        <br>
                                        0.00€
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">Total</td>
                                    <td>{{ total }}€</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>

        <footers /><!-- import component footers -->
    </div>
</template>

<script>
    import navbar from "@/components/navbar.vue"; /* import component navbar */
    import footers from '@/components/footers.vue'; /* import component footers */

    import VueJwtDecode from "vue-jwt-decode";
    import braintree from "braintree-web";
    import paypal from "paypal-checkout";

    export default {
        data() {
            return {
                hostedFieldInstance: false,
                nonce: "",
                error: "",
                amount: "",
                client: {},
                Panier: {},
                produit: {},
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
            } else {
                this.client = VueJwtDecode.decode(localStorage.getItem("token"));
                console.log(this.client);
            }
            // eslint-disable-next-line no-console
            console.log("this.$route.params.total", this.$route.params.total);
            if (this.$route.params.total !== undefined) {
                this.amount = this.$route.params.total;
            } else {
                this.$router.push("/panier");
            }
            if (!localStorage.getItem("panier")) {
                return;
            } else {
                this.panier = JSON.parse(localStorage.getItem("panier"));
            }

        },

        methods: {
            payWithCreditCard() {
                if (this.hostedFieldInstance) {
                    this.error = "";
                    this.nonce = "";
                    this.hostedFieldInstance
                        .tokenize()
                        .then((payload) => {
                            // eslint-disable-next-line no-console
                            console.log(payload);
                            this.nonce = payload.nonce;
                        })
                        .catch((err) => {
                            // eslint-disable-next-line no-console
                            console.error(err);
                            this.error = err.message;
                        });
                }
            },
        },
        mounted() {
            braintree.client
                .create({
                    authorization: "sandbox_38gr7jbp_vb92jb8h3pz9h522",
                })
                .then((clientInstance) => {
                    let options = {
                        client: clientInstance,
                        styles: {
                            input: {
                                "font-size": "20px",
                                "font-family": "Open Sans",
                            },
                        },
                        fields: {
                            number: {
                                selector: "#creditCardNumber",
                                placeholder: "•••• •••• •••• ••••",
                            },
                            cvv: {
                                selector: "#cvv",
                                placeholder: "•••",
                            },
                            expirationDate: {
                                selector: "#expireDate",
                                placeholder: "•• / ••",
                            },
                        },
                    };
                    return Promise.all([
                        braintree.hostedFields.create(options),
                        braintree.paypalCheckout.create({
                            client: clientInstance
                        }),
                    ]);
                })
                .then((instances) => {
                    const hostedFieldInstance = instances[0];
                    const paypalCheckoutInstance = instances[1];
                    // Use hostedFieldInstance to send data to Braintree
                    this.hostedFieldInstance = hostedFieldInstance;

                    // Setup PayPal Button
                    return paypal.Button.render({
                            env: "sandbox",
                            style: {
                                label: "paypal",
                                size: "responsive",
                                shape: "rect",
                            },
                            payment: () => {
                                return paypalCheckoutInstance.createPayment({
                                    flow: "checkout",
                                    intent: "sale",
                                    amount: parseFloat(this.amount) > 0 ? this.amount : 10,
                                    displayName: "Braintree Testing",
                                    currency: "USD",
                                });
                            },
                            // eslint-disable-next-line no-unused-vars
                            onAuthorize: (data, options) => {
                                return paypalCheckoutInstance
                                    .tokenizePayment(data)
                                    .then((payload) => {
                                        // eslint-disable-next-line no-console
                                        console.log(payload);
                                        this.error = "";
                                        this.nonce = payload.nonce;
                                    });
                            },
                            onCancel: (data) => {
                                // eslint-disable-next-line no-console
                                console.log(data);
                                // eslint-disable-next-line no-console
                                console.log("Payment Cancelled");
                            },
                            onError: (err) => {
                                // eslint-disable-next-line no-console
                                console.error(err);
                                this.error =
                                    "An error occurred while processing the paypal payment.";
                            },
                        },
                        "#paypalButton"
                    );
                })
                // eslint-disable-next-line no-unused-vars
                .catch((err) => {});
        },
        components: {
            navbar,
            footers
        }
    }
</script>

<style>
    #table-desc {
        font-size: 25px;
        font-weight: bold;
    }

    .border-none {
        border: none !important;
    }

    p#sous-desc {
        font-family: "Larsseit";
        font-size: 16px !important;
    }

    .td-left {
        position: relative;
        padding-left: 25px !important;
    }

    .td-left::before {
        content: '';
        position: absolute;
        left: 4.5px;
        height: 90%;
        width: 1px;
        border-left: 1px solid #ccc;
    }

    #paypal-desc {
        border: 1px solid #ccc;
        padding: 15px;
    }

    .img-paypal {
        width: 100px;
    }
</style>