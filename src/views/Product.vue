<template>
      <div class="product">
            <navbar /><!-- import component navbar -->

            <div class="container-fluid">
                  <div class="row product-sec">
                        <div class="col-lg-6 prod-left">
                              <div class="hero-image">
                                    <a @click="retour">Retour</a>
                                    <img v-if="produit.Images" :src="require(`@/assets/${produit.Images[0].image}.jpg`)"
                                          class="img" />
                              </div>
                        </div>

                        <div class="col-lg-6 prod-right">
                              <div class="prod-opt">
                                    <h3 id="prod-name">{{ produit.nom }}</h3>
                                    <p id="price">EUR {{ produit.prix }}.00€</p>
                                    <p id="prod-desc">{{ produit.description }}</p>

                                    <div class="add-prod">
                                          <a @click="ajouter(produit.id, produit.nom, produit.prix, produit.Images[0].image)">
                                                Ajouter au panier</a>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>

            <categorie /><!-- import component categorie -->
            <footers /><!-- import component footers -->
      </div>
</template>

<script>
      import navbar from "@/components/navbar.vue"; /* import component navbar */
      import categorie from '@/components/categorie.vue'; /* import component categorie */
      import footers from '@/components/footers.vue'; /* import component footers */

      export default {
            data() {
                  return {
                        client: {},
                        panier: {},
                        produit: {},
                        id: this.$route.params.id,
                  };
            },
            created() {
                  console.log(this.produits); /* panier */
                  this.getLocalStorage(); /* panier */
                  this.axios
                        .get("http://localhost:3000/produit/getById/" + this.id)
                        .then((res) => {
                              console.log(res);
                              this.produit = res.data.produit;
                        })
                        .catch((err) => {
                              alert(err);
                        });
            },
            methods: {
                  retour: function () {
                        this.$router.go(-1);
                  },
                  ajouter: function (id, nom, prix, image) {
                        this.Panier = this.Panier || [];
                        localStorage.removeItem("panier");
                        alert(`Votre ${ nom } a été ajouté au panier.`);

                        if (this.Panier.length === 0) {
                              let quantite = 1;
                              this.Panier.push({
                                    produitId: id,
                                    nom: nom,
                                    quantite: quantite,
                                    prix_unitaire: prix,
                                    soustotal: quantite * prix,
                                    image: image,
                              });
                        } else {
                              let alreadyProduit = false;
                              this.Panier.forEach((item) => {
                                    if (item.produitId === id) {
                                          item.quantite++;
                                          item.soustotal = item.quantite * prix,
                                                alreadyProduit = true;
                                    }
                              });
                              if (alreadyProduit === false) {
                                    let quantite = 1;
                                    this.Panier.push({
                                          produitId: id,
                                          nom: nom,
                                          quantite: quantite,
                                          prix_unitaire: prix,
                                          soustotal: quantite * prix,
                                          image: image,
                                    });
                              }
                        }
                        localStorage.setItem("panier", JSON.stringify(this.Panier));
                  },
                  getLocalStorage() {
                        let getLocalSt = localStorage.getItem("panier");
                        if (getLocalSt != null || getLocalSt !== undefined) {
                              this.Panier = JSON.parse(getLocalSt);
                              console.log(this.Panier);
                        }
                  },
            },
            components: {
                  navbar,
                  categorie,
                  footers
            }

      }
</script>

<style>
      /* PRODUCT PAGE */

      .product-sec {
            padding-top: 60px;
            height: 100vh;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .product-sec .hero-image a:hover {
            text-decoration: underline !important;
            cursor: pointer;
      }

      @media(max-width: 992px) {
            .product-sec {
                  margin-bottom: 140px;
                  border-bottom: none !important;
            }
      }

      .prod-left {
            border-right: 1px solid rgba(0, 0, 0, 0.1);
      }

      .prod-opt {
            position: absolute;
            top: 50%;
            left: 40%;
            transform: translate(-50%, -50%);
      }

      #prod-name {
            font-family: "Playfair Display";
      }

      .prod-opt #price {
            padding: 16px 0;
      }

      @media(max-width: 992px) {
            .product-sec .hero-image {
                  display: block !important;
            }
            .product-sec .hero-image a{
                  display:none;
            }

            .prod-opt {
                  padding-top: 100px;
            }
      }

      .add-prod {
            margin: 50px 0;
            cursor: pointer;
      }

      .add-prod a {
            padding: 20px 40px;
            background: #000;
            font-weight: 300;
            letter-spacing: 4px;
            color: #fff !important;
            text-decoration: none;
            transition: 1s;
      }

      .add-prod:hover a {
            background: #444;
            transition: 0.3s linear;
      }
</style>