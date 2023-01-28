<template>
  <van-cell :title="title" :label="label" to="/detail">
    <div class="vanCell">
      <span>Title1</span>
      <div class="vanCell_label">Description 1</div>
    </div>
  </van-cell>
  <van-cell :title="title" :label="label" to="/detail">
    <div class="vanCell">
      <span>Title2</span>
      <div class="vanCell_label">Description 2</div>
    </div>
  </van-cell>
</template>

<script setup>
import { onMounted, watchEffect, reactive, ref, computed } from "vue";

defineProps(["title", "label"]);

const data = reactive({});
const refData = ref("");

onMounted(() => {});

const method = () => {};

computed(() => {});
watchEffect(() => {});
</script>

<style scoped>
.vanCell {
  font-size: 22px;
  font-weight: bold;
  color: #6f6666;
  text-align: left;
}
.vanCell :deep() .vanCell__label {
  color: #000;
  font-weight: 100;
}
</style>
