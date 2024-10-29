<template>
  <header>
    <h2>Test transitions</h2>
    <nav>
      <NuxtLink to="/"> Home </NuxtLink>

      <NuxtLink :to="'/10'"> 10 </NuxtLink>

      <NuxtLink :to="'/20'"> 20 </NuxtLink>

      <NuxtLink :to="'/30'"> 30 </NuxtLink>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;

  display: flex;
  align-items: baseline;
  gap: 20px;
  z-index: 100;
  background-color: lightgrey;
  box-shadow: 1px 0 0 red;
}
nav {
  display: flex;
  gap: 20px;
}
</style>