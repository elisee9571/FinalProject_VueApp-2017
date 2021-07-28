<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  ::-webkit-scrollbar {
    display: none;
  }

  #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: "Larsseit";
    font-weight: lighter;
    user-select: none;
  }

  /* space */
  .whitespaces {
    height: 100px;
  }
</style>