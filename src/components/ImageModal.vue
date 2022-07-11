<template>
  <section :class="{ 'active': modalStatus, 'fadeIn': modalAnimate }" >
    <div id="modalClickOut" @click="$emit('hideModal')"></div> 

    <div id="sliderContainer">
        <button id="popupClose" @click="$emit('hideModal')">&#10006;</button>
        <Splide v-if="modalStatus" :options="{rewind: true, start: modalPage}" aria-label="Project Images" id="slider">
            <SplideSlide>
                <picture>
                    <source media="(min-width: 900px)" :srcset="require(`@/assets/site-captures/${modalProject}-1.png`)">
                    <source media="(max-width: 900px)" :srcset="require(`@/assets/site-captures/mobile-${modalProject}-1.png`)">
                    <img :src="require(`@/assets/site-captures/${modalProject}-1.png`)" alt="Project Image" height="300">
                </picture>
            </SplideSlide>

            <SplideSlide>
                <picture>
                    <source media="(min-width: 900px)" :srcset="require(`@/assets/site-captures/${modalProject}-2.png`)">
                    <source media="(max-width: 900px)" :srcset="require(`@/assets/site-captures/mobile-${modalProject}-2.png`)">
                    <img :src="require(`@/assets/site-captures/${modalProject}-2.png`)" alt="Project Image" height="300">
                </picture>
            </SplideSlide>

            <SplideSlide>
                <picture>
                    <source media="(min-width: 900px)" :srcset="require(`@/assets/site-captures/${modalProject}-3.png`)">
                    <source media="(max-width: 900px)" :srcset="require(`@/assets/site-captures/mobile-${modalProject}-3.png`)">
                    <img :src="require(`@/assets/site-captures/${modalProject}-3.png`)" alt="Project Image" height="300">
                </picture>
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
        modalStatus:  Boolean,
        modalAnimate: Boolean,
    },
}
</script>

<style scoped lang="scss">
    section { 
        visibility: hidden;
        opacity: 1;
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 3;
        background: rgba(0,0,0, 0.7);

        &.active { visibility: visible }
        &.fadeIn { 
            animation: fadeIn .2s;
            animation-fill-mode: forwards;
        }

        @keyframes fadeIn {
            0%   {opacity: 0 }
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
        width: 90vw;
        background: #333;
        border: 1px solid #999;
        transform: translate(-50%, -50%);
    }

    #slider {
        display: flex;
        align-items: center;

        img {
            display: block;
            margin: 1.5rem auto;
            height: auto;
            width: auto;
            max-height: calc(90vh - 3rem);
            max-width: calc(90vw - 3rem);
            border: 1px solid #262626;
            box-shadow: 5px 5px 10px #1a1a1a;
            cursor: grab;
        }
    }
    #popupClose {
        position: absolute;
        top: -1rem;
        right: -1rem;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        font-size: .7rem;
        font-weight: bold;
        background: red;
        color: white;
        cursor: pointer;
        z-index: 20;
        transition: font-size .2s;

        &:hover { font-size: 1rem }
    }

    @media only screen and (max-width: 600px) {
        #slider {
            img { margin: 2.2rem auto }
        }

        #popupClose { 
            top: -.5rem;
            right: -.5rem;
            border-radius: .5rem;
        }
    }
</style>