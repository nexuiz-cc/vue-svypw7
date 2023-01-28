<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item @click="toDetail()">
      <img src="/images/1.jpeg" alt="" />
      <div class="text-box">
        <h2>Sit amet consectetur</h2>
        <p>officiis iure vero facere facilis corrupti</p>
      </div>
    </van-swipe-item>
    <van-swipe-item>
      <img src="/images/2.jpeg" alt="" />
      <div class="text-box">
        <h2>Lorem ipsum </h2>
        <p>Corrupti delectus officiis quo culpa atque</p>
      </div>
    </van-swipe-item>
    <van-swipe-item>
      <img src="/images/3.jpeg" alt="" />
      <div class="text-box">
        <h2>Ipsum dolor</h2>
        <p>sit amet,consectetur adipisicing elit. </p>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function toDetail(){
  console.log('toDetail');
  router.push("/detail");
}
</script>

<style scoped>
.my-swipe img {
  width: 100%;
  display: block;
}
.my-swipe .text-box {
  width: 5.8rem;
  padding: 0 0.3rem;
  height: 1.24rem;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: #919191;
}
.my-swipe h2 {
  font-size: 0.3rem;
  font-weight: normal;
  margin-top: 0.22rem;
  line-height: 100%;
  margin-bottom: 0.22rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.my-swipe p {
  line-height: 100%;
}
</style>
