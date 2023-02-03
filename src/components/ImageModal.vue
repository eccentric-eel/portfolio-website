<template>
    <section :class="{ 'fadeIn': modalAnimate }">
        <div id="modalClickOut" @click="$emit('hideModal')"></div> 

        <div id="modalInner">
            <div class="closeContainer">
                <button @click="$emit('hideModal')">&#10006;</button>
            </div>

            <Splide :options="{ rewind: true, start: modalPage }" aria-label="Project Images" id="slider">
                <SplideSlide v-for="index in 3" :key="index">
                    <img :src="require(`@/assets/site-captures/${fileName}-${index}.png`)" alt="Project Image">
                </SplideSlide>
            </Splide>

            <div class="screenBtns">
                <button :class="{'active': !showMobile}" @click="showMobile = false">Desktop</button>
                <button v-if="!disableMobile" :class="{'active': showMobile}" @click="showMobile = true">Mobile</button>
            </div>
        </div>
    </section>
</template>

<script>
    import '../stylesheets/splide/splide.min.css';

    export default {
        props: { 
            modalProject:  String,
            modalPage:     Number,
            modalAnimate:  Boolean,
            disableMobile: Boolean,
            showMobile:    Boolean,
        },
        emits: ['update:showMobile', 'hideModal'],
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
    #modalInner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    #slider { 
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        width: 90vw;
        padding: 2rem 0;
        background: #333;
        border: 1px solid #999;
    }
    #slider img {
        display: block;
        margin: 0 auto;
        height: auto;
        width: auto;
        max-height: calc(90vh - 8rem);
        max-width: calc(90vw - 3rem);
        border: 1px solid #262626;
        box-shadow: 5px 5px 10px #1a1a1a;
        cursor: grab;
    }

    .closeContainer {
        display: flex;
        flex-direction: row-reverse;
        margin: 5px 0;
        gap: 5px;

        button { 
            height: 2rem;
            width: 2rem;
            color: #fff;
            background: #ff3300;
            border: none;
            border-radius: 3px;
            cursor: pointer;

            transition: all .3s;

            &:hover {
                font-size: 1.3rem;
                font-weight: bold;
                text-shadow: 1px 1px 3px #1a1a1a;
            }
        }
    }

    @media only screen and (max-width: 900px) {
        .closeContainer {

            button {
                height: 2.5rem;
                width: 2.5rem;
            }
        }
    }
</style>