<template>
    <div class="d-flex flex-column">
        <div class="address">Vista principal > añadir material de apoyo</div>

        <form id="form" width="200">
            <div class="header-form">
                <strong>Material de apoyo</strong>
            </div>
            <v-container>
                <v-row>
                    <v-col class="d-flex">
                        <span class="pt-3">Producto*</span>
                        <v-select
                            class="ml-2 field"
                            :items="products"
                            v-model="productSelected"
                            label="Seleccione el producto"
                            solo
                        ></v-select>
                    </v-col>

                    <v-col class="d-flex">
                        <span class="pt-3">Módulo*</span>
                        <v-select
                            class="ml-2 field"
                            :items="modules"
                            v-model="moduleSelected"
                            label="Seleccione el módulo"
                            solo
                        ></v-select>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="d-flex">
                        <span class="pt-3">Categoria*</span>
                        <v-select
                            class="ml-2 field"
                            :items="categories"
                            v-model="categorySelected"
                            label="Seleccione la categoría"
                            solo
                        ></v-select>
                    </v-col>

                    <v-col class="d-flex">
                        <span class="pt-3">Entorno*</span>
                        <v-select
                            class="ml-2 field"
                            :items="environments"
                            v-model="enviromentSelected"
                            label="Seleccione el entorno"
                            solo
                        ></v-select>
                    </v-col>
                </v-row>

                <v-row>
                    <span>Pregunta*</span>
                    <v-text-field
                        class="field"
                        v-model="question"
                        :error-messages="nameErrors"
                        :counter="200"
                        label="Pregunta"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                        solo
                    ></v-text-field>
                </v-row>

                <v-row>
                    <span>Respuesta*</span>
                    <v-textarea
                        class="field"
                        v-model="answer"
                        solo
                        name="input-7-4"
                        label="Ingrese su respuesta aquí..."
                    ></v-textarea>
                </v-row>
            </v-container>

            <v-row align="center" justify="center">
                <v-btn class="mr-4 primary" @click="submit"> Añadir </v-btn>
                <v-btn @click="clear"> Cancelar </v-btn>
            </v-row>
        </form>

        <v-dialog v-model="isOpenDialog" max-width="300px">
            <v-card
                class="d-flex flex-column pa-8"
                width="300"
                height="200"
                align="center"
                justify="center"
            >
                <span class="material-icons icon-dialog"> check_circle </span>

                <span class="mt-2">Pregunta creada</span>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'AddSupportMaterial',

    props: {
        onDismiss: {
            type: Object,
            default: () => {},
        },
    },

    data() {
        return {
            productSelected: null,
            products: ['producto1', 'producto2', 'producto3'],

            moduleSelected: null,
            modules: ['modulo1', 'modulo2', 'modulo3'],

            categorySelected: null,
            categories: ['category1', 'category2'],

            enviromentSelected: null,
            environments: ['Entorno1', 'Entorno2', 'Entorno3'],

            question: null,
            answer: null,

            isOpenDialog: false,
        };
    },

    methods: {
        submit: function () {
            this.isOpenDialog = true;
        },

        clear() {
            this.productSelected = null;
            this.moduleSelected = null;
            this.categorySelected = null;
            this.enviromentSelected = null;
            this.question = null;
            this.answer = null;

            this.onDismiss();
        },
    },
};
</script>

<style scoped>
.address {
    background: #f8f8f8;
    padding: 12px;
}

.header-form {
    background: #f8f8f8;
    padding: 12px;
    text-align: center;
}

#form {
    width: 80%;
    margin: 100px auto;
    padding-bottom: 20px;
    border: 2px solid #f8f8f8;
}

.icon-dialog {
    font-size: 90px;
    color: #d2edf2;
}
</style>
>
