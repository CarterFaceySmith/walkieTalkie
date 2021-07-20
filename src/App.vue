<template>
  <div id="app">
    <header>
      <h1>Vue Real-Time Voice Chat</h1>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

import {auth} from './firebase'
console.log(auth)

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

</style>
