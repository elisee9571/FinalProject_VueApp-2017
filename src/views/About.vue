<template>
  <div class="about">
    <navbar /><!-- import component navbar -->
    <story /><!-- import component story -->
    <footers /><!-- import component footers -->
  </div>
</template>

<script>
  import navbar from "@/components/navbar.vue"; /* import component navbar */
  import story from "@/components/story.vue"; /* import component story */
  import footers from '@/components/footers.vue'; /* import component footers */

  export default {
    components: {
      navbar,
      story,
      footers
    }
  }
</script>

<style>
/* ABOUT PAGE */
.hero {
      height: 400px;
      background: #f7f6f2;
      position: relative;
}
#hero-title {
      position: absolute;
      font-family: "Playfair Display";
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
}

.content {
      margin: 50px 0;
      width: 65% !important;
}

@media(max-width: 992px) {
      .content {
            width: 90% !important;
      }
}

.content p {
      font-family: "Larsseit";
      font-weight: 300;
      color: rgba(0,0,0,0.6);
}

#citation {
      font-family: "Playfair Display";
      font-style: italic;
      font-size: 24px;
      padding: 30px 20px;
      margin: 20px 0;
      border: 1px solid rgba(0,0,0,0.1);
}
</style>