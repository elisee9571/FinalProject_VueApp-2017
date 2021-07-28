<template>
  <div class="home">
    <navbar /><!-- import component navbar -->
    <hero /><!-- import component hero -->
    <products /><!-- import component products -->
    <banner /><!-- import component banner -->
    <categorie /><!-- import component categorie -->
    <footers /><!-- import component footers -->
  </div>
</template>

<script>
  import navbar from "@/components/navbar.vue"; /* import component navbar */
  import hero from "@/components/hero.vue"; /* import component hero */
  import products from "@/components/products.vue"; /* import component products */
  import banner from '@/components/banner.vue'; /* import component banner */
  import categorie from '@/components/categorie.vue'; /* import component categorie */
  import footers from '@/components/footers.vue'; /* import component footers */

  export default {
    components: {
      navbar,
      hero,
      products,
      banner,
      categorie,
      footers
    }
  }
</script>