<template>
    <div class="app bg-gray-100">
      <MarketHeader></MarketHeader>
      <router-view/>
      <MarketFooter></MarketFooter>
    </div>
</template>

<script>
    import MarketHeader from '@/components/MarketHeader'
    import MarketFooter from '@/components/MarketFooter'
    export default {
        name: 'MarketLayout',
        components: {
            MarketHeader,
            MarketFooter,
        }
    }
</script>