<template>
  <van-button v-bind="$attrs" round color="#4c4f50" block type="primary">
    <slot></slot>
  </van-button>
</template>

<script setup>
import { onMounted, watchEffect, reactive, ref, computed } from "vue";

defineProps([]);

const data = reactive({});
const refData = ref("");

onMounted(() => {});

const method = () => {};

computed(() => {});
watchEffect(() => {});
</script>

<style scoped>
.van-button {
  height: 0.64rem;
  border-radius: 8px;
}
</style>
