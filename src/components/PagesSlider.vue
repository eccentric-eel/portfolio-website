<template>
    <div id="container" :class="scrollTo">
        <summary-page />
        <projects-page />
    </div>
</template>

<script>
    import summaryPage  from './summaryPage/summaryPage.vue';
    import projectsPage from './projectsPage/projectsPage.vue';

    export default {
        name: 'pagesSlider',
        components: {
            summaryPage,
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
        
        &.blankFromSummary {
            animation: toBlankFromSummary .5s ease-in;
            animation-fill-mode: forwards;
        }
        &.blankFromProjects {
            animation: toBlankFromProjects .5s ease-in;
            animation-fill-mode: forwards;
        }

        &.summaryFromBlank {
            animation: toSummaryFromBlank .5s ease-in;
            animation-fill-mode: forwards;
        }
        &.projectsFromBlank {
            animation: toProjectsFromBlank .5s ease-in;
            animation-fill-mode: forwards;
        }

        &.summaryFromProjects {
            animation: toSummaryFromProjects .5s ease-in;
            animation-fill-mode: forwards;
        }
        &.projectsFromSummary {
            animation: toProjectsFromSummary .5s ease-in;
            animation-fill-mode: forwards;
        }

        &.summary { transform: translateX(0vw) }
        &.projects { transform: translateX(-100vw) }
    }

    @keyframes toBlankFromSummary {
        0% { transform: translateX(0vw) }
        100% { transform: translateX(100vw) }
    }
    @keyframes toBlankFromProjects {
        0% { transform: translateX(-100vw) }
        100% { transform: translateX(100vw) }
    }

    @keyframes toSummaryFromBlank {
        0% { transform: translateX(100vw) }
        100% { transform: translateX(0vw) }
    }
    @keyframes toProjectsFromBlank {
        0% { transform: translateX(100vw) }
        100% { transform: translateX(-100vw) }
    }

    @keyframes toSummaryFromProjects {
        0%   { transform: translateX(-100vw) }
        100% { transform: translateX(0vw) }
    }
    @keyframes toProjectsFromSummary {
        0%   { transform: translateX(0vw) }
        100% { transform: translateX(-100vw) }
    }
</style>