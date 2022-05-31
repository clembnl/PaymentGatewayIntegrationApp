<template>
  <div class="main">
    <div id="logo">
      <img src="./assets/card_icon.png" alt="card icon" width="40" height="40" />
      <h1>Payment</h1>
    </div>
    <h4>Choose payment method below</h4>
    <router-view></router-view>
  </div>
</template>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

.main {
  max-width: 900px;
  margin: auto;
  margin-top: 100px;
  font-family: 'Open Sans', sans-serif;
  border-radius: 5px;
  background-color: rgb(245, 245, 245);
  padding: 30px;
}

.main h1 {
  margin-bottom: 25px;
  margin-top: 0;
}

.main h4 {
  margin-bottom: 30px;
  font-weight: normal;
}

#logo {
  display: flex;
}

#logo img {
  margin: 2px 5px 10px 0;
}
</style>
