<template>
    <div class="row prod-sec">
        <div class="col-lg-6 prod-img">
            <img src="@/assets/single-prod.jpg" alt="">
        </div>

        <div class="col-lg-4 prod-desc">
            <br><br>
            <p>La façon de commencer est d'arrêter de parler et de commencer à faire. 
                 Commencer avec nos outils et boostez votre productivité.</p>

            <div class="link">
                <a href="/boutique">Voir plus</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'banner',

    }
</script>

<style>
/*BANNER */
.prod-sec {
      width: 100%;
      border-top: 1px solid rgba(0,0,0,0.1);
      border-bottom: 1px solid rgba(0,0,0,0.1);
}

.prod-sec p {
      font-family: "Playfair Display";
      font-size: 24px;
      font-weight: 300;
}

@media(max-width: 992px) {
      .prod-sec {
            padding-left: 30px;
            width: 100%;
            border: none;
      }

      .prod-sec a {
            display: none;
      }
}


</style>