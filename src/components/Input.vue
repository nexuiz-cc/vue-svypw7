<template>
  <van-field v-bind="$attrs" />
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
.van-cell {
  line-height: 0.6rem;
}
.van-field :deep() .van-field__label {
  border-right: solid 1px #ccc;
  width: 74px;
}
</style>
