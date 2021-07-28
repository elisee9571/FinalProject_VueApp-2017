<template>
      <div class="nav">
            <div class="menu-open" @click="openNav">
                  <ion-icon name="menu"></ion-icon>
            </div>

            <div class="brand">
                  <span><a href="/">2017</a></span>
            </div>

            <a href="/profil" class="user">
                  <ion-icon name="person-outline"></ion-icon>
            </a>
            <a href="/panier" class="cart">
                  <ion-icon name="cart-outline"></ion-icon>
            </a>

            <div id="myNav" class="menu">
                  <!-- overlay -->
                  <div class="menu-close" @click="closeNav">
                        <ion-icon name="close"></ion-icon>
                  </div>

                  <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/boutique">Boutique</a></li>
                        <li><a href="/a_propos_de_nous">À Propos de nous</a></li>
                        <li><a href="/contact">Contact</a></li>
                  </ul>

                  <div class="media-menu">
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
</template>

<script>
      export default {
            name: 'navbar',

            methods: {
                  openNav: function () {
                        document.getElementById("myNav").style.width = "100%";
                  },
                  closeNav: function () {
                        document.getElementById("myNav").style.width = "0";
                  },
            }

      };
</script>

<style>
      /* NAVBAR */
      .nav {
            z-index: 1;
            position: fixed;
            width: 100%;
            height: 60px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .menu-open {
            position: absolute;
            line-height: 65px;
            left: 1.4em;
            font-size: 20px;
      }

      .brand span a {
            position: absolute;
            line-height: 60px;
            left: 50%;
            transform: translateX(-50%);
            font-family: 'Bigilla';
            text-transform: uppercase;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 4px;
            color: #333 !important;
      }

      .brand a:hover {
            text-decoration: none;
      }

      .user {
            position: absolute;
            line-height: 65px;
            right: 4rem;
            font-size: 18px;
            color: #333 !important;
      }

      .cart {
            position: absolute;
            line-height: 65px;
            right: 1em;
            font-size: 20px;
            color: #333 !important;

      }

      /* MENU */
      .menu {
            position: fixed;
            z-index: 5;
            width: 0;
            top: 0;
            left: 0;
            height: 100vh;
            background: #fff;
            border-right: 1px solid rgba(0, 0, 0, 0.1);
            overflow-x: hidden;
            transition: .5s;
      }

      .menu-close {
            position: relative;
            line-height: 60px;
            float: right;
            font-size: 20px;
            margin-right: 20px;
      }

      .menu ul {
            list-style: none;
            position: relative;
            top: 40%;
            left: 10%;
            transform: translate(0%, -50%);
      }

      .menu ul li {
            padding-bottom: 20px !important;
      }

      .menu ul li a {
            font-size: 12px;
      }

      .menu ul li a:hover {
            text-decoration: none;
      }

      .media-menu {
            position: relative;
            top: 50%;
      }

      .media-menu ul li {
            display: inline-block;
            padding-right: 10px;
      }
</style>