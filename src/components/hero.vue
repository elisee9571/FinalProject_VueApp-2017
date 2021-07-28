<template>
    <div class="hero-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 hero-left">
                    <div class="slogan">
                        <p>Des outils utiles pour la planification, <br> la productivité et la créativité.</p>
                        <p>Creative Design</p>
                    </div>

                    <div class="livraison">
                        <p>Expédition gratuite sur les commandes de +25.00€
                        </p>
                    </div>
                </div>

                <div class="col-lg-6 hero-right">
                    <div class="hero-image">
                        <img src="@/assets/hero.jpg" class="img" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hero',

    }
</script>

<style>
    /* HERO SECTION */

    .hero-section {
        height: 100vh;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .hero-left {
        height: 100vh;
        background: #f7f6f2;
        z-index: -1;
    }

    .slogan {
        position: absolute;
        margin-top: 130px;
        margin-left: 40px;
        font-family: "Playfair Display";
        font-size: 24px;
        font-weight: 300;
    }

    a {
        color: grey !important;
        font-family: "Larsseit";
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    
    .link-a {
        color: grey !important;
        font-family: "Larsseit";
        font-size: 14px;
    }
    .link-a:hover {
        text-decoration: underline !important;
    }

    .livraison {
        position: absolute;
        bottom: 30px;
        margin-left: 40px;
        font-size: 14px;
        font-weight: 300;
    }

    .hero-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    img {
        width: 100%;
    }

    @media(max-width: 992px) {
        .hero-image {
            display: none;
        }
    }
</style>