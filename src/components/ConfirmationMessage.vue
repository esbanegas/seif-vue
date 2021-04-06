<template>
    <v-dialog v-model="isOpen" max-width="300px" v-click-outside="onDismiss">
        <v-card
            class="d-flex flex-column pa-8"
            width="300"
            height="200"
            align="center"
            justify="center"
        >
            <span class="material-icons icon-dialog"> check_circle </span>

            <span class="mt-2">{{ text }}</span>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'ConfirmationMessage',

    props: {
        text: {
            type: String,
            default: '',
        },

        isOpen: {
            type: Boolean,
            default: false,
        },

        onDismiss: {
            type: Object,
            default: () => {},
        },
    },
};
</script>

<style>
.icon-dialog {
    font-size: 90px;
    color: #d2edf2;
}
</style>
