<template>
    <div>
        <div class="whitespaces"></div>
        <div class="container-fluid footer">
            <div class="section container">
                <footer>
                    <div class="row">
                        <div class="col-lg-4 block">
                            <p>2017, Av. des Champs-Elysées,
                                <br>
                                Paris. 75000,
                                <br>
                                FR</p>
                        </div>
                        <div class="col-lg-4 block">
                            <p><a id="link-footer" href="/#">Faq</a>
                                <br>
                                <a id="link-footer" href="/a_propos_de_nous">À Propos de nous</a>
                                <br>
                                <a id="link-footer" href="/contact">Contact</a>
                            </p>
                        </div>
                        <div class="col-lg-4 block">
                            <div class="medias">
                                <ul>
                                    <li>
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </li>
                                    <li>
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </li>
                                    <li>
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </li>
                                    <li>
                                        <ion-icon name="logo-pinterest"></ion-icon>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'footers',

    }
</script>

<style>
    /* FOOTER */

    .footer {
        padding: 30px 0;
        background: #f7f6f2;
    }

    .block {
        margin-top: 40px;
    }

    .footer .medias {
        top: 20px !important;
    }

    footer p {
        text-align: center;
        font-family: "Larsseit" !important;
        font-size: 14px !important;
    }

    footer #link-footer {
        color: #111 !important;
        font-family: "Larsseit";
        font-size: 14px;
        font-weight: 300;
        letter-spacing: unset;

    }

    .medias {
        position: absolute;
        bottom: 20px;
    }

    .medias ul {
        list-style: none;
    }

    .medias ul li {
        display: inline-block;
        margin-right: 20px;
    }

    @media(max-width: 992px) {
        .medias {
            position: absolute;
            justify-content: center;
            align-items: center;
            left: 50%;
            transform: translateX(-50%);
        }

        .medias ul {
            padding-left: 20px;
        }
    }
</style>