<template>
    <div class="notfound">
        <h1 id="desc-notfound">404</h1>
        <br>
        <p id="desc-notfound">Page non trouvée</p>
        <br>
        <a href="/">retour</a>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .notfound {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .notfound #desc-notfound {
        font-family: "Playfair Display";
        font-size: 5rem;
    }

    @media(max-width:900px) {
        .notfound #desc-notfound {
            font-size: 2.5rem;
        }
    }
</style>