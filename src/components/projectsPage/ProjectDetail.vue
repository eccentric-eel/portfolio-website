<template>
    <section>
        <div class="txtContainer">
            <div class="titleLink">
                <h1>{{ projectTitle }}</h1>
                <a :href="projectLink">{{ projectDomain }}</a>
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
            <picture v-for="(image, index) in projectImages" :key="image" @click="$parent.$parent.$emit('showModal', { formattedTitle: formattedTitle, pageNumber: index })">
                <source media="(min-width: 900px)" :srcset="require(`@/assets/site-captures/thumbnail-${image}`)">
                <source media="(max-width: 900px)" :srcset="require(`@/assets/site-captures/thumbnail-mobile-${image}`)">
                <img :src="require(`@/assets/site-captures/${image}`)" alt="Project Image">
            </picture>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ProjectDetail',
        computed: {
            formattedTitle: function() {
                if(this.projectTitle === 'Fleet Attack')
                    return 'fleet-attack';
                if(this.projectTitle === 'QRiFile')
                    return 'qrifile';
                else
                    return null;
            }
        },
        props: {
            projectTitle: {
                type: String, 
                required: true,
                default: "Project Title"
            },
            projectImages: {
                type: Array,
                required: true,
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
            projectLink: {
                type: String,
                required: true
            },
            projectDomain: {
                type: String,
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>
    section {
        display: flex;
        margin: 2rem 0;

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
                h5 { font-size: .8rem };

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

                    &.vue     { background: url(../../assets/vue.svg) no-repeat center / 2.5rem }
                    &.php     { background: url(../../assets/php.svg) no-repeat center / 3.5rem }
                    &.python  { background: url(../../assets/python.svg) no-repeat center / 2.5rem }
                    &.stripe  { background: url(../../assets/stripe.svg) no-repeat center / 4rem }
                    &.laravel { background: url(../../assets/laravel.svg) no-repeat center / 2.1rem }
                }
            }
        }

        .imgContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;

            img { 
                height: auto;
                width: 10rem;
                margin: .5rem 0;
                box-shadow: 0 0 5px #333;
                border: 1px solid #fff;
                cursor: pointer;
                transition: all .4s; 

                &:hover { 
                    z-index: 3;
                    transform: scale(2);
                }
            }
        }
        .titleLink {
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                text-decoration: none;
                color: #7021de;
                font-size: 1.1rem;
            }
            h1 { 
                font-size: 2rem;
                text-transform: uppercase;
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
                    width: 3rem;
                }
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