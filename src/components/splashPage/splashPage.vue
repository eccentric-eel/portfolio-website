<template>
    <image-modal v-if="modalStatus"
        v-model="showMobile"
        :modalAnimate="modalAnimate"
        :modalProject="modalProject"
        :modalPage="modalPage"
        :disableMobile="disableMobile"
        :showMobile="showMobile"
        @hideModal="hideModal" />
        
    <div id="mainContainer" :class="{ hideYScroll }">
        <div id="splashPage" :class="{ hideSplash, pushUpSplash, pushDownSplash }">
            <main-canvas />
            <Transition>
                <div v-show="showSplashText" id="splashContent">
                    <splash-text />
                    <splash-links @change-page="transitionPage" />
                </div>
            </Transition>
        </div>

        <nav-links :currentPage="currentPage" :activeStatus="activeStatus" @show-splash="showSplash" @show-page="showPage" />
        <pages-slider :scrollTo="scrollToPage" @showModal="showModal" />
    </div>
</template>

<script>
    import mainCanvas  from './canvas.vue';
    import navLinks    from '../NavLinks.vue';
    import splashText  from './splashText.vue';
    import splashLinks from './splashLinks.vue';
    import pagesSlider from '../PagesSlider.vue';

    export default {
        name: 'splashPage',
        components: {
            mainCanvas,
            navLinks,
            splashText,
            splashLinks,
            pagesSlider,
        },
        data() {
            return {
                currentPage:    this.page,
                scrollToPage:   this.page,
                showSplashText: false,
                disableMobile:  false,
                showMobile:     false,
                changedPage:    false,
                pushDownSplash: false,
                pushUpSplash:   false,
                modalStatus:    false,
                modalAnimate:   false,
                modalProject:   'qrifile',
                modalPage:      2,              
            }
        },
        mounted () {
            document.fonts.ready.then(() => { this.showSplashText = true });
        },
        computed: {
            hideYScroll:  function() { return (this.currentPage === 'home') ? true : false },
            hideSplash:   function() { return (this.page !== 'home')        ? true : false },
            activeStatus: function() {
                if(this.page === 'home' && this.changedPage === false) //directly to home page
                    return 'inactiveNoAnimation';
                if(this.page !== 'home' && this.changedPage === false) //directly to non-home page
                    return 'activeNoAnimation';
                if(this.currentPage === 'home')
                    return 'inactive';
                else
                    return 'active';            
            },
        },
        props: { page: String },
        methods: {
            showModal(fileParams) {
                this.modalProject  = fileParams.formattedTitle;
                this.modalPage     = fileParams.pageNumber;
                this.disableMobile = fileParams.disableMobile;
                this.showMobile    = fileParams.showMobile;
                this.modalStatus   = true;
                this.modalAnimate  = true;
            },
            hideModal() { 
                this.modalStatus  = false;
                this.modalAnimate = false;
            },
            transitionPage(toPage) {
                history.pushState({}, null, 'http://localhost:8080/' + toPage); //CHANGE THIS!

                this.pushDownSplash = false;
                this.pushUpSplash   = true;
                
                setTimeout(() => {
                    this.changedPage  = true;
                    this.currentPage  = toPage;
                    this.scrollToPage = toPage + 'FromBlank';
                }, 700);
            },
            showSplash() {
                history.pushState({}, null, 'http://localhost:8080/');

                if(this.currentPage === 'summary' || this.page === 'summary')
                    this.scrollToPage = 'blankFromSummary';
                if(this.currentPage === 'projects' || this.page === ' projects')
                    this.scrollToPage = 'blankFromProjects';

                setTimeout(() => {
                    this.currentPage    = 'home';
                    this.pushUpSplash   = false;
                    this.pushDownSplash = true;
                    this.changedPage    = true;
                }, 700);
            },
            showPage(page) {
                history.pushState({}, null, 'http://localhost:8080/' + page);

                if(this.currentPage === page)
                    return;

                if(page === 'summary' && this.page !== 'summary' || 
                  (page === 'summary' && this.page === 'summary' && this.changedPage)) { 
                    this.scrollToPage = 'summaryFromProjects';
                    this.currentPage  = 'summary';
                    this.changedPage  = true;
                }
                if(page === 'projects' && this.page !== 'projects' ||
                  (page === 'projects' && this.page === 'projects' && this.changedPage)) { 
                    this.scrollToPage = 'projectsFromSummary';
                    this.currentPage  = 'projects';
                    this.changedPage  = true;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #mainContainer {
        position: fixed;
        height: 100%;
        width: 100%;
        overflow-x: hidden;

        &.hideYScroll { overflow-y: hidden }
    }
    #splashPage { position: relative }
    #splashContent {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }
    .hideSplash { transform: translateY(calc(-100vh - 1px)) }
    .pushUpSplash { 
        animation: slideUp .4s ease-in;
        animation-fill-mode: forwards;
    }
    .pushDownSplash {
        animation: slideDown .4s ease-in;
        animation-fill-mode: forwards;
    }

    .v-enter-active, .v-leave-active { transition: opacity 0.5s ease }
    .v-enter-from, .v-leave-to { opacity: 0 }
    
    @keyframes slideUp {
        0% { transform: translateY(0vh) }
        100% { transform: translateY(calc(-100vh - 1px)) }
    }
    @keyframes slideDown {
        0% { transform: translateY(calc(-100vh - 1px)) }
        100% { transform: translateY(0vh) }
    }

    @media only screen and (max-width: 900px) {
   
    }
    @media only screen and (max-width: 600px) {
 
    }
    @media only screen and (max-width: 350px) {

    }
</style>