<script setup>

const props = defineProps({
    height: {
        required: true,
        type: Number
    }
})

const mainRef = useTemplateRef('mainSpacer')
const height = computed(() => props.height + 'px')
const computedHeight = ref(0)

const toto = useAsyncData('yolo', () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(true)
    }, 3000);
}))

onMounted(() => {
    computedHeight.value = mainRef.value.getBoundingClientRect().height
})
</script>

<template>
    <div ref="mainSpacer">
        Spacer component <br>
        height: {{ computedHeight }}
    </div>
</template>

<style scoped>
div {
    background: lightgreen;
    min-height: v-bind(height);
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid black;
    background-color: hsl(v-bind('props.height') 50%  50% )
}
</style>