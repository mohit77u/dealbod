<template>
    <div class="app bg-gray-100">
      <Header></Header>
      <router-view/>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    export default {
        name: 'MainLayout',
        components: {
            Header,
        }
    }
</script>