<template>
<Banner></Banner>
<Cell></Cell>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watchEffect } from 'vue';
import Banner from '../components/Banner.vue';
import Cell from '../components/Cell.vue';

defineProps([]);
const data = reactive({});
const refData = ref('');

onMounted(()=>{});

const method = ()=>{};
computed(()=>{});

watchEffect(()=>{});
</script>

<style scoped>

</style>