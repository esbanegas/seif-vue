import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        primary: '#15ADC7',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        btncolor: '#15ADC7',
        headforms: '#D2EDF2',
        titlesdark: '#054278',
        titleslight: '#15ADC7',
        backgrey: '#F8F8F8',
        ntitlesdark: '#012362',
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
});
