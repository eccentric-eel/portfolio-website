<template>
    <h1>Creativity meets technical expertise.</h1>
    <h4>From front to back-end and everything in between, let's team up to realize your next world-class web application</h4>
</template>

<script>
    export default { 
        name: 'splashText'
    }
</script>

<style lang="scss" scoped>
    h1, h4 {
        color: white;
        text-align: center;
        font-weight: normal;
        text-shadow: 2px 2px 4px black;
        padding: 0 1rem;
        user-select: none;
    }
    h1 {
        font-family: 'Bangers', sans-serif;
        font-size: 5rem;
        text-transform: uppercase;  
        margin-bottom: .5rem;
        letter-spacing: 5px;
    }
    h4 {
        max-width: 50rem;
        margin: 0 auto;
        font-size: 1.3rem;
        line-height: 1.5;
    }

    @media only screen and (max-width: 900px) {
        h1 { font-size: 4rem }
        h4 { font-size: 1.1rem }
    }
    @media only screen and (max-width: 600px) {

    }
    @media only screen and (max-width: 350px) {
        h1 { font-size: 3.5rem }    
    }
</style>