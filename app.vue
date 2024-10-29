<template>
  <div>
    <NuxtLayout>
      <NuxtPage class="page" :keepalive="true"/>
      <pre class="debug">transitionState {{JSON.stringify(transitionState)}}</pre>
    </NuxtLayout>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { useTransitionComposable } from "./composables/transition-composable";

const { toggleTransitionComplete, transitionState } = useTransitionComposable();

onMounted(() => {
  console.log(transitionState)
  toggleTransitionComplete(true);
});
</script>

<style scoped>
.debug {
  position: fixed;
  top: 0;
  right: 0;
  background: lightpink;
}


</style>