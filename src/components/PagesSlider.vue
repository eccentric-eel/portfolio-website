<template>
    <div id="container" :class="scrollTo">
        <resume-page />
        <projects-page />
    </div>
</template>

<script>
    import resumePage   from './resumePage/resumePage.vue';
    import projectsPage from './projectsPage/projectsPage.vue';

    export default {
        name: 'pagesSlider',
        components: {
            resumePage,
            projectsPage,
        },
        props: { scrollTo: String },
    }
</script>

<style lang="scss" scoped>
    #container {
        display: flex;
        width: 200vw;
        transform: translateX(100vw);
        
        &.blankFromResume {
            animation: toBlankFromResume .5s ease-in;
            animation-fill-mode: forwards;
        }
        &.blankFromProjects {
            animation: toBlankFromProjects .5s ease-in;
            animation-fill-mode: forwards;
        }

        &.resumeFromBlank {
            animation: toResumeFromBlank .5s ease-in;
            animation-fill-mode: forwards;
        }
        &.projectsFromBlank {
            animation: toProjectsFromBlank .5s ease-in;
            animation-fill-mode: forwards;
        }

        &.resumeFromProjects {
            animation: toResumeFromProjects .5s ease-in;
            animation-fill-mode: forwards;
        }
        &.projectsFromResume {
            animation: toProjectsFromResume .5s ease-in;
            animation-fill-mode: forwards;
        }

        &.resume { transform: translateX(0vw) }
        &.projects { transform: translateX(-100vw) }
    }

    @keyframes toBlankFromResume {
        0% { transform: translateX(0vw) }
        100% { transform: translateX(100vw) }
    }
    @keyframes toBlankFromProjects {
        0% { transform: translateX(-100vw) }
        100% { transform: translateX(100vw) }
    }

    @keyframes toResumeFromBlank {
        0% { transform: translateX(100vw) }
        100% { transform: translateX(0vw) }
    }
    @keyframes toProjectsFromBlank {
        0% { transform: translateX(100vw) }
        100% { transform: translateX(-100vw) }
    }

    @keyframes toResumeFromProjects {
        0%   { transform: translateX(-100vw) }
        100% { transform: translateX(0vw) }
    }
    @keyframes toProjectsFromResume {
        0%   { transform: translateX(0vw) }
        100% { transform: translateX(-100vw) }
    }
</style>