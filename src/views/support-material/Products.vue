<template>
    <v-container>
        <div v-if="!showAddSupportMaterial" class="pl-4 d-flex flex-column">
            <div class="titleslight pa-2" align="center" justify="center">
                <v-btn
                    class="secondary"
                    depressed
                    @click="onShowSupportMaterial"
                >
                    <span>Añadir material de apoyo</span>
                </v-btn>
            </div>

            <div><h1>Nuestros Productos</h1></div>

            <div class="backgrey pa-10 d-flex flex-row flex-wrap">
                <v-col
                    class="pa-2 ma-0"
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <v-card
                        class="pt-2"
                        width="200"
                        height="180"
                        align="center"
                        justify="center"
                    >
                        <v-icon class="icon" v-text="item.icon" />
                        <v-card-text v-text="item.name"></v-card-text>

                        <v-btn
                            depressed
                            color="titleslight rounded-pill"
                            @click="reveal = true"
                        >
                            Ver
                        </v-btn>
                    </v-card>
                </v-col>
            </div>
        </div>

        <AddSupportMaterial v-if="showAddSupportMaterial" :onDismiss="onDismissSupportMaterial"></AddSupportMaterial>
    </v-container>
</template>

<script>
import AddSupportMaterial from './AddSupportMaterial';

export default {
    name: 'Products',

    components: {
        AddSupportMaterial,
    },

    data() {
        return {
            showAddSupportMaterial: false,
            items: [
                { name: 'Seif', icon: 'build' },
                { name: 'Seif módulos', icon: 'view_module' },
                { name: 'Controller', icon: 'gamepad' },
                { name: 'Visitantes robusto', icon: 'visibility' },
                { name: 'PTT', icon: 'all_inclusive' },
                { name: 'Controlpharm', icon: 'control_point' },
            ],
        };
    },

    methods: {
        onShowSupportMaterial() {
            this.showAddSupportMaterial = true;
        },

        onDismissSupportMaterial() {
            this.showAddSupportMaterial = false;
        },
    },
};
</script>

<style scoped>
.icon {
    font-size: 60px;
}
</style>
>
