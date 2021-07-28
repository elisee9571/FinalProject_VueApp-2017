<template>
    <div class="register">
        <navbar /><!-- import component navbar -->
        <reg /><!-- import component reg -->
        <footers /><!-- import component footers -->
    </div>
</template>

<script>
    import navbar from "@/components/navbar.vue"; /* import component navbar */
    import reg from "@/components/reg.vue"; /* import component reg */
    import footers from '@/components/footers.vue'; /* import component footers */

    export default {
        components: {
            navbar,
            reg,
            footers
        }
    }
</script>