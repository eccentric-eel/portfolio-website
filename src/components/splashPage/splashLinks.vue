<template>
    <div>
        <button @click="$emit('changePage', 'resume')">Resume</button>
        <button @click="$emit('changePage', 'projects')">Projects</button>
    </div>
</template>

<style lang="scss" scoped>
    div {
        display: flex;
        justify-content: center;
        margin-top: 3rem;
    }
    button {
        color: #f0e6ff;
        background-image: linear-gradient(to bottom right, #944dff, #4700b3);
        line-height: 5rem;
        height: 5rem;
        width: 14rem;
        margin: 1rem;
        border: none;
        border-radius: 5rem;
        font-size: .8rem;
        box-shadow: 5px 5px 15px #000;
        letter-spacing: 2px;
        user-select: none;
        text-align: center;
        cursor: pointer;

        transition: all .3s;

        &:hover {
            font-size: 1.1rem;
            text-shadow: 2px 2px 4px #000;
            color: #fff;
        }
    }

    @media only screen and (max-width: 900px) {

    }
    @media only screen and (max-width: 600px) {
        div {
            flex-direction: column;
            align-items: center;
            margin-top: 1.5rem;
        }

        button { 
            margin: .5rem;
            width: 90% 
        } 
    }
    @media only screen and (max-width: 450px) {
        
    }
    @media only screen and (max-width: 350px) {
        
    }
</style>
