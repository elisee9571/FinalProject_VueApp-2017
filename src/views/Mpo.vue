<template>
  <div class="MotdePasse_Oublier">
    <navbar /><!-- import component navbar -->
    <oublie /><!-- import component oublie -->
    <footers /><!-- import component footers -->
  </div>
</template>

<script>
  import navbar from "@/components/navbar.vue"; /* import component navbar */
  import oublie from "@/components/oublie.vue"; /* import component oublie */
  import footers from '@/components/footers.vue'; /* import component footers */

  export default {
    components: {
      navbar,
      oublie,
      footers
    }
  }
</script>