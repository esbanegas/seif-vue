<template>
    <nav>
        <v-navigation-drawer app permanent class="primary" width="66">
            <div class="navigation">
                <v-btn depressed class="primary">
                    <span class="material-icons"> account_circle </span>
                </v-btn>

                <v-list class="pa-0 ma-0">
                    <v-list-item
                        class="pa-0 ma-0"
                        v-for="(item, index) in items"
                        :key="index"
                    >
                        <v-btn depressed class="primary">
                            <v-icon v-text="item.icon"></v-icon>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </div>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    name: 'AppNavigation',

    data() {
        return {
            selectedItem: 1,
            items: [
                { text: 'Real-Time', icon: 'mdi-clock' },
                { text: 'Audience', icon: 'mdi-account' },
                { text: 'Conversions', icon: 'mdi-flag' },
            ],
        };
    },
};
</script>

<style scoped>
.navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
>
