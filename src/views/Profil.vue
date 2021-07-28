<template>
  <div class="profil">
    <navbar /><!-- import component navbar -->
    <div class="whitespaces"></div>

    <!-- profil client -->
    <div class="container">
      <div class="row">

        <div class="col-lg-4">
          <!-- name User -->
          <p id="heading" style="text-transform:capitalize;margin-left:0;">Bienvenue, <br> {{client.nom}}</p>
          <div id="profil-img">
            <img src="@/assets/profil.jpg" class="img">
          </div>
        </div>

        <div class="col-lg-6">
          <!-- form -->
          <form>
            <p id="heading">Mes informations</p>
            <!-- nom -->
            <div class="form-group">
              <label class="control-label" for="nom"> Nom Prénom: </label>
              <div>
                <input class="form-control" type="text" name="nom" id="nom" v-model="client.nom"
                  style="text-transform:capitalize;" required />
              </div>
            </div>

            <!-- email -->
            <div class="form-group">
              <label class="control-label" for="email"> Email: </label>
              <div>
                <input class="form-control" type="email" name="email" id="email" v-model="client.email" required
                  maxlength="60" />
              </div>
            </div>

            <!-- adresse -->
            <div class="form-group">
              <label class="control-label" for="email"> Adresse: </label>
              <div>
                <input class="form-control" type="text" name="adresse" id="adresse" v-model="client.adresse"
                  style="text-transform:uppercase;" />
              </div>
            </div>

            <!-- ville -->
            <div class="form-group">
              <label class="control-label" for="ville"> Ville: </label>
              <div>
                <input class="form-control" type="text" name="ville" id="ville" v-model="client.ville"
                  style="text-transform:uppercase;" />
              </div>
            </div>

            <!-- cp -->
            <div class="form-group">
              <label class="control-label" for="cp"> Cp: </label>
              <div>
                <input class="form-control" type="tel" name="cp" id="cp" v-model="client.cp" minlength="5"
                  maxlength="5" />
              </div>
            </div>

            <!-- pays -->
            <div class="form-group">
              <label class="control-label" for="pays"> Pays: </label>
              <div>
                <input class="form-control" type="text" name="pays" id="pays" v-model="client.pays"
                  style="text-transform:uppercase;" />
              </div>
            </div>

            <!-- tel -->
            <div class="form-group">
              <label class="control-label" for="tel"> Téléphone: </label>
              <div>
                <input class="form-control" type="tel" name="tel" id="tel" v-model="client.tel" minlength="10"
                  maxlength="10" />
              </div>
            </div>

            <!-- btn profil a jour -->
            <button @click="update" type="button" class="btn btn-log">
              Sauvegarder les modifications
            </button>
            <br><br>
            <!-- deconnexion -->
            <a class="link-a" @click="logout">Déconnexion</a>
          </form>
        </div>

      </div>
    </div>

    <footers /><!-- import component footers -->
  </div>
</template>

<script>
  import navbar from "@/components/navbar.vue"; /* import component navbar */
  import footers from '@/components/footers.vue'; /* import component footers */
  import VueJwtDecode from "vue-jwt-decode";

  export default {
    data() {
      return {
        email: "",
        client: {},
      };
    },
    created: function () {
      if (localStorage.getItem("token") === null) {
        this.$router.push({
          name: "Login"
        });
      } else {
        this.client = VueJwtDecode.decode(localStorage.getItem("token"));
        console.log(this.client);
      }
    },
    methods: {
      /* update profil */
      update: function () {
        this.axios
          .put(
            "http://localhost:3000/client/update/" + this.client.id,
            this.client
          )
          .then((res) => {
            if (res.status === 200) {
              localStorage.setItem("token", JSON.stringify(res.data.token));
              alert(`Votre profil a été mis à jour`);
            } else {
              alert(`Erreur: Votre profil n'a pas été mis à jour`);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },
      /* deconnexion */
      logout: function () {
        localStorage.removeItem("token");
        this.$router.push({
          name: "Login",
        });
      },
    },

    components: {
      navbar,
      footers
    }
  }
</script>

<style>
  #profil-img {
    position: absolute;
    top: 5%;
    left: 20%;
    width: 70%;
    z-index: -1;
    opacity: .4;
  }

  @media(max-width:992px) {
    #profil-img {
      display: none;
    }
  }
</style>