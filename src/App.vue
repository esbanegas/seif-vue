<template>
    <v-app>
        <v-column>
            <AppNavigation />
        </v-column>

        <v-column>
            <v-main>
                <v-container fluid>
                    <Header />
                    <!-- <router-view /> -->
                    <Products />
                </v-container>
            </v-main>
        </v-column>
    </v-app>
</template>

<script>
import AppNavigation from './components/AppNavigation';
import Header from './components/Header';
import Products from './views/support-material/Products';
// import AddSupportMaterial from './views/support-material/AddSupportMaterial';

export default {
    name: 'App',

    components: {
        AppNavigation,
        Header,
        Products,
    },

    data: () => ({
        //
    }),
};
</script>
