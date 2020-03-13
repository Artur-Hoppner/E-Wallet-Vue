<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 36rem;
  padding: 1rem;
  box-sizing: border-box;
}

body {
  background-color: rgb(251, 251, 251);
  display: flex;
  justify-content: center;
  align-items: center;
}

// AddCard link and Create card link
  .linkcontainer{  

    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10rem;
      height: 3.5rem;
      font-size: 1.4rem;
      font-weight: 600;
      text-decoration: none;
      color: black;
      border: .125rem solid black;
      border-radius: .5rem;
            &:hover {  
            background: rgb(25, 25, 25);
            color: #ddd;

          }
            &:active {
            background: rgb(25, 25, 25);
            color: #ddd;
            }

    }
  }

</style>
