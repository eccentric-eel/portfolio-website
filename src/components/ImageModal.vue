<template>
    <section :class="{ 'fadeIn': modalAnimate }">
        <div id="modalClickOut" @click="$emit('hideModal')"></div> 

        <div id="sliderContainer">
            <button id="popupClose" @click="$emit('hideModal')">&#10006;</button>
            
            <Splide :options="{ rewind: true, start: modalPage }" aria-label="Project Images" id="slider">
                <SplideSlide v-for="index in 3" :key="index">
                    <img :src="require(`@/assets/site-captures/${fileName}-${index}.png`)" alt="Project Image">
                </SplideSlide>
            </Splide>
        </div>
    </section>
</template>

<script>
    import '../stylesheets/splide/splide.min.css';

    export default {
        props: { 
            modalProject: String,
            modalPage:    Number,
            modalAnimate: Boolean,
            showMobile:   Boolean,
        },
        computed: {
            fileName: function() { return (this.showMobile) ? `mobile-${this.modalProject}` : this.modalProject }
        }
    }
</script>

<style scoped lang="scss">
    section { 
        position: fixed;
        opacity: 1;
        height: 100%;
        width: 100%;
        z-index: 3;
        background: rgba(0,0,0, 0.7);

        &.fadeIn { 
            animation: fadeIn .3s;
            animation-fill-mode: forwards;
        }

        @keyframes fadeIn {
            0%   { opacity: 0 }
            100% { opacity: 1 }
        }
    }

    #modalClickOut {
        position: fixed;
        height: 100%;
        width: 100%;
    }
    #sliderContainer {
        position: fixed;
        top: 50%;
        left: 50%;
        height: auto;
        min-height: 50vh;
        width: 90vw;
        background: #333;
        border: 1px solid #999;
        transform: translate(-50%, -50%);
    }

    #slider img {
        display: block;
        margin: 3rem auto;
        height: auto;
        width: auto;
        max-height: calc(90vh - 8rem);
        max-width: calc(90vw - 3rem);
        border: 1px solid #262626;
        box-shadow: 5px 5px 10px #1a1a1a;
        cursor: grab;
    }
    #popupClose {
        position: absolute;
        top: .5rem;
        right: .5rem;
        height: 2rem;
        width: 2rem;
        border: none;
        border-radius: 3px;
        font-size: 1rem;
        font-weight: bold;
        background: red;
        color: white;
        cursor: pointer;
        z-index: 20;
        transition: font-size .2s;

        &:hover { font-size: 1.3rem }
    }

    @media only screen and (max-width: 600px) {
        #slider img { margin: 2.2rem auto }
        #popupClose { 
            top: -.5rem;
            right: -.5rem;
            border-radius: .5rem;
        }
    }
</style>