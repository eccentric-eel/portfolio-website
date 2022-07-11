import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App        from './App.vue';
import splashPage from './components/splashPage/splashPage.vue';
import ImageModal from './components/ImageModal.vue';

import VueSplide  from '@splidejs/vue-splide';

const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',              
            component: splashPage,
            props: { page: "home" }
        },
        { 
            path: '/projects',
            component: splashPage,
            props: { page: "projects" }
        },
        { 
            path: '/resume',
            component: splashPage,
            props: { page: "resume" }
        },
        // { path: '/:notFound(.*)', redirect: '/' }
    ]
});

app.component('image-modal', ImageModal);

app.use(router);
app.use(VueSplide);
app.mount('#app');