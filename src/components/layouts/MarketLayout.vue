<template>
    <div class="app bg-gray-100">
      <MarketHeader></MarketHeader>
      <router-view/>
    </div>
</template>

<script>
    import MarketHeader from '@/components/MarketHeader'
    export default {
        name: 'MarketLayout',
        components: {
            MarketHeader,
        }
    }
</script>