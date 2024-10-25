<template>
  <header>
    <nav>
      <NuxtLink to="/"> Home </NuxtLink>

      <NuxtLink to="/1"> 1 </NuxtLink>

      <NuxtLink :to="'/snafu'"> snafu </NuxtLink>

      <NuxtLink :to="'/test/2'"> 2 </NuxtLink>

      <NuxtLink :to="'/test/yolo'"> yolo </NuxtLink>
    </nav>
  </header>
</template>
