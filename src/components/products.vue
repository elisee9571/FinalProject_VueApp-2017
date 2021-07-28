<template>
      <div class="section prod-list">
            <div class="container-fluid">
                  <div class="row cards">
                        <div v-for="produit in produits" :key="produit.id" class="col-lg-3 prod">
                              <router-link :to="`/produit/${produit.id}`">
                                    <p id="price">EUR {{ produit.prix }}.00€ </p>
                                    <img :src="require(`@/assets/${produit.Images[0].image}.jpg`)" />
                                    <p id="prod-desc">{{ produit.nom }}</p>
                              </router-link>
                        </div>

                  </div>
            </div>
      </div>
</template>

<script>
      export default {
            name: 'products',
            data() {
                  return {
                        produits: {},
                  };
            },
            created() {
            this.axios
                .get("http://localhost:3000/produit/order1/4")
                .then((res) => {
                    this.produits = res.data.produits;
                })
                .catch((err) => {
                    alert(err);
                });
        },
      }
</script>

<style>

.prod {
      margin-top: 20px;
}

.prod:hover a {
      text-decoration: none !important;
}

#prod-desc {
      margin-top: 16px;
      font-weight: 300;
      font-size: 16px;
}

#price {
      font-family: "Larsseit";
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 12px;
}

.prod-list #prod-desc {
      font-family: "Larsseit";
      color: grey;
}

</style>