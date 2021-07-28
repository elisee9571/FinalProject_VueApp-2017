<template>
      <div class="container-fluid">
            <div class="row section boutique">
                  <div class="col-lg-8">
                        <p>N'attend plus. Commencez où vous en êtes et travaillez avec les outils dont vous disposez, et
                              de meilleurs outils seront trouvés au fur et à mesure.</p>

                        <div class="link">
                              <a href="/boutique">Lire plus</a>
                        </div>
                  </div>
            </div>

            <div class="container-fluid">
                  <div class="row cards">
                        <div class="col-lg-3"></div>

                        <div class="col-lg-3 prod">
                              <img src="@/assets/prod-01.jpg" alt="">
                              <p id="prod-desc">Design original et vintage pour vous satisfaire et refleter notre
                                    marque.</p>
                        </div>

                        <div class="col-lg-3 prod">
                              <img src="@/assets/prod-02.jpg" alt="">
                              <p id="prod-desc">La discipline est notre meilleure atout, organiser votre travail pour
                                    être plus productif.</p>
                        </div>

                        <div class="col-lg-3 prod">
                              <img src="@/assets/prod-03.jpg" alt="">
                              <p id="prod-desc">Fin et leger, rien de mieux quand on passe inaperçu.</p>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script>
      export default {
            name: 'categorie',

      }
</script>

<style>
      /* SECTON BASIC */
      .section {
            padding: 80px 40px;
      }

      .section p {
            font-family: "Playfair Display";
            font-size: 24px;
            font-weight: 300;
      }
</style>