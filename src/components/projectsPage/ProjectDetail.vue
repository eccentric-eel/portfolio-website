<template>
    <section>
        <div class="txtContainer">
            <div class="titleLink">
                <h1 v-show="projectTitle">{{ projectTitle }}</h1>

                <div>
                    <span class="webLink" :class="{'active': projectLink}" @click="(projectLink) ? goToLink(projectLink) : null"></span>
                    <span class="gitLink" :class="{'active': projectGit}"  @click="(projectGit)  ? goToLink(projectGit)  : null"></span>
                </div>
            </div>
            <p>{{ projectDesc }}</p>
            <div>
                <h5>Leveraged Technologies</h5>
                <div v-for="tech in projectTech" :key="tech.id" class="techLogo" :class="tech">
                    <span>{{ tech }}</span>
                </div>
            </div>
        </div>

        <div class="imgContainer">
            <div class="screenBtns">            
                <button :class="{'active': !previewAsMobile}" @click="previewAsMobile = false">Desktop</button>
                <button v-if="!disableMobile" :class="{'active': previewAsMobile}" @click="previewAsMobile = true" :disabled="disableMobile">Mobile</button>
            </div>

            <img v-for="(image, index) in projectImages"
            alt="Project Image"
            :key="image"
            :src="(previewAsMobile) ? require(`@/assets/site-captures/thumbnail-mobile-${image}`) : require(`@/assets/site-captures/thumbnail-${image}`)"
            @click="$parent.$parent.$emit('showModal', { formattedTitle: formattedTitle, pageNumber: index, disableMobile: disableMobile, showMobile: previewAsMobile })">
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ProjectDetail',
        data() {
            return {
                previewAsMobile: false,
            }
        },
        methods: {
            goToLink(url) {
                if(confirm('Open external link in a new tab?')) { window.open(url,'_newtab') }
            }
        },
        computed: {
            formattedTitle: function() {
                if(this.projectTitle === 'Fleet Attack')
                    return 'fleet-attack';
                if(this.projectTitle === 'QRiFile')
                    return 'qrifile';
                if(this.projectTitle === 'Guest Sign-in App')
                    return 'guest-app';
            }
        },
        props: {
            projectTitle: {
                type: String, 
                required: true,
                default: "Project Title"
            },
            projectDesc: {
                type: String,
                required: true,
                default: "Project Description"
            },
            projectTech: {
                type: Array,
                required: true
            },
            projectImages: { type: Array  },
            projectLink:   { type: String },
            projectGit:    { type: String },

            //disable mobile previews (for desktop-only apps)
            disableMobile: { 
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style lang="scss" scoped>
    h1, h5 { color: #1a1a1a }
    h5 { font-size: .8rem }
    h1 {   
        font-size: 2rem;
        text-transform: uppercase;
    }

    section {
        display: flex;
        margin-top: 4rem;

        .txtContainer {
            padding: 1.5rem;
            border-radius: 1rem;
            background: #f2f2f2;
            margin: 0 -.5rem 0 0;   

            p { 
                padding: 1rem 0;
                line-height: 1.5;
                color: #666;
            }
            div {
    
                .techLogo {
                    display: inline-block;
                    position: relative;
                    height: 2.5rem;
                    width: 4rem;
                    margin: 5px 1rem 5px 0;

                    span {
                        position: absolute;
                        bottom: -1rem;
                        left: 50%;
                        transform: translateX(-50%);
                        font-size: .8rem;
                        color: #666;
                    }

                    &.vue     { background: url(../../assets/vue.svg)     no-repeat center / 2.5rem }
                    &.php     { background: url(../../assets/php.svg)     no-repeat center / 3.5rem }
                    &.python  { background: url(../../assets/python.svg)  no-repeat center / 2.5rem }
                    &.stripe  { background: url(../../assets/stripe.svg)  no-repeat center / 4rem   }
                    &.laravel { background: url(../../assets/laravel.svg) no-repeat center / 2.1rem }
                }
            }
        }

        .imgContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;

            img { 
                height: 5rem;
                width: 10rem;
                margin: .5rem 0;
                object-fit: contain;
                box-shadow: 0 0 5px #333;
                border: 1px solid #fff;
                background: #333;
                cursor: pointer;
                transition: all .4s; 

                &:hover { 
                    z-index: 3;
                    transform: scale(1.6);
                }
            }
        }
        .titleLink {
            display: flex;
            justify-content: space-between;
            align-items: center;

            div {
                display: flex;
                gap: 5px;

                .webLink, .gitLink {
                    display: block;
                    height: 2rem;
                    width: 2rem;
                }
                .webLink { 
                    background: url(../../assets/web-disabled.svg) no-repeat center / 2rem;

                    &.active { 
                        cursor: pointer;
                        background: url(../../assets/web.svg) no-repeat center / 2rem;
                    }
                }
                .gitLink {
                    background: url(../../assets/git-disabled.svg) no-repeat center / 2rem;

                    &.active { 
                        cursor: pointer;
                        background: url(../../assets/git.svg) no-repeat center / 2rem;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 900px) {
        section {
            flex-direction: column;
            margin-bottom: 3rem;

            .txtContainer { margin: 0 0 -.5rem 0 }

            .imgContainer {
                flex-direction: row;
                top: auto;
                bottom: -4.5rem;
                right: 0;
                height: 5rem;
                width: 100%;

                img { 
                    margin: 0 .5rem;
                    width: 20%;
                }
                div:first-child { display: none }
            }
        }
    }
    @media only screen and (max-width: 600px) {
        section {
            .titleLink {
                justify-content: left;
                align-items: flex-start;
                flex-direction: column;
            }
        }
    }
</style>