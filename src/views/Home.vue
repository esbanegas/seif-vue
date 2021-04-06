<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

        <AppNavigation appTitle="Test" />
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'Home',
    components: {
        AppNavigation,
    },
};
</script>
