<template>
    <nav v-show="!hideNav" :class="{ 'activeNoAnimation':   isActiveNoAnimation,
                                     'inactiveNoAnimation': isInactiveNoAnimation,
                                     'active':              isActive,
                                     'inactive':            isInactive }">

        <button :class="{ 'current': isActiveProjectsPage }" @click="$emit('show-page', 'projects')">Projects</button>
        <button :class="{ 'current': isActiveSummaryPage  }" @click="$emit('show-page', 'summary')">Summary</button>
        <button @click="$emit('show-splash')"></button>
    </nav>
</template>

<script>
    export default {
        name: 'NavLinks',
        props: { currentPage: String, activeStatus: String },
        data() {
            return {
                hideNav: false,
            }
        },
        computed: {
            isActive:              function() { return (this.activeStatus === 'active')   ? true : false },
            isInactive:            function() { return (this.activeStatus === 'inactive') ? true : false },
            
            isActiveNoAnimation:   function() { return (this.activeStatus === 'activeNoAnimation')   ? true : false },
            isInactiveNoAnimation: function() { return (this.activeStatus === 'inactiveNoAnimation') ? true : false },

            isActiveProjectsPage:  function() { return (this.currentPage === 'projects') ? true : false },
            isActiveSummaryPage:    function() { return (this.currentPage === 'summary')   ? true : false },
        },
        watch: {
            activeStatus(val) {
                if(this.activeStatus === 'inactive') {
                    setTimeout(() => { this.hideNav = true }, 300);
                }
                if(this.activeStatus === 'active') {
                    this.hideNav = false;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    nav {
        display: flex;
        flex-direction: row-reverse;
        opacity: 0;
        padding-right: 3rem;

        button {
            background: none;
            border: none;
            color: #808080;
            letter-spacing: 1px;
            width: 8rem;
            height: 4rem;
            font-size: 1rem;
            cursor: pointer;

            transition: all .4s; 

            &:hover, &.current { 
                color: #fff;
                letter-spacing: 2px;
                font-size: 1.2rem;
            }
            &:last-of-type { 
                margin-right: auto;
                width: 6rem;
                background: url(../assets/logo.svg) no-repeat center / 3rem;
            }
        }

        &.activeNoAnimation { opacity: 1 }
        &.inactiveNoAnimation {
            visibility: hidden;
            opacity: 0;
        }
        &.active {
            animation: fadeInNav .3s linear;
            animation-fill-mode: forwards;
        }
        &.inactive {
            animation: fadeOutNav .3s linear;
            animation-fill-mode: forwards;
        }
    }

    @keyframes fadeInNav {
        0%   { opacity: 0 }
        100% { opacity: 1 }
    }
    @keyframes fadeOutNav {
        0%   { opacity: 1 }
        100% { opacity: 0 }
    }

    @media only screen and (max-width: 900px) {
        nav { padding-right: 1rem }
    }
    @media only screen and (max-width: 600px) {
 
    }
    @media only screen and (max-width: 350px) {
        nav {
            padding-right: .7rem;

            button { 
                width: 6.5rem;

                &:last-of-type { 
                    width: 5rem;
                    background: url(../assets/logo.svg) no-repeat center / 3rem;
                }
            }
        }
    }
</style>