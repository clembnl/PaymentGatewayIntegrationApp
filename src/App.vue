<template>
  <div class="main">
    <h1>Payment</h1>
    <h4>Choose payment method below</h4>
    <router-view></router-view>
  </div>
</template>

<script setup></script>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

.main {
  max-width: 900px;
  margin: auto;
  margin-top: 100px;
  font-family: 'Open Sans', sans-serif;
  border: 2px solid rgb(100, 100, 100);
  border-radius: 5px;
  background-color: rgb(245, 245, 245);
  padding: 30px;
}

.main h1 {
  margin-bottom: 40px;
  margin-top: 0;
}

.main h4 {
  margin-bottom: 30px;
  font-weight: normal;
}
</style>
