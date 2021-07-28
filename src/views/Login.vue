<template>
    <div class="login">
        <navbar /><!-- import component navbar -->
        <log /><!-- import component log -->
        <footers /><!-- import component footers -->
    </div>
</template>

<script>
    import navbar from "@/components/navbar.vue"; /* import component navbar */
    import log from "@/components/log.vue"; /* import component log */
    import footers from '@/components/footers.vue'; /* import component footers */

    export default {
        components: {
            navbar,
            log,
            footers
        }
    }
</script>