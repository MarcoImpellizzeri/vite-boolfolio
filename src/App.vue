<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <TheHeader />

  <main>
    <router-view />
  </main>
</template>

<style lang="scss">

</style>