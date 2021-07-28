<template>
  <div class="boutique">
    <navbar /><!-- import component navbar -->
    <bestSellers /><!-- import component bestSellers -->
    <banner /><!-- import component banner -->
    <lastCollection /><!-- import component lastCollection -->
    <categorie /><!-- import component categorie -->
    <footers /><!-- import component footers -->
  </div>
</template>

<script>
  import navbar from "@/components/navbar.vue"; /* import component navbar */
  import bestSellers from "@/components/bestSellers.vue"; /* import component bestSellers */
  import banner from '@/components/banner.vue'; /* import component banner */
  import lastCollection from '@/components/lastCollection.vue'; /* import component lastCollection */
  import categorie from '@/components/categorie.vue'; /* import component categorie */
  import footers from '@/components/footers.vue'; /* import component footers */

  export default {
    components: {
      navbar,
      bestSellers,
      banner,
      lastCollection,
      categorie,
      footers
    }
  }
</script>

<style>
.collection {
      padding: 40px 0;
      border-bottom: 1px solid rgba(0,0,0,0.1);
}

#heading {
      font-family: "Playfair Display";
      font-size: 20px;
      margin-left: 50px;
      padding-bottom: 0;
      position: relative;
      display: inline-block;
}

#heading::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #ece1b6;
}

.collection .section {
      margin: -50px 0;
}

</style>