<template>
  <div class="panier">
    <navbar /><!-- import component navbar -->
    <mypanier :panier="panier" /><!-- import component mypanier -->
    <bestSellers /><!-- import component bestSellers -->
    <footers /><!-- import component footers -->
  </div>
</template>

<script>
  import navbar from "@/components/navbar.vue"; /* import component navbar */
  import mypanier from "@/components/mypanier.vue"; /* import component mypanier */
  import bestSellers from "@/components/bestSellers.vue"; /* import component bestSellers */
  import footers from '@/components/footers.vue'; /* import component footers */

  export default {
      data(){
        return {
            panier: [],
        };
    },
    created() {
        if (!localStorage.getItem("panier")) {
            return;
        } else {
            this.panier = JSON.parse(localStorage.getItem("panier"));
        }
    },
    components: {
      navbar,
      mypanier,
      bestSellers,
      footers
    }
  }
</script>