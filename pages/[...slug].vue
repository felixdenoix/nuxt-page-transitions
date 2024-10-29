<script setup>
import transitionConfig from '../helpers/transitionConfig';

definePageMeta({
  pageTransition: transitionConfig,
});

const route = useRoute();

const mainRef = useTemplateRef('main')

const count = ref(0)

onMounted(() => {

  count.value = parseInt(route.params.slug[0])

  const mainBCR = mainRef.value.getBoundingClientRect()

  console.log('slug page loaded')

  console.log('mainref', mainRef.value)

  console.log('page component height', mainBCR.height)

  console.log('spacer count ', count.value)
})
</script>

<template>
  <div class="slug-page" ref="main">
    <h1>page slug: {{route.path}}</h1>

    <span> component count: {{count}} </span>

    <SpacerComponent v-for="i in count" :height="i * 10"/>
  </div>
</template>


<style scoped>
.slug-page {
}
</style>