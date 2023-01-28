<template>
  <router-view></router-view>
  <TabBar></TabBar>
</template>

<script setup>
import { computed, onMounted, reactive, watchEffect,ref } from 'vue';
import TabBar from '../components/TabBar.vue';
import Home from '../pages/Home.vue';
import Detail from '../pages/Detail.vue';
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