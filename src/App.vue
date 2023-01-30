<template>
  <router-view></router-view>
</template>

<style>
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body { 
    font-family: 'Montserrat', sans-serif;
    background: #1a1a1a;
    color: #fff;
  }

  .pageContainer { flex: 1 }
  .innerContainer { 
        max-width: 55rem;
        margin: 0 auto;
        padding: 1rem;
    }
</style>
