<template>
  <div class="contact">
    <navbar /><!-- import component navbar -->
    <forms /><!-- import component forms -->
    <footers /><!-- import component footers -->
  </div>
</template>

<script>
  import navbar from "@/components/navbar.vue"; /* import component navbar */
  import forms from "@/components/forms.vue"; /* import component forms */
  import footers from '@/components/footers.vue'; /* import component footers */

  export default {
    components: {
      navbar,
      forms,
      footers
    }
  }
</script>