<template>
  <router-view></router-view>
</template>

<style lang="scss">
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
  .screenBtns {
        display: flex;
        margin: 5px 0;
        gap: 5px;

        button {
            flex: 1;
            padding: 5px;
            background: #333;
            color: #999;
            border: solid 1px #999;
            box-shadow: 0 0 5px #333;
            cursor: pointer;

            transition: all .5s; 
        
            &.active {
                color: #ff00ff;
                border: solid 1px #ff00ff;
                text-shadow: 2px 2px 4px #1a1a1a;
                font-weight: bold;
            }
        }
    }
</style>
