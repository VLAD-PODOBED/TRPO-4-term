<template>
<DarkMode/>
</template>

<script>

import DarkMode from "./components/DarkMode.vue";


export default {
  name: 'App',
  components: {
   DarkMode,
  },
}
</script>

<style>
@font-face {
  font-family: "Poppins";
  src: url("../public/Poppins-Medium.ttf");
}
body{
  margin: 0%;
}
</style>
