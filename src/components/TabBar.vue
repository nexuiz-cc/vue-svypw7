<template>
  <Tabbar v-model="active">
    <TabbarItem icon="home-o" to="/home" name="home">Home</TabbarItem>
    <TabbarItem icon="search" to="/follow" name="follow">Search</TabbarItem>
    <TabbarItem icon="friends-o" to="/column" name="column">Friends</TabbarItem>
    <TabbarItem icon="setting-o" to="/user" name="user">MyPage</TabbarItem>
  </Tabbar>
</template>

<script setup>
import { Tabbar, TabbarItem } from "vant";
import { ref } from "vue";
const active = ref("home");
</script>


<style scoped>

</style>
