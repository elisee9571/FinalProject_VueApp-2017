import Vue from "vue";
import VueRouter from "vue-router";

/* page liée à Home */
import Home from "../views/Home.vue";
import Boutique from "../views/Boutique.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

/* page liée au client */
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profil from "../views/Profil.vue";
import CheckMail from "../views/CheckMail.vue";
import Mpo from "../views/Mpo.vue";
import Updatepassword from "../views/Updatepassword.vue";

/* produit */
import panier from "../views/panier.vue";
import Paiement from "../views/Paiement.vue";

/* page not found */
import Notfound from "../views/Notfound.vue";

Vue.use(VueRouter);

const routes = [
    /* home */
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/boutique",
        name: "Boutique",
        component: Boutique,
    },
    {
        path: "/a_propos_de_nous",
        name: "About",
        component: About,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    /* produit */
    {
        path: "/produit/:id",
        name: "Product",
        component: () =>
            import ("../views/Product.vue"),
    },
    {
        path: "/panier",
        name: "panier",
        component: panier,
    },
    {
        path: "/paiement",
        name: "Paiement",
        component: Paiement,
    },
    /* client */
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/profil",
        name: "Profil",
        component: Profil,
    },
    {
        path: "/validemail/:email",
        name: "CheckMail",
        component: CheckMail,
    },
    {
        path: "/motdepasse_oublier",
        name: "Mpo",
        component: Mpo,
    },
    {
        path: "/updatepassword/:forget",
        name: "Updatepassword",
        component: Updatepassword,
    },
    /* page not found */
    {
        path: "*",
        name: "Notfound",
        component: Notfound,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;