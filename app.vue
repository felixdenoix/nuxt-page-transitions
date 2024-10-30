<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import HeaderComponent from './components/HeaderComponent.vue';
import { useTransition } from '#imports';
import generateTransitionConfig from '../helpers/transitionConfig';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const { toggleTransitionComplete } = useTransition();

onMounted(() => {
  toggleTransitionComplete(true);
});

const config = generateTransitionConfig(
  () => {
    console.log('onEnter complete');
    toggleTransitionComplete(true);
  },
  () => {
    console.log('onleave complete');
    toggleTransitionComplete(false);
  }
);

/**
🚨 Attention please 🚨

The `definePageMeta` util function accepts an object with a `pageTransition` property. You cannot pass a function that has a side effect that invokes to some method of a composable to update a state.

If you do so, you get this error prompted:

>>> definePageMeta() is a compiler-hint helper that is only usable inside the script block of a single file component which is also a page. Its arguments should be compiled away and passing it at runtime has no effect.

The documentation is available here: https://nuxt.com/docs/guide/directory-structure/pages/#page-metadata
*/
</script>

<template>
  <HeaderComponent />
  <NuxtPage :transition="config" />
</template>
