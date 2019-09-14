import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const messages = {
    'fr': {

        menu : {
            home: 'Accueil',
            login: 'Se Connecter',
            register: 'S\'enregistrer',
        },
        content : {
            about: 'À propos du club',
            aboutText: 'Le Club BMW Montréal accueille les amoureux de voyages et de motos. ' +
                'Chaque année, le club organise de nombreuses sorties et évènements, le tout dans une ambiance amicale et détendue.',
            facebook:'Page Facebook',

            banner1title:'Sorties Organisées BMW',
            banner1content:'Un club de motards et de voyageurs',
            banner2title:'Pas seulement au Canada !',
            banner2content:'Le club part souvent aux États-unis, et organise des sorties au Mexique ',
            banner3title:'Visites',
            banner3content:'Nos sorties incluent des visites intéressantes',

        }
    },

    'en': {
        menu : {
            home: 'Home',
            login: 'Log In',
            register: 'Register',
        },
        content : {
            about: 'About the club',
            aboutText: 'The BMW Club Montreal welcomes travel and motorbikes addicts. ' +
                'Each year, the club organises many trips and events, all in a friendly and relaxed atmosphere',
            facebook:'Facebook Page',

            banner1title:'BMW Organized Trips',
            banner1content:'A club of bikers and travellers',
            banner2title:'Not only in Canada',
            banner2content:'The club very often goes to the US, and arranges trips to Mexico',
            banner3title:'Visits',
            banner3content:'Our trips usually include interesting visits',

        },
    }
};


export default new VueI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    messages: messages
})