<template>
  <n-link 
    :to="{ name: 'index' }" 
    class="app-logo"
  >
    <img 
      src="~assets/img/logo.svg"
      class="logo-img"
      alt="Tezos Giga Node logo">
  </n-link>
</template>

<script>

export default {
  name: 'AppLogo',
}

</script>

<style lang="scss" scoped>
  
  .app-logo {
    display: flex;
  }
  
  .logo-img {
    max-width: 228px;
  }
  
</style>

