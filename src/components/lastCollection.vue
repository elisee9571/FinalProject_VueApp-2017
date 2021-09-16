<template>
    <div>
        <div class="whitespaces"></div>
        <div class="collection">
            <p id="heading">Latest collection</p>
            <div class="section prod-list">
                <div class="container-fluid">
                    <div class="row cards">
                        <div v-for="produit in produits" :key="produit.id" class="col-lg-3 prod">
                            <router-link :to="`/produit/${produit.id}`">
                                <p id="price">EUR {{ produit.prix }}€ </p>
                                <img :src="require(`@/assets/${produit.Images[0].image}.jpg`)" />
                                <p id="prod-desc">{{ produit.nom }}</p>
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'lastCollection',

        data() {
                  return {
                        produits: {},
                  };
            },
            created() {
            this.axios
                .get(`${this.$apiurl}produit/order2/4/`)
                .then((res) => {
                    this.produits = res.data.produits;
                })
                .catch((err) => {
                    alert(err);
                });
        },
        
    }
</script>