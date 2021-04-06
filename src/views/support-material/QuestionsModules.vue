<template>
    <div class="d-flex flex-column">
        <div class="address">Vista principal > añadir material de apoyo</div>

        <div class="header-form">
            <div class="d-flex">
                <v-text-field
                    class="field"
                    v-model="search"
                    label="Buscar"
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                    solo
                ></v-text-field>

                <v-btn class="mt-2 ml-3 primary" @click="submit">
                    Filtrar
                </v-btn>
            </div>

            <v-btn class="mt-2 ml-10 primary" @click="submit"> Exportar </v-btn>
        </div>

        <v-container>
            <v-data-table
                :headers="headers"
                :items="items"
                sort-by="module"
                class="elevation-1"
            >
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-btn class="mt-2 ml-3" depressed @click="submit">
                            Añadir filtro
                        </v-btn>
                    </v-toolbar>
                </template>

                <template v-slot:item.actions="{ item }">
                    <div class="d-flex">
                        <v-icon class="mr-2" medium @click="deleteItem(item)">
                            visibility
                        </v-icon>
                        <v-icon class="mr-2" medium @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon class="mr-2" medium @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </div>
                </template>

                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize"> Reset </v-btn>
                </template>
            </v-data-table>
        </v-container>

        <v-dialog v-model="dialogEdit" max-width="900px">
            <v-card>
                <v-container>
                    <AddSupportMaterial :editItem="editedItem" />
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import AddSupportMaterial from './AddSupportMaterial';

export default {
    name: 'QuestionsModules',

    components: {
        AddSupportMaterial,
    },

    data() {
        return {
            headers: [
                { text: 'Id Pregunta', value: 'questionId' },
                { text: 'Fecha de creación', value: 'creationDate' },
                { text: 'Módulo', value: 'module' },
                { text: 'Categoría', value: 'category' },
                { text: 'Preguta', value: 'question' },
                { text: 'Respuesta', value: 'answer' },
                { text: 'Acciones', value: 'actions', sortable: false },
            ],
            items: [],

            editedIndex: -1,
            editedItem: {
                questionId: 0,
                creationDate: null,
                module: '',
                category: '',
                question: '',
                respuesta: '',
            },

            dialogEdit: false,
        };
    },

    created() {
        this.initialize();
    },

    methods: {
        initialize() {
            const items = [];
            for (let index = 0; index < 100; index++) {
                items.push({
                    questionId: index,
                    creationDate: new Date(),
                    module: 'Configuración',
                    category: 'login',
                    question: `Como valido mi código de conexión: ${index}`,
                    respuesta: `Respuesta ${index}`,
                });
            }

            this.items = items;
        },

        editItem(item) {
            this.editedIndex = this.items.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogEdit = true;
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1);
            this.closeDelete();
        },
    },
};
</script>

<style scoped>
.header-form {
    display: flex;
    flex-direction: row;
    background: #f8f8f8;
    padding: 12px;
    text-align: center;
    height: 80px;
}
</style>
>
